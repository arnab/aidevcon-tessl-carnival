import { describe, expect, it } from 'vitest';
import { palette, sceneryPalette, setScenery } from './palette';
import { DEFAULT_SCENERY, loadScenery, parseScenery, saveScenery } from './scenery';

function memoryStorage() {
  const memory = new Map<string, string>();
  return {
    getItem: (key: string) => memory.get(key) ?? null,
    setItem: (key: string, value: string) => void memory.set(key, value),
  };
}

describe('sceneryPalette', () => {
  it('keeps the sunny summer carnival as the default', () => {
    expect(sceneryPalette('summer', 'carnival').grass).toBe('#a5c43a');
  });

  it('gives every season its own ground', () => {
    const grass = (['spring', 'summer', 'fall', 'winter'] as const).map(
      (season) => sceneryPalette(season, 'carnival').grass,
    );
    expect(new Set(grass).size).toBe(4);
  });

  it('gives every theme its own tents', () => {
    const tents = (['carnival', 'space', 'got', 'lotr'] as const).map(
      (theme) => sceneryPalette('summer', theme).red,
    );
    expect(new Set(tents).size).toBe(4);
  });

  it('keeps the season ground under a theme', () => {
    expect(sceneryPalette('winter', 'got').grass).toBe(sceneryPalette('winter', 'carnival').grass);
  });

  it('repaints the live palette', () => {
    setScenery('fall', 'space');
    expect(palette).toEqual(sceneryPalette('fall', 'space'));
    setScenery('summer', 'carnival');
    expect(palette).toEqual(sceneryPalette('summer', 'carnival'));
  });
});

describe('scenery choice', () => {
  it('remembers the season and theme', () => {
    const storage = memoryStorage();
    saveScenery({ season: 'winter', theme: 'lotr' }, storage);
    expect(loadScenery(storage)).toEqual({ season: 'winter', theme: 'lotr' });
  });

  it('falls back to the default for nothing saved, junk or unknown values', () => {
    expect(loadScenery(memoryStorage())).toEqual(DEFAULT_SCENERY);
    expect(parseScenery('not json')).toEqual(DEFAULT_SCENERY);
    expect(parseScenery('null')).toEqual(DEFAULT_SCENERY);
    expect(parseScenery('{"season":"monsoon","theme":"space"}')).toEqual({
      season: 'summer',
      theme: 'space',
    });
  });
});
