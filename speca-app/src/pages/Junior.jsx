import { useState } from "react";

export default function Junior({ setPage }) {
  const [checkedRows, setCheckedRows] = useState({});

  const data = {
    title: "Junior",
    info: "Важно понимать: любые квалификационные рамки относительны. Приведенная информация обобщает распространенную практику, но не отменяет внутренних матриц компетенций. Так, одним отделам не требуются навыки работы со снифферами или SQL-запросами, однако взамен необходимо углубленное владение разными типами API. Другим же подразделениям не нужно тестировать бэкенд, но предъявляются повышенные требования к проверке интерфейсов. Рекомендуем воспринимать данный материал как путеводитель, а за актуальными уровнями грейдов обращаться к правилам конкретной компании.\n",
    subtitle: "Уровень — поддержка",
    description: "Выполняет только под контролем, требует проверки",
    table: [
      {
        competence: "Документирование",
        indicator: "User Story",
        description: "Заполняет фиксированный шаблон («Как <роль>, я хочу…»)"
      },
      {
        competence: "Документирование",
        indicator: "Техническое задание",
        description: "Не пишет, только читает готовое"
      },
      {
        competence: "Документирование",
        indicator: "Диаграммы",
        description: "Копирует стиль наставника, рисует только Sequence"
      },
      {
        competence: "Управление требованиями",
        indicator: "Приоритезация",
        description: "Выполняет указания (MoSCoW по команде)"
      },
      {
        competence: "Управление требованиями",
        indicator: "Трассировка",
        description: "Отслеживает связи «задача → баг» в Jira по инструкции"
      },
      {
        competence: "Проектирование",
        indicator: "Модель данных",
        description: "Рисует таблицу из 3–5 полей, типы данных (копирует)"
      },
      {
        competence: "Проектирование",
        indicator: "API",
        description: "Не проектирует, только потребляет по документации"
      },
      {
        competence: "Коммуникации",
        indicator: "Управление ожиданиями",
        description: "Передаёт любой конфликт / вопрос наставнику"
      },
      {
        competence: "Коммуникации",
        indicator: "Фасилитация",
        description: "Ведёт daily команды (до 10 минут)"
      },
      {
        competence: "Технические навыки",
        indicator: "SQL",
        description: "SELECT, WHERE, JOIN двух таблиц"
      },
      {
        competence: "Технические навыки",
        indicator: "Postman",
        description: "Выполняет GET-запрос по готовой документации"
      },
      {
        competence: "Технические навыки",
        indicator: "Чтение кода",
        description: "Не читает — спрашивает у разработчика"
      },
      {
        competence: "Менторство",
        indicator: "Передача знаний",
        description: "Задаёт вопросы, ведёт личные заметки"
      },
      {
        competence: "Оценка и риски",
        indicator: "Оценка SP",
        description: "Не оценивает, только слушает"
      }
    ]
  };
  console.log("JUNIOR RENDER");

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
