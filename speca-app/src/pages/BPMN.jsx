import { useState } from "react";

import dog1Img from "../img/dog1.jpg";
import dog2Img from "../img/dog2.jpg";

export default function BPMN({ setPage }) {
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
      page: "bpmn_goals",
      clickable: true,
    },

    {
      title: "Уровни абстракции",
      description:
          "Descriptive (кто что делает), Analytical (логика и данные), Executable (BPMS, автоматизация).",
      page: "bpmn_elements",
      clickable: true,
    },

    {
      title: "Золотое правило BPMN",
      description:
          "Один процесс — одна диаграмма. Если не влезает на экран — нужна декомпозиция.",
      page: "bpmn_gold",
      clickable: true,
    },

    {
      title: "Потребители диаграммы",
      description:
          "Бизнес-пользователь, разработчик, тестировщик — у каждого свой уровень детализации.",
      page: "bpmn_customer",
      clickable: true,
    },

    {
      title: "Пулы и дорожки (Pool & Lane)",
      description:
          "Пул = сущность/система, дорожка = роль. Важно разделять ответственность.",
      page: "bpmn_pool_lane",
      clickable: true,
    },

    {
      title: "События начала и конца",
      description:
          "Start Event (один или несколько типов), End Event (несколько финалов процесса).",
      page: "bpmn_end",
      clickable: true,
    },

    {
      title: "Задачи (Tasks)",
      description:
          "User Task, Service Task, Script Task, Business Rule Task — разные уровни автоматизации.",
      page: "bpmn_tasks",
      clickable: true,
    },

    {
      title: "Потоки управления (Sequence Flow)",
      description:
          "Связи внутри процесса. Нельзя соединять пулы напрямую — только через Message Flow.",
      page: "bpmn_sequence",
      clickable: true,
    },

    {
      title: "Простая логика ветвления",
      description:
          "Exclusive Gateway (XOR) — выбор одного пути по условию.",
      page: "bpmn_gateway",
      clickable: true,
    },

    {
      title: "Параллелизм",
      description:
          "Parallel Gateway — разветвление и синхронизация потоков.",
      page: "bpmn_parallel",
      clickable: true,
    },

    {
      title: "Промежуточные события",
      description:
          "Timer, Message, Error, Signal — события внутри процесса.",
      page: "bpmn_events",
      clickable: true,
    },

    {
      title: "Сообщения (Message Flow)",
      description:
          "Коммуникация между пулами. Всегда пунктирная линия.",
      page: "bpmn_message",
      clickable: true,
    },

    {
      title: "Сложные гейты",
      description:
          "Inclusive Gateway и Event-Based Gateway — сложные сценарии ветвления.",
      page: "bpmn_inclusive",
      clickable: true,
    },

    {
      title: "Вложенные процессы",
      description:
          "Sub-process (collapsed / expanded), логическая декомпозиция процесса.",
      page: "bpmn_subprocess",
      clickable: true,
    },

    {
      title: "Компенсация",
      description:
          "Откат действий через Compensation Event и Compensation Task.",
      page: "bpmn_compensation",
      clickable: true,
    },

    {
      title: "Артефакты",
      description:
          "Data Objects, Group, Annotation — дополнительные элементы диаграммы.",
      page: "bpmn_artefacts",
      clickable: true,
    },

    {
      title: "Анализ требований",
      description:
          "Как выделять роли, события, шаги и исключения из текста.",
      page: "bpmn_analysis",
      clickable: true,
    },

    {
      title: "Границы процесса",
      description:
          "Четкий старт (триггер) и четкий конец процесса.",
      page: "bpmn_trigger",
      clickable: true,
    },

    {
      title: "Пулы и роли",
      description:
          "Разделение систем, ролей и внешних участников.",
      page: "bpmn_pools",
      clickable: true,
    },

    {
      title: "Обработка исключений",
      description:
          "Happy Path vs Unhappy Path. Как не усложнить диаграмму.",
      page: "bpmn_exceptions",
      clickable: true,
    },

    {
      title: "Декомпозиция",
      description:
          "Правильный уровень детализации процесса.",
      page: "bpmn_decomposition",
      clickable: true,
    },

    {
      title: "Проверка модели",
      description:
          "Чек-лист: гейты, потоки, пулы, корректность логики.",
      page: "bpmn_validation",
      clickable: true,
    },

    {
      title: "EventStorming + BPMN",
      description:
          "Сначала события → потом формализация в BPMN.",
      page: "bpmn_event_storming",
      clickable: true,
    },

    {
      title: "Согласование модели",
      description:
          "Как презентовать BPMN бизнесу и собирать фидбек.",
      page: "bpmn_agreement",
      clickable: true,
    },

    {
      title: "Версионирование",
      description:
          "Хранение BPMN, naming, связь с Jira/Confluence.",
      page: "bpmn_versioning",
      clickable: true,
    },

    {
      title: "BPMN для разработки",
      description:
          "Исполнимая BPMN (Camunda / Zeebe), Service Task vs User Task.",
      page: "bpmn_dev",
      clickable: true,
    },

    {
      title: "BPMN для тестирования",
      description:
          "Каждый путь диаграммы = тест-кейс.",
      page: "bpmn_qa",
      clickable: true,
    },

    {
      title: "Метрики процесса",
      description:
          "Узкие места, гейты, ручные точки, длина процесса.",
      page: "bpmn_metrics",
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

          <h1>BPMN</h1>
        </div>

        <main className="bpmn-main">
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
                          alt={card.title || "BPMN"}
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