import { useEffect, useRef, useState } from "react";

const HEADER_GARLAND_LIGHTS = Array.from({ length: 30 }, (_, index) => {
  const scallop = Math.floor(index / 5);
  const step = index % 5;
  const t = (step + 1) / 6;
  const x = scallop * 200 + 20 + step * 40;
  const y = (1 - t) ** 2 * 4 + 2 * (1 - t) * t * 30 + t ** 2 * 4;

  return {
    left: (x / 1200) * 100,
    top: (y / 38) * 100,
    color: ["#FDE68A", "#FCA5A5", "#C4B5FD", "#86EFAC"][index % 4],
  };
});

function HeaderGarland() {
  return (
    <div className="header-garland" aria-hidden="true">
      <svg
        className="header-garland__wire"
        viewBox="0 0 1200 38"
        preserveAspectRatio="none"
      >
        <path
          d="M0 4 Q 100 34 200 4 Q 300 34 400 4 Q 500 34 600 4 Q 700 34 800 4 Q 900 34 1000 4 Q 1100 34 1200 4"
          fill="none"
          stroke="rgba(180, 83, 9, 0.35)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {HEADER_GARLAND_LIGHTS.map((light, index) => (
        <span
          key={index}
          className="header-garland__light"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            color: light.color,
            animationDelay: `${(index % 4) * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}

function LogoReindeer() {
  return (
    <svg
      className="logo-reindeer"
      viewBox="0 0 96 38"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M34 20 Q48 12 66 14"
        fill="none"
        stroke="#B45309"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 2.5"
      />

      <path
        d="M6 32 H28 Q33 32 33 27 L33 22"
        fill="none"
        stroke="#B45309"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 27 L10 18 H28 Q31 18 31 22 L31 27 Z"
        fill="#DC2626"
        stroke="#991B1B"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <rect
        x="14"
        y="12"
        width="8"
        height="7"
        rx="1"
        fill="#FDE68A"
        stroke="#B45309"
        strokeWidth="0.8"
      />
      <path d="M18 12 V19 M14 15.5 H22" stroke="#DC2626" strokeWidth="1" />

      <ellipse cx="60" cy="22" rx="13" ry="7" fill="#8B5E3C" />
      <path
        d="M52 27 L50 36 M57 28 L56 36 M65 28 L67 36 M70 27 L73 36"
        stroke="#6B4423"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M69 19 L76 12"
        stroke="#8B5E3C"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="78" cy="12" r="5" fill="#8B5E3C" />
      <ellipse cx="84" cy="13" rx="3.2" ry="2.4" fill="#A9744F" />
      <circle cx="79" cy="11" r="0.9" fill="#1F2937" />
      <circle cx="87" cy="13" r="0.9" fill="#DC2626" />
      <path
        d="M76 7 L74 2 M76 7 L79 2 M74 4 L71 2 M79 4 L82 2"
        stroke="#6B4423"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="47" cy="20" r="1.8" fill="#FDE68A" />
      <path
        d="M72 16 Q75 18 78 16"
        fill="none"
        stroke="#DC2626"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header({
  onHome,
  onUpdates,
  hasUpdates,
  isDarkTheme,
  onToggleTheme,
  holidayEnabled = false,
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
    <header className={`header${holidayEnabled ? " header--holiday" : ""}`}>
      {holidayEnabled && <HeaderGarland />}

      <div className="logo" onClick={onHome} role="button" tabIndex={0}>
        <span className="logo-text">
          <span className="logo-letter">S</span>peca
        </span>
        {holidayEnabled && <LogoReindeer />}
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
