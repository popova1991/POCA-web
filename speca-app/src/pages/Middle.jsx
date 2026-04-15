import { useState } from "react";

export default function Middle({ setPage }) {
  const [checkedRows, setCheckedRows] = useState({});

  const data = {
    title: "Middle",
    info: "Важно понимать: любые квалификационные рамки относительны. Приведенная информация обобщает распространенную практику, но не отменяет внутренних матриц компетенций. Так, одним отделам не требуются навыки работы со снифферами или SQL-запросами, однако взамен необходимо углубленное владение разными типами API. Другим же подразделениям не нужно тестировать бэкенд, но предъявляются повышенные требования к проверке интерфейсов. Рекомендуем воспринимать данный материал как путеводитель, а за актуальными уровнями грейдов обращаться к правилам конкретной компании.\n",
    subtitle: "Уровень — обустройство",
    description: "Адаптирует подходы под контекст, учит других",
    table: [
      {
        competence: "Сбор требований",
        indicator: "Глубинные интервью",
        description: "Выявляет скрытые потребности через 5 Why, меняет сценарий по ходу"
      },
      {
        competence: "Сбор требований",
        indicator: "Работа с неопределённостью",
        description: "Предлагает 2–3 гипотезы, выбирает с заказчиком за 1 встречу"
      },
      {
        competence: "Сбор требований",
        indicator: "Эвристики",
        description: "Ведёт мозговой штурм с фиксацией на стикерах"
      },

      {
        competence: "Документирование",
        indicator: "User Story",
        description: "Пишет негативные сценарии и исключения (error flows)"
      },
      {
        competence: "Документирование",
        indicator: "ТЗ",
        description: "Пишет ТЗ на 10+ страниц с диаграммами и API-контрактами"
      },
      {
        competence: "Документирование",
        indicator: "Диаграммы",
        description: "Выбирает тип диаграммы под задачу: BPMN vs UML vs C4"
      },

      {
        competence: "Управление требованиями",
        indicator: "Приоритезация",
        description: "Комбинирует WSJF + бизнес-ценность"
      },
      {
        competence: "Управление требованиями",
        indicator: "Трассировка",
        description: "Создаёт матрицу трассировки в Excel на 100+ строк"
      },

      {
        competence: "Проектирование",
        indicator: "Модель данных",
        description: "Проектирует медленно меняющиеся измерения (SCD Type 2)"
      },
      {
        competence: "Проектирование",
        indicator: "Интеграции",
        description: "Проектирует dead-letter, retry, idempotency"
      },
      {
        competence: "Проектирование",
        indicator: "НФТ",
        description: "Определяет SLI/SLO, создаёт нагрузочный профиль"
      },

      {
        competence: "Коммуникации",
        indicator: "Управление ожиданиями",
        description: "Объясняет trade-off (скорость vs качество) на пальцах"
      },
      {
        competence: "Коммуникации",
        indicator: "Конфликт требований",
        description: "Показывает последствия выбора в $ или времени"
      },
      {
        competence: "Коммуникации",
        indicator: "Фасилитация",
        description: "Ведёт конфликтную встречу 3+ сторон"
      },

      {
        competence: "Технические навыки",
        indicator: "SQL",
        description: "Оконные функции (ROW_NUMBER, LAG), CTE"
      },
      {
        competence: "Технические навыки",
        indicator: "API-тесты",
        description: "Тестирует негативные сценарии (401, 500)"
      },
      {
        competence: "Технические навыки",
        indicator: "Чтение кода",
        description: "Находит баг, читая стектрейс"
      },
      {
        competence: "Технические навыки",
        indicator: "Логи",
        description: "Пишет запрос в Kibana (ELK) с условиями"
      },

      {
        competence: "Менторство",
        indicator: "Design review",
        description: "Оценивает полноту покрытия сценариев"
      },

      {
        competence: "Оценка и риски",
        indicator: "Оценка SP",
        description: "Оценивает задачу со скрытой сложностью (5–8 SP)"
      }
    ]
  };
  console.log("MIDDLE RENDER");

  const toggleRow = (index) => {
    setCheckedRows((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="grade-page">

      <div className="grade-header">
        <button className="back-btn" onClick={() => setPage("main")}>
          ←
        </button>
        <h1>{data.title}</h1>
      </div>

      <div className="info-box">
        <div className="info-icon">!</div>
        <p>{data.info}</p>
      </div>

      <div className="grade-table-container">
        <h2>{data.subtitle}</h2>
        <p>{data.description}</p>

        <table className="grade-table">
          <thead>
          <tr>
            <th>✔</th>
            <th>Компетенция</th>
            <th>Индикатор</th>
            <th>Описание</th>
          </tr>
          </thead>

          <tbody>
          {data.table.map((row, index) => (
            <tr
              key={index}
              className={checkedRows[index] ? "row-checked" : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={!!checkedRows[index]}
                  onChange={() => toggleRow(index)}
                />
              </td>
              <td>{row.competence}</td>
              <td>{row.indicator}</td>
              <td>{row.description}</td>
            </tr>
          ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
