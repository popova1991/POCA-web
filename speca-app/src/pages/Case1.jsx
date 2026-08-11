import { Fragment, useState } from "react";

export default function Case1({ setPage }) {
    const [checkedRows, setCheckedRows] = useState({});
    const [openRows, setOpenRows] = useState({});

    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [showWrongAnswer, setShowWrongAnswer] = useState(false);

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
                    "Описать текущий процесс согласования отпуска: от создания заявки сотрудником до внесения данных HR в систему.",

                details:
                    "Необходимо описать текущий процесс пошагово: сотрудник создаёт заявку, отправляет её руководителю, руководитель принимает решение, после чего информация передаётся в HR."
            },

            {
                competence: "2",
                indicator: "Участники процесса",
                description:
                    "Выявить всех участников процесса и определить роль каждого участника.",

                details:
                    "Необходимо определить роли сотрудника, руководителя, HR и других возможных участников процесса."
            },

            {
                competence: "3",
                indicator: "Вопросы заказчику",
                description:
                    "Сформировать список вопросов для уточнения требований и понимания текущего процесса.",

                details:
                    "Необходимо выяснить правила согласования, сроки, исключения, порядок замены руководителя и действия при отказе."
            },

            {
                competence: "4",
                indicator: "TO-BE процесс",
                description:
                    "Предложить целевой процесс автоматического согласования отпусков.",

                details:
                    "Необходимо описать, как будет выглядеть процесс после автоматизации: создание заявки, автоматическое направление руководителю, принятие решения и передача результата в HR-систему."
            },

            {
                competence: "5",
                indicator: "Бизнес-правила",
                description:
                    "Выделить правила, по которым принимаются решения о согласовании или отклонении отпуска.",

                details:
                    "Необходимо определить правила согласования: доступный остаток отпуска, пересечение периодов, необходимость согласования руководителем и другие ограничения."
            },

            {
                competence: "6",
                indicator: "Исключения",
                description:
                    "Определить нестандартные ситуации и исключения: отказ руководителя, отсутствие руководителя, пересечение отпусков и другие сценарии.",

                details:
                    "Необходимо описать, что происходит при отсутствии руководителя, отказе в отпуске, ошибке системы, пересечении отпусков или изменении уже согласованной заявки."
            },

            {
                competence: "7",
                indicator: "MVP",
                description:
                    "Предложить минимальный набор функций, необходимый для запуска первой версии решения.",

                details:
                    "MVP может включать создание заявки сотрудником, согласование руководителем, изменение статуса заявки и передачу результата HR."
            },

            {
                competence: "8",
                indicator: "Функциональные требования",
                description:
                    "Сформировать функциональные требования к системе автоматического согласования отпусков.",

                details:
                    "Необходимо описать функции системы: создание заявки, просмотр статуса, согласование, отклонение, уведомления и обработка исключительных ситуаций."
            }
        ],

        correctAnswer:
            "Правильный вариант:\n\n" +

            "1. Сначала описать текущий AS-IS процесс согласования отпуска.\n\n" +

            "2. Определить всех участников процесса и их роли.\n\n" +

            "3. Сформировать список вопросов заказчику.\n\n" +

            "4. Предложить целевой TO-BE процесс автоматизации.\n\n" +

            "5. Выделить бизнес-правила и исключения.\n\n" +

            "6. Определить минимальный MVP.\n\n" +

            "7. Сформировать функциональные требования к системе.",

        wrongAnswer:
            "Неправильный вариант:\n\n" +

            "Сразу начать проектировать экран для подачи заявления на отпуск, " +

            "не разобравшись в текущем процессе, участниках, бизнес-правилах, " +

            "исключениях и требованиях заказчика.\n\n" +

            "Также неправильным подходом будет сразу описать только набор функций " +

            "без понимания того, как процесс работает сейчас и какие проблемы необходимо решить."
    };

    const toggleRow = (index) => {
        setCheckedRows((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const toggleRowOpen = (index) => {
        setOpenRows((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const toggleCorrectAnswer = () => {
        setShowCorrectAnswer((prev) => !prev);
    };

    const toggleWrongAnswer = () => {
        setShowWrongAnswer((prev) => !prev);
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

                <h1>
                    {data.title}
                </h1>

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

                        <th>
                            ✔
                        </th>

                        <th>
                            Компетенция
                        </th>

                        <th>
                            Индикатор
                        </th>

                        <th>
                            Описание
                        </th>

                        <th></th>

                    </tr>

                    </thead>


                    <tbody>

                    {data.table.map((row, index) => (

                        <Fragment key={index}>

                            <tr
                                className={
                                    checkedRows[index]
                                        ? "row-checked"
                                        : ""
                                }
                            >

                                <td>

                                    <input
                                        type="checkbox"
                                        checked={
                                            !!checkedRows[index]
                                        }
                                        onChange={() =>
                                            toggleRow(index)
                                        }
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


                                <td>

                                    <button
                                        className="details-btn"
                                        onClick={() =>
                                            toggleRowOpen(index)
                                        }
                                    >

                                        {
                                            openRows[index]
                                                ? "▲"
                                                : "▼"
                                        }

                                    </button>

                                </td>

                            </tr>


                            {openRows[index] && (

                                <tr className="details-row">

                                    <td></td>

                                    <td colSpan="4">

                                        <div className="details-content">

                                            <strong>
                                                Подробнее:
                                            </strong>

                                            <p>
                                                {row.details}
                                            </p>

                                        </div>

                                    </td>

                                </tr>

                            )}

                        </Fragment>

                    ))}

                    </tbody>

                </table>


                <div className="answers-container">


                    <div className="answer-block">

                        <button
                            className="answer-header correct"
                            onClick={toggleCorrectAnswer}
                        >

                            <span>
                                Правильный вариант
                            </span>

                            <span>
                                {
                                    showCorrectAnswer
                                        ? "▲"
                                        : "▼"
                                }
                            </span>

                        </button>


                        {showCorrectAnswer && (

                            <div className="answer-content">

                                {data.correctAnswer
                                    .split("\n")
                                    .map((line, index) => (

                                        <p key={index}>
                                            {line}
                                        </p>

                                    ))}

                            </div>

                        )}

                    </div>


                    <div className="answer-block">

                        <button
                            className="answer-header wrong"
                            onClick={toggleWrongAnswer}
                        >

                            <span>
                                Неправильный вариант
                            </span>

                            <span>
                                {
                                    showWrongAnswer
                                        ? "▲"
                                        : "▼"
                                }
                            </span>

                        </button>


                        {showWrongAnswer && (

                            <div className="answer-content">

                                {data.wrongAnswer
                                    .split("\n")
                                    .map((line, index) => (

                                        <p key={index}>
                                            {line}
                                        </p>

                                    ))}

                            </div>

                        )}

                    </div>


                </div>

            </div>

        </div>
    );
}