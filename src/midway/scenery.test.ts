import { describe, expect, it } from 'vitest';
import { palette, sceneryPalette, setScenery, style, THEME_STYLES, THEMES } from './palette';
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

describe('theme styles', () => {
  it('builds every theme from its own booths, landmark, sign font and gate', () => {
    for (const key of ['booth', 'landmark', 'font', 'gate'] as const) {
      const values = THEMES.map((theme) => THEME_STYLES[theme][key]);
      expect(new Set(values).size).toBe(THEMES.length);
    }
  });

  it('keeps the classic carnival as it was', () => {
    expect(THEME_STYLES.carnival).toMatchObject({
      gate: 'TESSL CARNIVAL',
      booth: 'stall',
      landmark: 'big-top',
      floater: 'balloon',
    });
  });

  it('rebuilds the live style with the theme, whatever the season', () => {
    setScenery('winter', 'got');
    expect(style).toEqual(THEME_STYLES.got);
    setScenery('spring', 'space');
    expect(style).toEqual(THEME_STYLES.space);
    setScenery('summer', 'carnival');
    expect(style).toEqual(THEME_STYLES.carnival);
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
