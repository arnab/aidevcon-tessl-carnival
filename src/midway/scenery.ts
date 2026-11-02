import { SEASONS, THEMES, type Season, type Theme } from './palette';

export interface Scenery {
  season: Season;
  theme: Theme;
}

type SceneryStorage = Pick<Storage, 'getItem' | 'setItem'>;

const STORAGE_KEY = 'tessl-carnival:scenery';
export const DEFAULT_SCENERY: Scenery = { season: 'summer', theme: 'carnival' };

/** Reads a saved scenery choice, falling back to the default for anything unknown. */
export function parseScenery(saved: string | null): Scenery {
  try {
    const value: unknown = JSON.parse(saved ?? '{}');
    const { season, theme } = (value ?? {}) as Partial<Record<keyof Scenery, unknown>>;
    return {
      season: SEASONS.find((s) => s === season) ?? DEFAULT_SCENERY.season,
      theme: THEMES.find((t) => t === theme) ?? DEFAULT_SCENERY.theme,
    };
  } catch {
    return { ...DEFAULT_SCENERY };
  }
}

function browserStorage(): SceneryStorage | undefined {
  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
}

export function loadScenery(storage = browserStorage()): Scenery {
  try {
    return parseScenery(storage?.getItem(STORAGE_KEY) ?? null);
  } catch {
    return { ...DEFAULT_SCENERY };
  }
}

export function saveScenery(scenery: Scenery, storage = browserStorage()) {
  try {
    storage?.setItem(STORAGE_KEY, JSON.stringify(scenery));
  } catch {
    // Storage can refuse a write. The choice still holds for this page load.
  }
}
