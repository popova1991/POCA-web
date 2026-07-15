import { useState } from "react";

export default function Case3({ setPage }) {
    const [checkedRows, setCheckedRows] = useState({});

    const data = {
        title: "Кейс: «Интеграция с внешним сервисом»",

        info:
            "Компания хочет интегрироваться с внешним сервисом проверки клиентов.\n\n" +
            "При регистрации нового клиента система должна отправить во внешний сервис " +
            "ФИО и дату рождения, получить результат проверки и сохранить его.\n\n" +
            "При временной ошибке внешний сервис должен быть вызван повторно. " +
            "При повторной обработке запроса необходимо исключить повторное создание клиента.\n\n" +
            "Усложнение: внешний сервис иногда отвечает HTTP 200 со статусом " +
            "«processing». В этом случае окончательный результат проверки приходит " +
            "асинхронно через callback.",

        subtitle: "Задание",

        description:
            "Необходимо спроектировать взаимодействие с внешним сервисом " +
            "и определить правила обработки синхронных и асинхронных сценариев:",

        table: [
            {
                competence: "1",
                indicator: "API-контракт",
                description:
                    "Определить структуру запроса к внешнему сервису: необходимые параметры, формат данных, обязательность полей и правила передачи ФИО и даты рождения."
            },
            {
                competence: "2",
                indicator: "Обработка синхронного ответа",
                description:
                    "Описать обработку успешного ответа, при котором внешний сервис сразу возвращает окончательный результат проверки клиента."
            },
            {
                competence: "3",
                indicator: "Асинхронная обработка",
                description:
                    "Определить поведение системы, если внешний сервис возвращает HTTP 200 со статусом «processing». Необходимо описать, как сохранить промежуточное состояние и обработать окончательный результат, который будет получен через callback."
            },
            {
                competence: "4",
                indicator: "Callback",
                description:
                    "Определить формат и правила обработки callback-запроса: как идентифицировать клиента и исходную операцию, как проверить достоверность callback и как обработать повторную доставку одного и того же callback."
            },
            {
                competence: "5",
                indicator: "Ошибки интеграции",
                description:
                    "Определить сценарии ошибок: временная недоступность сервиса, timeout, ошибка валидации данных, некорректный ответ и ошибка при обработке callback."
            },
            {
                competence: "6",
                indicator: "Retry-механизм",
                description:
                    "Предложить правила повторной отправки запроса при временной ошибке: количество попыток, интервал между попытками и условия прекращения повторных запросов."
            },
            {
                competence: "7",
                indicator: "Идемпотентность",
                description:
                    "Определить механизм, который не позволит повторно создать одного и того же клиента или повторно применить один и тот же результат при повторной отправке запроса или callback."
            },
            {
                competence: "8",
                indicator: "Состояния операции",
                description:
                    "Описать состояния процесса проверки клиента: создан, проверка ожидается, проверка выполняется, processing, проверка пройдена, проверка не пройдена, ошибка и требуется повторная попытка."
            },
            {
                competence: "9",
                indicator: "Sequence Diagram",
                description:
                    "Построить sequence diagram для синхронного сценария и сценария с callback: регистрация клиента, отправка запроса, получение статуса «processing», получение callback и сохранение окончательного результата."
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