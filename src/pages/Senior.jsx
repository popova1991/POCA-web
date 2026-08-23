import { useState } from "react";

export default function Senior({ setPage }) {
  const [checkedRows, setCheckedRows] = useState({});

  const data = {
    title: "Senior",
    info: "Важно понимать: любые квалификационные рамки относительны. Приведенная информация обобщает распространенную практику, но не отменяет внутренних матриц компетенций. Так, одним отделам не требуются навыки работы со снифферами или SQL-запросами, однако взамен необходимо углубленное владение разными типами API. Другим же подразделениям не нужно тестировать бэкенд, но предъявляются повышенные требования к проверке интерфейсов. Рекомендуем воспринимать данный материал как путеводитель, а за актуальными уровнями грейдов обращаться к правилам конкретной компании.\n",
    subtitle: "Уровень — система",
    description: "Создаёт стандарты, масштабирует практики",
    table: [
      {
        competence: "Сбор требований",
        indicator: "Глубинные интервью",
        description: "Управляет группой 5+ человек, снимает групповое давление"
      },
      {
        competence: "Сбор требований",
        indicator: "Работа с неопределённостью",
        description: "Создаёт прототип за 1 день для снятия неопределённости"
      },
      {
        competence: "Сбор требований",
        indicator: "Эвристики",
        description: "Использует обратную мозговую атаку (выявление рисков)"
      },

      {
        competence: "Документирование",
        indicator: "User Story",
        description: "Создаёт шаблоны Story для разных типов задач"
      },
      {
        competence: "Документирование",
        indicator: "ТЗ",
        description: "Создаёт Living Documentation (документация как код)"
      },
      {
        competence: "Документирование",
        indicator: "Диаграммы",
        description: "Внедряет C4 model для всей системы, проверяет консистентность"
      },

      {
        competence: "Управление требованиями",
        indicator: "Приоритезация",
        description: "Создаёт модель приоритезации для продукта с весами"
      },
      {
        competence: "Управление требованиями",
        indicator: "Управление изменениями",
        description: "Создаёт Impact Assessment Checklist для команды"
      },

      {
        competence: "Проектирование",
        indicator: "Модель данных",
        description: "Создаёт Data Vault или Anchor Model для больших данных"
      },
      {
        competence: "Проектирование",
        indicator: "API",
        description: "Внедряет GraphQL или gRPC по критериям"
      },
      {
        competence: "Проектирование",
        indicator: "Интеграции",
        description: "Внедряет паттерны: Saga, Outbox, Circuit Breaker"
      },
      {
        competence: "Проектирование",
        indicator: "НФТ",
        description: "Внедряет Chaos Engineering для проверки НФТ"
      },

      {
        competence: "Коммуникации",
        indicator: "Управление ожиданиями",
        description: "Договаривается о замене одной фичи на другую"
      },
      {
        competence: "Коммуникации",
        indicator: "Конфликт требований",
        description: "Находит компромиссный вариант (третье решение)"
      },
      {
        competence: "Коммуникации",
        indicator: "Фасилитация",
        description: "Проводит EventStorming на 20 человек"
      },

      {
        competence: "Технические навыки",
        indicator: "SQL",
        description: "EXPLAIN ANALYZE, оптимизация запросов"
      },
      {
        competence: "Технические навыки",
        indicator: "API-тесты",
        description: "Пишет автотесты на коллекции (Newman)"
      },
      {
        competence: "Технические навыки",
        indicator: "Чтение кода",
        description: "Делает Code Review на логику (не на синтаксис)"
      },
      {
        competence: "Технические навыки",
        indicator: "Логи",
        description: "Строит дашборд по логам (частота ошибок)"
      },

      {
        competence: "Менторство",
        indicator: "Передача знаний",
        description: "Ведёт внутренний курс (4+ часов)"
      },
      {
        competence: "Менторство",
        indicator: "Адаптация",
        description: "Проводит buddy-программу (2 месяца)"
      },

      {
        competence: "Оценка и риски",
        indicator: "Оценка SP",
        description: "Даёт диапазон: оптимистичную и пессимистичную"
      },
      {
        competence: "Оценка и риски",
        indicator: "Риски",
        description: "Предлагает mitigation и fallback план"
      }
    ]
  };
  console.log("SENIOR RENDER");

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
