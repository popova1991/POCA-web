export default function Sidebar({ open, items, title, onClose, onSelect }) {
  return (
    <aside className={`sidebar ${open ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">
            <span className="sidebar-icon" aria-hidden="true">✦</span>
            <h2>{title}</h2>
          </div>

          <button className="close-btn" onClick={onClose} aria-label="Закрыть">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <ul className="grades-list">
          {items.map((item, index) => (
            <li
              key={item}
              style={{ animationDelay: `${index * 60}ms` }}
              onClick={() => onSelect(item)}
            >
              <span className="grade-dot" aria-hidden="true" />
              <span className="grade-name">{item}</span>
              <svg
                className="grade-chevron"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer" />
      </aside>
    );
  }