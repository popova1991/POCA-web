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
            title: "Цели моделирования",
            description:
                "Различия: для согласования с бизнесом / для передачи разработчикам / для регламента / для анализа узких мест.",
            page: "uml_goals",
            clickable: true,
        },

        {
            title: "Уровни абстракции",
            description:
                "Descriptive (кто что делает), Analytical (логика и данные), Executable (BPMS, автоматизация).",
            page: "uml_elements",
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