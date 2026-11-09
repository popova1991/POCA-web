import { useEffect } from "react";
import updatesImg from "../img/updates.svg";

function formatDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function UpdatesModal({
  open,
  releases = [],
  onClose,
  onNavigate,
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !releases.length) return null;

  const isMultiple = releases.length > 1;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal updates-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="updates-title"
      >
        <div className="modal-header">
          <h3 className="modal-title" id="updates-title">
            {releases[0].title || "У нас обновления"}
          </h3>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <img className="updates-image" src={updatesImg} alt="" />

        <p className="updates-subtitle">В Speca появилось кое-что новое:</p>

        <div className="updates-releases">
          {releases.map((release) => (
            <section className="updates-release" key={release.id}>
              {isMultiple && (
                <div className="updates-release-header">
                  <span className="updates-release-date">
                    {formatDate(release.date)}
                  </span>
                  {release.title && (
                    <span className="updates-release-title">
                      {release.title}
                    </span>
                  )}
                </div>
              )}

              <ul className="updates-list">
                {release.items.map((item) => (
                  <li
                    className="updates-item"
                    key={`${release.id}-${item.text}`}
                  >
                    <span className="updates-item-icon">
                      {item.icon || "✨"}
                    </span>
                    <span className="updates-item-text">{item.text}</span>
                    {item.page && (
                      <button
                        type="button"
                        className="updates-item-link"
                        onClick={() => onNavigate(item.page)}
                      >
                        Перейти
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="updates-actions">
          <button type="button" className="btn-primary" onClick={onClose}>
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
}
