export default function ArticleSideNavigation({
    previous,
    next,
    onNavigate,
    label = "Навигация по статьям",
}) {
    if (!previous && !next) return null;

    return (
        <nav
            className="article-side-nav"
            aria-label={label}
        >
            {previous && (
                <button
                    type="button"
                    className="article-side-nav__button article-side-nav__button--previous"
                    onClick={() => onNavigate(previous.key)}
                    aria-label={`Предыдущая статья: ${previous.title}`}
                >
                    <span className="article-side-nav__arrow" aria-hidden="true">
                        ←
                    </span>

                    <span
                        className="article-side-nav__tooltip"
                        aria-hidden="true"
                    >
                        {previous.title}
                    </span>
                </button>
            )}

            {next && (
                <button
                    type="button"
                    className="article-side-nav__button article-side-nav__button--next"
                    onClick={() => onNavigate(next.key)}
                    aria-label={`Следующая статья: ${next.title}`}
                >
                    <span className="article-side-nav__arrow" aria-hidden="true">
                        →
                    </span>

                    <span
                        className="article-side-nav__tooltip"
                        aria-hidden="true"
                    >
                        {next.title}
                    </span>
                </button>
            )}
        </nav>
    );
}
