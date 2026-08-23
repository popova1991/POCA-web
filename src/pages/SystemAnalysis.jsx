import { useState } from "react";

import dogImg from "../img/dog.jpg";
import dog2Img from "../img/dog2.jpg";

export default function SystemAnalysis({ setPage }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            image: dogImg,
            hoverImage: dog2Img,
            clickable: false,
        },

        {
            title: "История и эволюция системного анализа",
            description:
                "Роль системного аналитика, границы ответственности, связь бизнеса, пользователей, процессов и IT-систем.",
            page: "sa_intro",
            clickable: true,
        },
        {
            title: "Классические методы системного анализа",
            description:
                "Классические методы системного анализа — это основа профессии аналитика.",
            page: "sa_metod",
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
                    Методология системного анализа. Системное мышление.
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
                                        "Методология системного анализа"
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