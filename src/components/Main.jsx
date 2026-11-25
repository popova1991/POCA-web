import homeImg from "../img/home.jpg";
import Snowfall from "./Snowfall";

const GARLAND_LIGHTS = Array.from({ length: 20 }, (_, index) => {
  const scallop = Math.floor(index / 5);
  const step = index % 5;
  const t = (step + 1) / 6;
  const x = scallop * 300 + 50 + step * 50;
  const y = (1 - t) ** 2 * 8 + 2 * (1 - t) * t * 62 + t ** 2 * 8;

  return {
    left: (x / 1200) * 100,
    top: (y / 80) * 100,
    color: ["#FDE68A", "#FCA5A5", "#C4B5FD"][index % 3],
  };
});

function HolidayTreeIcon() {
  return (
    <svg
      className="hero-holiday__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2 7.5 9h2L6 14h3l-3 4.5h5.2V22h1.6v-3.5H18L15 14h3l-3.5-5h2L12 2Z"
        fill="currentColor"
      />
      <circle cx="10.5" cy="11.5" r="0.9" fill="#E11D48" />
      <circle cx="13.5" cy="15" r="0.9" fill="#E11D48" />
      <circle cx="12" cy="8.5" r="0.9" fill="#fff" />
    </svg>
  );
}

function HeroGarland() {
  return (
    <div className="hero-garland" aria-hidden="true">
      <svg
        className="hero-garland__wire"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0 8 Q 150 62 300 8 Q 450 62 600 8 Q 750 62 900 8 Q 1050 62 1200 8"
          fill="none"
          stroke="rgba(255, 255, 255, 0.28)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {GARLAND_LIGHTS.map((light, index) => (
        <span
          key={index}
          className="hero-garland__light"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            color: light.color,
            animationDelay: `${(index % 5) * 0.25}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Main({ openSidebar, openPage, holidayEnabled = false }) {
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
    // {
    //   title: "Hard скилы",
    //   description: "Технические навыки системного аналитика: моделирование, API и архитектура",
    //   icon: "🛠️",
    //   action: "sidebar",
    // },
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

        {holidayEnabled && (
          <>
            <HeroGarland />
            <Snowfall variant="hero" count={10} />
          </>
        )}

        <div className="hero-content">
          <span className="hero-badge">Платформа для саморазвития</span>
          <h1 className="hero-title">Стань системным аналитиком</h1>
          <p className="hero-subtitle">
            Грейды, реальные кейсы и обучающие материалы — всё, чтобы расти в
            профессии.
          </p>

          {holidayEnabled && (
            <div className="hero-holiday" role="note">
              <HolidayTreeIcon />
              С наступающим Новым годом!
            </div>
          )}
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