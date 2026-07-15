import { useState } from "react";

export default function Case2({ setPage }) {
    const [checkedRows, setCheckedRows] = useState({});

    const data = {
        title: "Кейс: «Заказ завис в статусе»",

        info:
            "Интернет-магазин сообщает:\n\n" +
            "«Иногда заказ зависает в статусе “Оплата ожидается”, хотя деньги уже списаны».\n\n" +
            "В процессе участвуют платёжный шлюз, интернет-магазин, CRM, служба доставки и очередь сообщений.",

        subtitle: "Задание",

        description:
            "Проанализируйте взаимодействие систем и предложите решение проблемы рассинхронизации статуса заказа.",

        table: [
            {
                competence: "1",
                indicator: "Взаимодействие систем",
                description:
                    "Построить sequence diagram, отражающую полный сценарий оплаты: создание заказа, обращение к платёжному шлюзу, получение результата оплаты, публикацию сообщения и обновление статуса заказа."
            },
            {
                competence: "2",
                indicator: "Анализ точек сбоя",
                description:
                    "Определить возможные точки сбоя на каждом этапе взаимодействия систем и описать последствия каждого сбоя."
            },
            {
                competence: "3",
                indicator: "Модель состояний заказа",
                description:
                    "Описать состояния заказа и допустимые переходы между ними, включая состояния ожидания, успешной оплаты, ошибки и восстановления."
            },
            {
                competence: "4",
                indicator: "Повторная доставка сообщения",
                description:
                    "Определить поведение системы при повторной доставке одного и того же сообщения и предложить механизм идемпотентной обработки."
            },
            {
                competence: "5",
                indicator: "Восстановление после сбоя",
                description:
                    "Предложить механизм восстановления рассинхронизации между платёжным шлюзом и интернет-магазином: retry, повторная обработка, DLQ, reconciliation или другой подход."
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