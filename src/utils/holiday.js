const SEASON_START_MONTH = 10;
const SEASON_START_DAY = 25;
const SEASON_END_MONTH = 0;
const SEASON_END_DAY = 14;

function getPreviewOverride() {
  if (typeof window === "undefined") {
    return null;
  }

  const value = new URLSearchParams(window.location.search).get("holiday");

  if (value === "1") {
    return true;
  }

  if (value === "0") {
    return false;
  }

  return null;
}

export function isHolidaySeason(date = new Date()) {
  const preview = getPreviewOverride();

  if (preview !== null) {
    return preview;
  }

  const month = date.getMonth();
  const day = date.getDate();

  const afterStart =
    month === SEASON_START_MONTH ? day >= SEASON_START_DAY : month > SEASON_START_MONTH;
  const beforeEnd =
    month === SEASON_END_MONTH ? day <= SEASON_END_DAY : month < SEASON_END_MONTH;

  if (SEASON_START_MONTH <= SEASON_END_MONTH) {
    return afterStart && beforeEnd;
  }

  return afterStart || beforeEnd;
}
