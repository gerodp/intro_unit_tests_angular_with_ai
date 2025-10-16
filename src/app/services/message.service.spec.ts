import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('debería comenzar sin mensajes', () => {
    expect(service.all).toEqual([]);
  });

  it('debería almacenar nuevos mensajes', () => {
    service.add('Hola');
    service.add('Adiós');

    expect(service.all).toEqual(['Hola', 'Adiós']);
  });

  it('debería limpiar el historial', () => {
    service.add('Hola');
    service.clear();

    expect(service.all).toEqual([]);
  });
});
