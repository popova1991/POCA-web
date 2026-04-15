export default function Sidebar({ open, items, title, onClose, onSelect }) {
  return (
    <div className={`sidebar ${open ? "active" : ""}`}>
      <div className="sidebar-header">
        <h2>{title}</h2>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>

      <ul className="grades-list">
        {items.map((item) => (
          <li key={item} onClick={() => onSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
