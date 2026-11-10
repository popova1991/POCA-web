import { useEffect, useRef } from "react";

export default function Footer({ onFeedback }) {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return undefined;
    }

    const updateFooterHeight = () => {
      document.documentElement.style.setProperty(
        "--footer-height",
        `${footer.offsetHeight}px`
      );
    };

    updateFooterHeight();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateFooterHeight)
        : null;

    resizeObserver?.observe(footer);
    window.addEventListener("resize", updateFooterHeight);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateFooterHeight);
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
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
