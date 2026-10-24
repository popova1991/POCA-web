import { useState } from "react";

import dogImg from "../img/dog.jpg";
import dog2Img from "../img/dog2.jpg";

export default function CICD({ setPage }) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const cards = [
        {
            image: dogImg,
            hoverImage: dog2Img,
            clickable: false,
        },

        {
            title: "📝 Что такое CI/CD: Базовые понятия для системного аналитика",
            description:
                "Continuous Integration, Continuous Delivery и Continuous Deployment: чем отличаются и зачем аналитику понимать процесс доставки.",
            page: "cicd_basics",
            clickable: true,
        },
        {
            title: "Базовые этапы CI/CD глазами системного аналитика",
            description:
                "Сборка, тесты, публикация артефакта, развёртывание и мониторинг: роль аналитика на каждом этапе пайплайна.",
            page: "cicd_stages",
            clickable: true,
        },
        {
            title: "Релизный цикл: что это, виды релизных циклов и их особенности",
            description:
                "Классический, итеративный, непрерывный и гибридный циклы: как выбрать подходящую модель выпуска.",
            page: "cicd_release_cycle",
            clickable: true,
        },
        {
            title: "CI/CD и управление конфигурацией",
            description:
                "Версионирование кода, настроек, артефактов и сред, управление секретами и зависимостями.",
            page: "cicd_config",
            clickable: true,
        },
        {
            title: "Роли и зоны ответственности в CI/CD-процессах",
            description:
                "Продукт, аналитик, разработчик, QA, DevOps, безопасность и поддержка: кто за что отвечает.",
            page: "cicd_roles",
            clickable: true,
        },
        {
            title: "Как писать требования для проектов с CI/CD",
            description:
                "Проверяемость, декомпозиция, критерии приёмки, Definition of Ready и Definition of Done.",
            page: "cicd_requirements",
            clickable: true,
        },
        {
            title: "⚙️ CI/CD и автоматизация тестирования",
            description:
                "Пирамида тестов, уровни автоматизации, тестовые данные и роль аналитика в проверяемых требованиях.",
            page: "cicd_test_automation",
            clickable: true,
        },
        {
            title: "Участие системного аналитика в автоматизированном тестировании в CI/CD",
            description:
                "Задачи аналитика от планирования сценариев до приёмки результатов и анализа падений автотестов.",
            page: "cicd_automated_testing_sa",
            clickable: true,
        },
        {
            title: "✅ A/B-тесты и эксперименты в CI/CD: задачи SA",
            description:
                "Гипотезы, метрики, сегментация и правила остановки эксперимента: что описать до запуска.",
            page: "cicd_ab_tests",
            clickable: true,
        },
        {
            title: "Управление фича-флагами (Feature Toggles) в CI/CD: роль системного аналитика",
            description:
                "Типы флагов, жизненный цикл, требования к описанию и типовые ошибки управления функциональностью.",
            page: "cicd_feature_toggles",
            clickable: true,
        },
        {
            title: "Анализ рисков в CI/CD-процессах для системных аналитиков",
            description:
                "Технические, процессные и продуктовые риски, матрица оценки и меры снижения вероятности сбоев.",
            page: "cicd_risk_analysis",
            clickable: true,
        },
        {
            title: "🔹 CI/CD и управление инцидентами",
            description:
                "Жизненный цикл инцидента, уровни критичности и связь процесса доставки с быстрым восстановлением сервиса.",
            page: "cicd_incident_management",
            clickable: true,
        },
        {
            title: "Участие системного аналитика в управлении инцидентами в CI/CD",
            description:
                "Действия аналитика до, во время и после инцидента, разбор причин и обновление требований.",
            page: "cicd_incidents_sa",
            clickable: true,
        },
        {
            title: "Участие системного аналитика в мониторинге и алертинге в CI/CD",
            description:
                "Бизнес- и технические метрики, требования к алертам и наблюдаемость релиза.",
            page: "cicd_monitoring_alerting",
            clickable: true,
        },
        {
            title: "CI/CD и инфраструктурные изменения: зона ответственности SA",
            description:
                "Infrastructure as Code, среды, масштабирование и границы ответственности аналитика и DevOps.",
            page: "cicd_infrastructure_sa",
            clickable: true,
        },
        {
            title: "Роль системного аналитика в управлении версиями API и миграциями данных в CI/CD",
            description:
                "Обратная совместимость API, стратегии миграций и требования к безопасному изменению данных.",
            page: "cicd_api_migrations",
            clickable: true,
        },
        {
            title: "Влияние CI/CD на архитектурные решения",
            description:
                "Модульность, контракты, базы данных и наблюдаемость как следствие требований непрерывной доставки.",
            page: "cicd_architecture",
            clickable: true,
        },
        {
            title: "📘 Глоссарий CI/CD терминов для аналитиков (с объяснением и примерами)",
            description:
                "Пайплайн, артефакт, среда, деплой, откат, smoke-тест, фича-флаг и другие понятия простым языком.",
            page: "cicd_glossary",
            clickable: true,
        },
        {
            title: "📚 Лучшие практики CI/CD из книг и конференций (с кратким конспектом)",
            description:
                "Маленькие релизы, быстрая обратная связь, наблюдаемость и культура постмортемов без поиска виноватых.",
            page: "cicd_best_practices",
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

                <h1>
                    Суть концепции CI/CD. Релизные циклы
                </h1>
            </div>

            <main className="system-analysis-main">
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
                                        hoveredCard === index &&
                                        card.hoverImage
                                            ? card.hoverImage
                                            : card.image
                                    }
                                    alt={
                                        card.title ||
                                        "Суть концепции CI/CD"
                                    }
                                    className="card-image"
                                />
                            )}

                            {card.title && (
                                <h2>
                                    {card.title}
                                </h2>
                            )}

                            {card.description && (
                                <p>
                                    {card.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}
