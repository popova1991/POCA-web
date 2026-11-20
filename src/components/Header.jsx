import { useEffect, useRef, useState } from "react";

export default function Header({
  onHome,
  onUpdates,
  hasUpdates,
  isDarkTheme,
  onToggleTheme,
}) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef(null);

  useEffect(() => {
    if (!settingsOpen) {
      return undefined;
    }

    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [settingsOpen]);

  return (
    <header className="header">
      <div className="logo" onClick={onHome} role="button" tabIndex={0}>
        Speca
      </div>

      <div className="header-actions">
        <div className="header-settings" ref={settingsRef}>
          <button
            type="button"
            className="header-settings-btn"
            aria-label="Настройки"
            aria-expanded={settingsOpen}
            onClick={() => setSettingsOpen((open) => !open)}
          >
            <svg
              className="settings-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>

          {settingsOpen && (
            <div
              className="settings-menu"
              role="group"
              aria-label="Настройки темы"
            >
              <label className="settings-option">
                <span>Ночная тема</span>
                <input
                  type="radio"
                  name="theme"
                  checked={isDarkTheme}
                  onClick={onToggleTheme}
                  readOnly
                />
              </label>
            </div>
          )}
        </div>

        {hasUpdates && (
          <button
            type="button"
            className="header-updates-btn"
            onClick={onUpdates}
          >
            <span aria-hidden="true">✨</span>
            Что нового
          </button>
        )}
      </div>
    </header>
  );
}
