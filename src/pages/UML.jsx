import { useState } from "react";

import dog1Img from "../img/dog1.jpg";
import dog2Img from "../img/dog2.jpg";

export default function UML({ setPage }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            image: dog1Img,
            hoverImage: dog2Img,
            clickable: false,
        },

        {
            title: "База UML",
            description:
                "Что такое UML, зачем она нужна и из чего состоит: сущности, отношения и виды диаграмм.",
            page: "uml_base",
            clickable: true,
        },

        {
            title: "Use Case Diagram",
            description:
                "Актёры, прецеденты и связи. Как описать функциональные требования к системе.",
            page: "uml_use_case",
            clickable: true,
        },

        {
            title: "Activity Diagram",
            description:
                "Потоки работ, решения и параллельные процессы. Функциональная блок-схема процесса.",
            page: "uml_activity",
            clickable: true,
        },

        {
            title: "Sequence Diagram",
            description:
                "Взаимодействие объектов во времени. Кто кому и когда отправляет сообщения.",
            page: "uml_sequence",
            clickable: true,
        },

        {
            title: "Class Diagram",
            description:
                "Классы, атрибуты, методы и связи. Основа объектно-ориентированного проектирования.",
            page: "uml_class_diagram",
            clickable: true,
        },

        {
            title: "State Machine Diagram",
            description:
                "Состояния объекта и переходы между ними. Жизненный цикл сущности.",
            page: "uml_state_machine",
            clickable: true,
        },

        {
            title: "Component Diagram",
            description:
                "Компоненты системы и их интерфейсы. Архитектура на уровне модулей.",
            page: "uml_component",
            clickable: true,
        },

        {
            title: "Deployment Diagram",
            description:
                "Узлы, серверы и физическое размещение. Как система живёт в инфраструктуре.",
            page: "uml_deployment",
            clickable: true,
        },

        {
            title: "Как выбирать UML-диаграмму",
            description:
                "Чек-лист: какую диаграмму выбрать под задачу анализа или проектирования.",
            page: "uml_how_to_choose",
            clickable: true,
        },

        {
            title: "PlantUML",
            description:
                "Текстовое описание диаграмм кодом. Быстро, версионируемо и удобно в CI.",
            page: "uml_plantuml",
            clickable: true,
        },

        {
            title: "Практика UML",
            description:
                "Типичные ошибки и шаблоны. Как не превратить модель в нечитаемый монстр.",
            page: "uml_practice",
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

                <h1>UML</h1>
            </div>

            <main className="uml-main">
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
                                        hoveredCard === index && card.hoverImage
                                            ? card.hoverImage
                                            : card.image
                                    }
                                    alt={card.title || "UML"}
                                    className="card-image"
                                />
                            )}

                            {card.title && (
                                <h2>{card.title}</h2>
                            )}

                            {card.description && (
                                <p>{card.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}