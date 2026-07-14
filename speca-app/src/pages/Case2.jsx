import { useState } from "react";

export default function Case2({ setPage }) {
    const [checkedRows, setCheckedRows] = useState({});

    const data = {
        title: "Case2",

        info:
            "Разбор практического кейса для системного аналитика. Здесь необходимо изучить задачу, определить требования, предложить решение и описать основные шаги реализации.",

        subtitle: "Анализ требований",

        description:
            "В рамках кейса необходимо пройти путь от постановки задачи до подготовки решения.",

        table: [
            {
                competence: "Анализ задачи",
                indicator: "Понимание проблемы",
                description:
                    "Определить бизнес-проблему и сформулировать цель изменения."
            },
            {
                competence: "Сбор требований",
                indicator: "Вопросы заказчику",
                description:
                    "Подготовить список уточняющих вопросов для выявления требований."
            },
            {
                competence: "Документирование",
                indicator: "User Story",
                description:
                    "Описать пользовательский сценарий в формате User Story."
            },
            {
                competence: "Проектирование",
                indicator: "Диаграммы",
                description:
                    "Подготовить BPMN или Sequence Diagram для описания процесса."
            },
            {
                competence: "Технические навыки",
                indicator: "API",
                description:
                    "Определить взаимодействие систем через API."
            }
        ]
    };

    const toggleRow = (index) => {
        setCheckedRows((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="grade-page">
            <div className="grade-header">
                <button
                    className="back-btn"
                    onClick={() => setPage("main")}
                >
                    ←
                </button>
                <h1>{data.title}</h1>
            </div>
            <div className="info-box">
                <div className="info-icon">
                    !
                </div>
                <p>
                    {data.info}
                </p>
            </div>
            <div className="grade-table-container">
                <h2>
                    {data.subtitle}
                </h2>
                <p>
                    {data.description}
                </p>
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
                            className={
                                checkedRows[index]
                                    ? "row-checked"
                                    : ""
                            }
                        >
                            <td>
                                <input
                                    type="checkbox"
                                    checked={!!checkedRows[index]}
                                    onChange={() => toggleRow(index)}
                                />
                            </td>
                            <td>
                                {row.competence}
                            </td>
                            <td>
                                {row.indicator}
                            </td>
                            <td>
                                {row.description}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}