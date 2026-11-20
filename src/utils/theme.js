const STORAGE_KEY = "speca:theme";

const DARK = "dark";
const LIGHT = "light";

let memoryTheme = LIGHT;

export function getStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    return stored === DARK ? DARK : LIGHT;
  } catch {
    return memoryTheme;
  }
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

export function saveTheme(theme) {
  memoryTheme = theme;

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage недоступен — остаёмся на in-memory fallback
  }
}
