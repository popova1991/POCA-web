export default function Main({ openSidebar, openPage }) {
  const cards = [
    {
      title: "Грейды системного аналитика",
      description: "Описание уровней и развития системного аналитика",
      action: "sidebar",
    },
    {
      title: "Статьи по темам",
      description: "Полезные материалы и статьи для изучения",
      action: "sidebar",
    },
    {
      title: "Обучающие материалы",
      description: "Курсы, гайды и практические материалы",
      action: "sidebar",
    },
  ];

  const handleClick = (card) => {
    if (card.action === "sidebar") {
      openSidebar(card.title);
    } else {
      openPage(card.action);
    }
  };

  return (
    <main className="main">
      <div className="container">
        {cards.map((card) => (
          <div
            key={card.title}
            className="card"
            onClick={() => handleClick(card)}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
