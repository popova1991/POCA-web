export default function UML({ setPage }) {
    const cards = [
        {
            title: "Цели моделирования",
            description:
                "Различия: для согласования с бизнесом / для передачи разработчикам / для регламента / для анализа узких мест.",
            page: "uml_goals",
        },
        {
            title: "Уровни абстракции",
            description:
                "Descriptive (кто что делает), Analytical (логика и данные), Executable (BPMS, автоматизация).",
            page: "uml_elements",
        },
        {
            title: "Золотое правило BPMN",
            description:
                "Один процесс — одна диаграмма. Если не влезает на экран — нужна декомпозиция.",
            page: "uml_gold",
        },
        {
            title: "Потребители диаграммы",
            description:
                "Бизнес-пользователь, разработчик, тестировщик — у каждого свой уровень детализации.",
            page: "uml_customer",
        },
        {
            title: "Пулы и дорожки (Pool & Lane)",
            description:
                "Пул = сущность/система, дорожка = роль. Важно разделять ответственность.",
            page: "uml_pool_lane",
        },
        {
            title: "События начала и конца",
            description:
                "Start Event (один или несколько типов), End Event (несколько финалов процесса).",
            page: "uml_end",
        }
    ];

    return (
        <>
            <div className="subpage-header">
                <button
                    className="back-btn"
                    onClick={() => setPage("main")}
                >
                    ←
                </button>
                <h1>UML</h1>
            </div>

            <main className="bpmn-main">
                <div className="cards">
                    {cards.map((card) => (
                        <div
                            key={card.page}
                            className="card"
                            onClick={() => setPage(card.page)}
                        >
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
