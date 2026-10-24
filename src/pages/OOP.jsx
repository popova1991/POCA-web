import { useState } from "react";

import dogImg from "../img/dog.jpg";
import dog2Img from "../img/dog2.jpg";

export default function OOP({ setPage }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            image: dogImg,
            hoverImage: dog2Img,
            clickable: false,
        },

        {
            title: "Основы объектно-ориентированного подхода в системном анализе",
            description:
                "Зачем аналитику ООП, какие задачи оно решает и как проявляется в требованиях, моделях и архитектуре.",
            page: "oop_basics",
            clickable: true,
        },
        {
            title: "Понятие объекта и класса: как выявлять и описывать сущности системы",
            description:
                "Различия объекта и класса, поиск сущностей в требованиях, атрибуты, операции, ограничения и жизненный цикл.",
            page: "oop_object_class",
            clickable: true,
        },
        {
            title: "Абстракция и инкапсуляция: инструменты системного аналитика",
            description:
                "Уровни детализации модели, границы ответственности и защита бизнес-правил от случайных изменений.",
            page: "oop_abstraction",
            clickable: true,
        },
        {
            title: "Наследование и полиморфизм: расширяемость и повторное использование",
            description:
                "Общие типы, единые контракты и разные реализации: когда наследование помогает, а когда создаёт риски.",
            page: "oop_inheritance",
            clickable: true,
        },
        {
            title: "Ассоциации, агрегации и композиции: связи между объектами в системном анализе",
            description:
                "Типы связей, кратность, жизненный цикл объектов и типичные ошибки при моделировании отношений.",
            page: "oop_relations",
            clickable: true,
        },
        {
            title: "Интерфейсы и абстрактные классы: проектирование гибких архитектур",
            description:
                "Контракты, частичная реализация и критерии выбора между интерфейсом и абстрактным классом.",
            page: "oop_interfaces",
            clickable: true,
        },
        {
            title: "Композиция против наследования: как выбирать правильный подход",
            description:
                "Практические критерии выбора, признаки проблемной иерархии и примеры гибких объектных моделей.",
            page: "oop_composition",
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
                    Объектно-ориентированный подход - основные понятия
                </h1>
            </div>

            <main className="oop-main">
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
                                        "Объектно-ориентированный подход"
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
