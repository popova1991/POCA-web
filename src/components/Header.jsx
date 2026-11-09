export default function Header({ onHome, onUpdates, hasUpdates }) {
  return (
    <header className="header">
      <div className="logo" onClick={onHome} role="button" tabIndex={0}>
        Speca
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
    </header>
  );
}
