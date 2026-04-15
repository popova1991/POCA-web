export default function BPMN({ setPage }) {
  const cards = [
    {
      title: "Цели моделирования",
      description:
        "Различия: для согласования с бизнесом / для передачи разработчикам / для регламента / для анализа узких мест.",
      page: "bpmn_goals",
    },
    {
      title: "Уровни абстракции",
      description:
        "Descriptive (кто что делает), Analytical (логика и данные), Executable (BPMS, автоматизация).",
      page: "bpmn_elements",
    },
    {
      title: "Золотое правило BPMN",
      description:
        "Один процесс — одна диаграмма. Если не влезает на экран — нужна декомпозиция.",
      page: "bpmn_gold",
    },
    {
      title: "Потребители диаграммы",
      description:
        "Бизнес-пользователь, разработчик, тестировщик — у каждого свой уровень детализации.",
      page: "bpmn_customer",
    },
    {
      title: "Пулы и дорожки (Pool & Lane)",
      description:
        "Пул = сущность/система, дорожка = роль. Важно разделять ответственность.",
      page: "bpmn_pool_lane",
    },
    {
      title: "События начала и конца",
      description:
        "Start Event (один или несколько типов), End Event (несколько финалов процесса).",
      page: "bpmn_end",
    },
    {
      title: "Задачи (Tasks)",
      description:
        "User Task, Service Task, Script Task, Business Rule Task — разные уровни автоматизации.",
      page: "bpmn_tasks",
    },
    {
      title: "Потоки управления (Sequence Flow)",
      description:
        "Связи внутри процесса. Нельзя соединять пулы напрямую — только через Message Flow.",
      page: "bpmn_sequence",
    },
    {
      title: "Простая логика ветвления",
      description:
        "Exclusive Gateway (XOR) — выбор одного пути по условию.",
      page: "bpmn_gateway",
    },
    {
      title: "Параллелизм",
      description:
        "Parallel Gateway — разветвление и синхронизация потоков.",
      page: "bpmn_parallel",
    },
    {
      title: "Промежуточные события",
      description:
        "Timer, Message, Error, Signal — события внутри процесса.",
      page: "bpmn_events",
    },
    {
      title: "Сообщения (Message Flow)",
      description:
        "Коммуникация между пулами. Всегда пунктирная линия.",
      page: "bpmn_message",
    },
    {
      title: "Сложные гейты",
      description:
        "Inclusive Gateway и Event-Based Gateway — сложные сценарии ветвления.",
      page: "bpmn_inclusive",
    },
    {
      title: "Вложенные процессы",
      description:
        "Sub-process (collapsed / expanded), логическая декомпозиция процесса.",
      page: "bpmn_subprocess",
    },
    {
      title: "Компенсация",
      description:
        "Откат действий через Compensation Event и Compensation Task.",
      page: "bpmn_compensation",
    },
    {
      title: "Артефакты",
      description:
        "Data Objects, Group, Annotation — дополнительные элементы диаграммы.",
      page: "bpmn_artefacts",
    },
    {
      title: "Анализ требований",
      description:
        "Как выделять роли, события, шаги и исключения из текста.",
      page: "bpmn_analysis",
    },
    {
      title: "Границы процесса",
      description:
        "Четкий старт (триггер) и четкий конец процесса.",
      page: "bpmn_trigger",
    },
    {
      title: "Пулы и роли",
      description:
        "Разделение систем, ролей и внешних участников.",
      page: "bpmn_pools",
    },
    {
      title: "Обработка исключений",
      description:
        "Happy Path vs Unhappy Path. Как не усложнить диаграмму.",
      page: "bpmn_exceptions",
    },
    {
      title: "Декомпозиция",
      description:
        "Правильный уровень детализации процесса.",
      page: "bpmn_decomposition",
    },
    {
      title: "Проверка модели",
      description:
        "Чек-лист: гейты, потоки, пулы, корректность логики.",
      page: "bpmn_validation",
    },
    {
      title: "EventStorming + BPMN",
      description:
        "Сначала события → потом формализация в BPMN.",
      page: "bpmn_event_storming",
    },
    {
      title: "Согласование модели",
      description:
        "Как презентовать BPMN бизнесу и собирать фидбек.",
      page: "bpmn_agreement",
    },
    {
      title: "Версионирование",
      description:
        "Хранение BPMN, naming, связь с Jira/Confluence.",
      page: "bpmn_versioning",
    },
    {
      title: "BPMN для разработки",
      description:
        "Исполнимая BPMN (Camunda / Zeebe), Service Task vs User Task.",
      page: "bpmn_dev",
    },
    {
      title: "BPMN для тестирования",
      description:
        "Каждый путь диаграммы = тест-кейс.",
      page: "bpmn_qa",
    },
    {
      title: "Метрики процесса",
      description:
        "Узкие места, гейты, ручные точки, длина процесса.",
      page: "bpmn_metrics",
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
          {cards.map((card) => (
            <div
              key={card.page}
              className="card"
              onClick={() => setPage(card.page)}
            >
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
