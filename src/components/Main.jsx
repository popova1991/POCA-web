import homeImg from "../img/home.jpg";

export default function Main({ openSidebar, openPage }) {
  const cards = [
    {
      title: "Грейды системного аналитика",
      description: "Описание уровней и развития системного аналитика",
      icon: "📈",
      action: "sidebar",
    },
    {
      title: "Кейсы для разбора",
      description: "Полезные кейсы для самостоятельного разбора",
      icon: "🧩",
      action: "sidebar",
    },
    {
      title: "Обучающие материалы",
      description: "Курсы, гайды и практические материалы",
      icon: "📚",
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
      <section className="hero">
        <img className="hero-image" src={homeImg} alt="" />

        <div className="hero-content">
          <span className="hero-badge">Платформа для саморазвития</span>
          <h1 className="hero-title">Стань системным аналитиком</h1>
          <p className="hero-subtitle">
            Грейды, реальные кейсы и обучающие материалы — всё, чтобы расти в
            профессии.
          </p>
          </div>
      </section>

      <div className="container">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="card"
            style={{ animationDelay: `${index * 120}ms` }}
            onClick={() => handleClick(card)}
          >
            <span className="card-icon">{card.icon}</span>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}