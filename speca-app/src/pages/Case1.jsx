import { useState } from "react";

export default function Case1({ setPage }) {
    const [checkedRows, setCheckedRows] = useState({});

    const data = {
        title: "Кейс: «Автоматизация согласования отпусков»",

        info:
            "В компании отпуск согласуется через электронную почту. " +
            "Сотрудник отправляет письмо руководителю, руководитель пересылает его HR, " +
            "а HR вручную заносит данные в систему.\n\n" +
            "Компания хочет: «Сделать автоматическое согласование отпусков».",

        subtitle: "Задание",

        description:
            "Необходимо выполнить следующие этапы анализа:",

        table: [
            {
                competence: "1",
                indicator: "AS-IS процесс",
                description:
                    "Описать текущий процесс согласования отпуска: от создания заявки сотрудником до внесения данных HR в систему."
            },
            {
                competence: "2",
                indicator: "Участники процесса",
                description:
                    "Выявить всех участников процесса и определить роль каждого участника."
            },
            {
                competence: "3",
                indicator: "Вопросы заказчику",
                description:
                    "Сформировать список вопросов для уточнения требований и понимания текущего процесса."
            },
            {
                competence: "4",
                indicator: "TO-BE процесс",
                description:
                    "Предложить целевой процесс автоматического согласования отпусков."
            },
            {
                competence: "5",
                indicator: "Бизнес-правила",
                description:
                    "Выделить правила, по которым принимаются решения о согласовании или отклонении отпуска."
            },
            {
                competence: "6",
                indicator: "Исключения",
                description:
                    "Определить нестандартные ситуации и исключения: отказ руководителя, отсутствие руководителя, пересечение отпусков и другие сценарии."
            },
            {
                competence: "7",
                indicator: "MVP",
                description:
                    "Предложить минимальный набор функций, необходимый для запуска первой версии решения."
            },
            {
                competence: "8",
                indicator: "Функциональные требования",
                description:
                    "Сформировать функциональные требования к системе автоматического согласования отпусков."
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