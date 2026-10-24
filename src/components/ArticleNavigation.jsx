export default function ArticleNavigation({
    previous,
    next,
    onNavigate,
}) {
    if (!previous && !next) return null;

    return (
        <nav
            className="article-nav article-nav--bottom"
            aria-label="Навигация по статьям UML"
        >
            {previous && (
                <button
                    type="button"
                    className="article-nav__item article-nav__item--previous"
                    onClick={() => onNavigate(previous.key)}
                    aria-label={`Предыдущая статья: ${previous.title}`}
                    title={previous.title}
                >
                    <span className="article-nav__label">
                        <span className="article-nav__arrow" aria-hidden="true">
                            ←
                        </span>
                        Предыдущая статья
                    </span>

                    <span className="article-nav__title">
                        {previous.title}
                    </span>
                </button>
            )}

            {next && (
                <button
                    type="button"
                    className="article-nav__item article-nav__item--next"
                    onClick={() => onNavigate(next.key)}
                    aria-label={`Следующая статья: ${next.title}`}
                    title={next.title}
                >
                    <span className="article-nav__label">
                        Следующая статья
                        <span className="article-nav__arrow" aria-hidden="true">
                            →
                        </span>
                    </span>

                    <span className="article-nav__title">
                        {next.title}
                    </span>
                </button>
            )}
        </nav>
    );
}
