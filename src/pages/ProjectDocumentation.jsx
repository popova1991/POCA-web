import { useState } from "react";

import dogImg from "../img/dog.jpg";
import dog2Img from "../img/dog2.jpg";

export default function ProjectDocumentation({ setPage }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            image: dogImg,
            hoverImage: dog2Img,
            clickable: false,
        },

        {
            title: "Роль документации на разных этапах проекта",
            page: "pd_roles_stages",
            clickable: true,
        },
        {
            title: "Архитектурная документация",
            page: "pd_architecture",
            clickable: true,
        },
        {
            title: "⚙️ Нефункциональные требования (NFR): важность и системное мышление",
            page: "pd_nfr",
            clickable: true,
        },
        {
            title: "Примеры шаблонов требований",
            page: "pd_templates",
            clickable: true,
        },
        {
            title: "Технические задания (ТЗ) и их структура",
            page: "pd_tech_spec",
            clickable: true,
        },
        {
            title: "📘 Пользовательские требования: User Stories, Use Cases и Jobs-to-be-Done",
            page: "pd_user_requirements",
            clickable: true,
        },
        {
            title: "Зачем проектная документация нужна системному аналитику?",
            page: "pd_sa_value",
            clickable: true,
        },
        {
            title: "📄 Кто создает проектную документацию: роли BA, SA, PO, PM, QA, Dev",
            page: "pd_roles",
            clickable: true,
        },
        {
            title: "Виды требований: бизнес-требования, функциональные, нефункциональные",
            page: "pd_requirement_types",
            clickable: true,
        },
        {
            title: "Форматы и стандарты описания требований (SRS, User Stories, Use Cases)",
            page: "pd_formats_standards",
            clickable: true,
        },
        {
            title: "🧾 Что такое проектная документация: цели, роли и жизненный цикл",
            page: "pd_intro",
            clickable: true,
        },
        {
            title: "Диаграммы UML и другие визуальные средства описания системы",
            page: "pd_uml",
            clickable: true,
        },
        {
            title: "Как эффективно собирать и оформлять требования",
            page: "pd_collect_requirements",
            clickable: true,
        },
        {
            title: "📘 Бизнес-требования (BRD): как выявлять и документировать цели бизнеса",
            page: "pd_brd",
            clickable: true,
        },
        {
            title: "📘 Модели данных и ER-диаграммы: как описывать бизнес-данные",
            page: "pd_data_models",
            clickable: true,
        },
        {
            title: "📘 Форматы обмена данными в проектной документации: XML, gRPC и GraphQL",
            page: "pd_data_exchange",
            clickable: true,
        },
        {
            title: "🧩 Функциональные требования (FRD): как писать понятно для команды",
            page: "pd_frd",
            clickable: true,
        },
        {
            title: "🧩 Пользовательские требования (User Stories, Use Cases, Jobs-to-be-Done)",
            page: "pd_user_requirements_2",
            clickable: true,
        },
        {
            title: "🔌 Спецификация API (OpenAPI/Swagger, REST, GraphQL): оформление и ревью",
            page: "pd_api_spec",
            clickable: true,
        },
        {
            title: "Основные категории и типы документации в ИТ-проектах",
            page: "pd_documentation_categories",
            clickable: true,
        },
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

                <h1>
                    Виды проектной документации и ее назначение
                </h1>
            </div>

            <main className="system-analysis-main">
                <div className="cards">
                    {cards.map((card, index) => (
                        <div
                            key={card.title || index}
                            className={`card ${
                                card.clickable
                                    ? "card-clickable"
                                    : "card-info"
                            }`}
                            onClick={
                                card.clickable
                                    ? () => setPage(card.page)
                                    : undefined
                            }
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {card.image && (
                                <img
                                    src={
                                        hoveredCard === index &&
                                        card.hoverImage
                                            ? card.hoverImage
                                            : card.image
                                    }
                                    alt={
                                        card.title ||
                                        "Виды проектной документации"
                                    }
                                    className="card-image"
                                />
                            )}

                            {card.title && (
                                <h2>
                                    {card.title}
                                </h2>
                            )}

                            {card.description && (
                                <p>
                                    {card.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
