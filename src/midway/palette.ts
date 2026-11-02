import { theme } from '../carnival';

const { colors } = theme;

export const SEASONS = ['spring', 'summer', 'fall', 'winter'] as const;
export const THEMES = ['carnival', 'space', 'got', 'lotr'] as const;
export type Season = (typeof SEASONS)[number];
export type Theme = (typeof THEMES)[number];

export const SEASON_NAMES: Record<Season, string> = {
  spring: 'Spring',
  summer: 'Summer',
  fall: 'Fall',
  winter: 'Winter',
};
export const THEME_NAMES: Record<Theme, string> = {
  carnival: 'Classic carnival',
  space: 'Space',
  got: 'Game of Thrones',
  lotr: 'The Lord of the Rings',
};

export interface Palette {
  sky: string;
  skyHigh: string;
  cloud: string;
  cloudShade: string;
  haze: string;
  grass: string;
  grassDark: string;
  grassEdge: string;
  grassLight: string;
  path: string;
  pathShade: string;
  hedge: string;
  hedgeDark: string;
  hedgeLight: string;
  shadow: string;
  red: string;
  redShade: string;
  cream: string;
  creamShade: string;
  gold: string;
  goldShade: string;
  blue: string;
  blueShade: string;
  sky2: string;
  pink: string;
  pinkShade: string;
  wood: string;
  woodDark: string;
  woodLight: string;
  board: string;
  metal: string;
  metalShade: string;
  ink: string;
  opening: string;
  closed: string;
  closedShade: string;
  white: string;
  skins: readonly string[];
  hairs: readonly string[];
  shirts: readonly string[];
  pants: readonly string[];
  bunting: readonly string[];
  balloons: readonly string[];
}

/**
 * The midway map's sunny summer palette. Tent reds, creams and golds come from
 * the carnival theme; the sky, grass, paths and other scenery shades only the
 * map uses live here.
 */
const SUMMER_CARNIVAL: Palette = {
  sky: '#38b4e6',
  skyHigh: '#1f9bd6',
  cloud: '#bfeafc',
  cloudShade: '#94d8f4',
  haze: '#5fc3b8',

  grass: '#a5c43a',
  grassDark: '#8aab2a',
  grassEdge: '#7a9a22',
  grassLight: '#b6d24c',
  path: '#f3e28e',
  pathShade: '#e2cd70',
  hedge: '#6f9a2c',
  hedgeDark: '#5a8122',
  hedgeLight: '#86b236',
  shadow: 'rgba(60, 90, 10, 0.28)',

  red: colors.stripeA,
  redShade: '#b8283a',
  cream: colors.stripeB,
  creamShade: '#e3d9c2',
  gold: colors.accent,
  goldShade: '#e0a91c',
  blue: '#2b8ccc',
  blueShade: '#1f6aa0',
  sky2: colors.water,
  pink: '#f59ac0',
  pinkShade: '#e076a4',
  wood: colors.wood,
  woodDark: '#6b4429',
  woodLight: '#b7834f',
  board: '#c8955b',
  metal: '#e9e4f2',
  metalShade: '#b9b0cc',
  ink: colors.background,
  opening: '#4a2a28',
  closed: '#a99cc4',
  closedShade: '#8a7daa',
  white: '#ffffff',

  skins: ['#f1c27d', '#c68642', '#8d5524', '#e0ac69', '#ffdbac'],
  hairs: ['#3b2219', '#1b1035', '#a55728', '#e6c35c', '#6b4429'],
  shirts: [colors.water, '#7bd389', '#b48ee0', colors.danger, '#2b8ccc', colors.stripeB],
  pants: ['#2d3a6b', '#3b2a4f', '#5a4a3a'],
  bunting: [colors.stripeA, colors.accent, '#2b8ccc', colors.stripeB],
  balloons: [colors.stripeA, colors.accent, '#2b8ccc', colors.water, '#f59ac0'],
};

