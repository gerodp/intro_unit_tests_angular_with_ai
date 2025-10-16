import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let fixture: ComponentFixture<CounterComponent>;
  let component: CounterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar el valor inicial', () => {
    const valueEl = fixture.debugElement.query(By.css('.value'));
    expect(valueEl.nativeElement.textContent.trim()).toBe('0');
  });

  it('debería incrementar al hacer click', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.value).toBe(1);
    const valueEl = fixture.debugElement.query(By.css('.value'));
    expect(valueEl.nativeElement.textContent.trim()).toBe('1');
  });

  it('debería deshabilitar el botón de reinicio cuando el valor no cambió', () => {
    const resetButton = fixture.debugElement.queryAll(By.css('button'))[1];
    expect(resetButton.properties['disabled']).toBeTrue();
  });

  it('debería reiniciar el valor al hacer click en reiniciar', () => {
    component.value = 3;
    fixture.detectChanges();

    const resetButton = fixture.debugElement.queryAll(By.css('button'))[1];
    resetButton.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.value).toBe(component.initialValue);
    expect(resetButton.properties['disabled']).toBeTrue();
  });
});
