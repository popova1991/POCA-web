export default function Footer({ onFeedback }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-info">
          <span className="footer-logo">Speca</span>
          <span className="footer-copy">© 2026 Speca</span>
          <span className="footer-tagline">
            Платформа для системных аналитиков
          </span>
        </div>

        <button
          type="button"
          className="btn-primary footer-feedback"
          onClick={onFeedback}
        >
          Обратная связь
        </button>
      </div>
    </footer>
  );
}