/** What each season changes: the sky, the ground and the hedges. */
const SEASON_COLORS: Record<Season, Partial<Palette>> = {
  spring: {
    sky: '#8fd3f4',
    skyHigh: '#5cbbe8',
    cloud: '#f2fbff',
    cloudShade: '#cdeefb',
    haze: '#a8dcc8',
    grass: '#7fcf5a',
    grassDark: '#62b544',
    grassEdge: '#56a33a',
    grassLight: '#97dc6e',
    hedge: '#5fae3e',
    hedgeDark: '#4a9130',
    hedgeLight: '#f7b6d2',
    shadow: 'rgba(40, 90, 30, 0.25)',
  },
  summer: {},
  fall: {
    sky: '#e9b97a',
    skyHigh: '#7fa6c9',
    cloud: '#f6e2c4',
    cloudShade: '#e6c79c',
    haze: '#c99a5b',
    grass: '#b9a144',
    grassDark: '#9c8434',
    grassEdge: '#8a722a',
    grassLight: '#c8b257',
    path: '#e3c9a0',
    pathShade: '#cfb084',
    hedge: '#c4622d',
    hedgeDark: '#9a4422',
    hedgeLight: '#e8a03c',
    shadow: 'rgba(80, 50, 10, 0.28)',
  },
  winter: {
    sky: '#c9dbea',
    skyHigh: '#8fb0cc',
    cloud: '#f4f7fb',
    cloudShade: '#d6e1ec',
    haze: '#b7c9d8',
    grass: '#e8eff5',
    grassDark: '#c8d6e3',
    grassEdge: '#b4c5d6',
    grassLight: '#f6f9fc',
    path: '#c9bfae',
    pathShade: '#b3a893',
    hedge: '#3f6b4f',
    hedgeDark: '#2f5340',
    hedgeLight: '#f2f6fa',
    shadow: 'rgba(40, 60, 90, 0.22)',
  },
};

/** What each theme changes: the tents, booths, flags, balloons and crowd. */
const THEME_COLORS: Record<Theme, Partial<Palette>> = {
  carnival: {},
  space: {
    sky: '#14123a',
    skyHigh: '#05061a',
    cloud: '#3b2f78',
    cloudShade: '#2a2160',
    haze: '#5a3f9e',
    red: '#ff4f9a',
    redShade: '#c93378',
    cream: '#e8ecff',
    creamShade: '#b8c0e6',
    gold: '#ffd23f',
    goldShade: '#d9ab1f',
    blue: '#4f6bff',
    blueShade: '#3449c9',
    sky2: '#45e0d8',
    pink: '#9b5cff',
    pinkShade: '#7639d6',
    metal: '#dfe6f5',
    metalShade: '#9aa6c4',
    shirts: ['#e8ecff', '#ff7a2f', '#45e0d8', '#9b5cff'],
    pants: ['#2b2f4a', '#3f4566', '#1d2036'],
    bunting: ['#ff4f9a', '#ffd23f', '#4f6bff', '#45e0d8'],
    balloons: ['#ff4f9a', '#ffd23f', '#4f6bff', '#45e0d8', '#9b5cff'],
  },
  got: {
    red: '#8b1a1a',
    redShade: '#661111',
    cream: '#d8d0bd',
    creamShade: '#b5ad99',
    gold: '#c9a227',
    goldShade: '#9e7d17',
    blue: '#4a5568',
    blueShade: '#343c4b',
    sky2: '#7d8fa3',
    pink: '#2b2b30',
    pinkShade: '#18181c',
    shirts: ['#8b1a1a', '#4a5568', '#2b2b30', '#c9a227', '#5c4033'],
    pants: ['#2b2b30', '#3d2b1f', '#4a4038'],
    bunting: ['#8b1a1a', '#c9a227', '#4a5568', '#2b2b30'],
    balloons: ['#8b1a1a', '#c9a227', '#4a5568', '#d8d0bd'],
  },
  lotr: {
    red: '#7a3b2e',
    redShade: '#5a2a20',
    cream: '#efe3c2',
    creamShade: '#d3c49e',
    gold: '#d4af37',
    goldShade: '#a8871f',
    blue: '#2f5d3a',
    blueShade: '#21442a',
    sky2: '#8fb3a0',
    pink: '#a3b86c',
    pinkShade: '#81964f',
    shirts: ['#2f5d3a', '#7a3b2e', '#a3b86c', '#efe3c2', '#5c7a8a'],
    pants: ['#4a3a2a', '#3b4a32', '#5a4a3a'],
    bunting: ['#2f5d3a', '#d4af37', '#7a3b2e', '#efe3c2'],
    balloons: ['#2f5d3a', '#d4af37', '#7a3b2e', '#a3b86c'],
  },
};

/** The map's colours for a season and a theme. The theme wins where both set a colour. */
export function sceneryPalette(season: Season, theme: Theme): Palette {
  return { ...SUMMER_CARNIVAL, ...SEASON_COLORS[season], ...THEME_COLORS[theme] };
}

/**
 * The colours the map draws with right now. Midway code reads it at draw time,
 * so setScenery takes effect on the next frame (and the next ground layer).
 */
export const palette: Palette = sceneryPalette('summer', 'carnival');

export function setScenery(season: Season, theme: Theme) {
  Object.assign(palette, sceneryPalette(season, theme));
}
