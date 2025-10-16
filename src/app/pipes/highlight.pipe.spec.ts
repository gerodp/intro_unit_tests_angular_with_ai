import { HighlightPipe } from './highlight.pipe';

describe('HighlightPipe', () => {
  const pipe = new HighlightPipe();

  it('debería resaltar coincidencias', () => {
    const result = pipe.transform('Hola Angular', 'an');
    expect(result).toBe('Hola <mark>An</mark>gular');
  });

  it('debería ser case insensitive', () => {
    const result = pipe.transform('Angular es genial', 'ANG');
    expect(result).toBe('<mark>Ang</mark>ular es genial');
  });

  it('debería devolver el valor original si no hay término de búsqueda', () => {
    expect(pipe.transform('Angular', '')).toBe('Angular');
  });
});
