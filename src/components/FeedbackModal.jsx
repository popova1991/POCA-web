import { useEffect, useState } from "react";

export default function FeedbackModal({ open, onClose }) {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open) {
      setText("");
      setSent(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    // Здесь можно отправить текст на бэкенд. Пока просто показываем успех.
    setSent(true);
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-header">
          <h3 className="modal-title">
            {sent ? "Готово!" : "Обратная связь"}
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

        {sent ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <p className="modal-success-text">
              Спасибо! Ваше сообщение отправлено.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <textarea
              className="modal-textarea"
              placeholder="Опишите вашу идею, замечание или проблему…"
              value={text}
              maxLength={2000}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
            <div className="modal-counter">
              {text.length}/2000
            </div>
            <div className="modal-actions">
              <button
                type="button"
                className="btn-ghost"
                onClick={onClose}
              >
                Отмена
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={!text.trim()}
              >
                Отправить
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
