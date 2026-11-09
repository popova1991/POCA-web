import { releases } from "../data/releases";

const STORAGE_KEY = "speca:seen-release-id";
const RECENT_RELEASES_LIMIT = 10;

let memorySeenId = null;

function getSortedReleases() {
  return [...releases].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestRelease() {
  return getSortedReleases()[0] ?? null;
}

export function getSeenReleaseId() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return memorySeenId;
  }
}

export function markReleaseSeen(id) {
  memorySeenId = id;

  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // localStorage недоступен — остаёмся на in-memory fallback
  }
}

export function getUnseenReleases() {
  const sorted = getSortedReleases();

  if (!sorted.length) return [];

  const seenId = getSeenReleaseId();

  if (!seenId) return [sorted[0]];

  const seenIndex = sorted.findIndex((release) => release.id === seenId);

  if (seenIndex === -1) return [sorted[0]];

  return sorted.slice(0, seenIndex);
}

export function getRecentReleases(limit = RECENT_RELEASES_LIMIT) {
  return getSortedReleases().slice(0, limit);
}
