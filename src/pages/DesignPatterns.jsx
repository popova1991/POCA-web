import { useState } from "react";

import dogImg from "../img/dog.jpg";
import dog2Img from "../img/dog2.jpg";

export default function DesignPatterns({ setPage }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            image: dogImg,
            hoverImage: dog2Img,
            clickable: false,
        },

        {
            title: "Введение в паттерны проектирования",
            description:
                "Что такое паттерн, чем он отличается от алгоритма и библиотеки и зачем его понимать системному аналитику.",
            page: "patterns_intro",
            clickable: true,
        },
        {
            title: "Классификация паттернов проектирования",
            description:
                "Порождающие, структурные и поведенческие паттерны, а также архитектурные и корпоративные решения.",
            page: "patterns_classification",
            clickable: true,
        },
        {
            title: "Порождающие паттерны — основы",
            description:
                "Фабричный метод, Абстрактная фабрика, Строитель, Прототип и Одиночка: задачи и компромиссы.",
            page: "patterns_creational",
            clickable: true,
        },
        {
            title: "Структурные паттерны — построение систем",
            description:
                "Адаптер, Фасад, Компоновщик, Декоратор, Мост, Заместитель и Приспособленец в анализе систем.",
            page: "patterns_structural",
            clickable: true,
        },
        {
            title: "Поведенческие паттерны — взаимодействие компонентов",
            description:
                "Стратегия, Состояние, Наблюдатель, Команда, Цепочка обязанностей и другие способы организации поведения.",
            page: "patterns_behavioral",
            clickable: true,
        },
        {
            title: "Применение паттернов проектирования в системном анализе",
            description:
                "Практические сценарии для требований, доменной модели, интеграций и нефункциональных требований.",
            page: "patterns_analysis",
            clickable: true,
        },
        {
            title: "Типовые ошибки при использовании паттернов проектирования",
            description:
                "ОверИнжиниринг, охота на паттерны, неверный уровень абстракции и другие распространённые ошибки.",
            page: "patterns_mistakes",
            clickable: true,
        },
        {
            title: "Как документировать паттерны проектирования в аналитических артефактах",
            description:
                "Структура описания решения, ADR, требования и диаграммы без лишней детализации.",
            page: "patterns_documentation",
            clickable: true,
        },
        {
            title: "Критический взгляд на паттерны проектирования",
            description:
                "Ограничения паттернов, карго-культ, устаревание рекомендаций и критерии выбора простых решений.",
            page: "patterns_critique",
            clickable: true,
        },
        {
            title: "Ресурсы для изучения паттернов проектирования",
            description:
                "Книги, справочники, архитектурные каталоги и практический план изучения на четыре недели.",
            page: "patterns_resources",
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
                    Паттерны проектирования
                </h1>
            </div>

            <main className="design-patterns-main">
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
                                        "Паттерны проектирования"
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
