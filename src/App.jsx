import { useState, lazy, Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FeedbackModal from "./components/FeedbackModal";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const Junior = lazy(() => import("./pages/Junior"));
const Middle = lazy(() => import("./pages/Middle"));
const Senior = lazy(() => import("./pages/Senior"));

const BPMN = lazy(() => import("./pages/BPMN"));
const BPMNDetail = lazy(() => import("./pages/BPMNDetail"));

const UML = lazy(() => import("./pages/UML"));
const UMLDetail = lazy(() => import("./pages/UMLDetail"));

const SystemAnalysis = lazy(() => import("./pages/SystemAnalysis"));
const SystemAnalysisDetail = lazy(() => import("./pages/SystemAnalysisDetail"));

const Case1 = lazy(() => import("./pages/Case1"));
const Case2 = lazy(() => import("./pages/Case2"));
const Case3 = lazy(() => import("./pages/Case3"));
const Case4 = lazy(() => import("./pages/Case4"));
const Case5 = lazy(() => import("./pages/Case5"));
const Case6 = lazy(() => import("./pages/Case6"));
const Case7 = lazy(() => import("./pages/Case7"));
const Case8 = lazy(() => import("./pages/Case8"));


export default function App() {
  const [page, setPage] = useState("main");
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarItems, setSidebarItems] = useState([]);
  const [sidebarTitle, setSidebarTitle] = useState("");


  const sidebarContent = {
    "Грейды системного аналитика": [
      "Junior",
      "Middle",
      "Senior"
    ],

    "Обучающие материалы": [
      "BPMN",
      "UML",
      "Методология системного анализа. Системное мышление."
    ],

    "Кейсы для разбора": [
      "Кейс: «Автоматизация согласования отпусков»",
      "Кейс: «Заказ завис в статусе»",
      "Кейс: «Интеграция с внешним сервисом»",
      "Кейс: «У клиента три идентификатора»",
      "Кейс: «Монолит нужно разделить»",
      "Кейс: «Система работает, но пользователи жалуются»",
      "Кейс: «Новая система обработки заявок»",
      "Кейс-встреча: «Изменение тарифа клиента»"
    ]
  };


  const openSidebar = (title) => {
    setSidebarTitle(title);
    setSidebarItems(sidebarContent[title] || []);
    setSidebarOpen(true);
  };


  const handleSelect = (item) => {
    setSidebarOpen(false);


    // Грейды

    if (item === "Junior") {
      setPage("junior");
    }

    if (item === "Middle") {
      setPage("middle");
    }

    if (item === "Senior") {
      setPage("senior");
    }


    // Обучающие материалы

    if (item === "BPMN") {
      setPage("bpmn");
    }

    if (item === "UML") {
      setPage("uml");
    }

    if (
        item ===
        "Методология системного анализа. Системное мышление."
    ) {
      setPage("system_analysis");
    }


    // Кейсы

    if (
        item ===
        "Кейс: «Автоматизация согласования отпусков»"
    ) {
      setPage("case1");
    }
    if (
      item ===
      "Кейс: «Заказ завис в статусе»"
    ) {
      setPage("case2");
    }
    if (
      item ===
      "Кейс: «Интеграция с внешним сервисом»"
    ) {
      setPage("case3");
    }
    if (
      item ===
      "Кейс: «У клиента три идентификатора»"
    ) {
      setPage("case4");
    }
    if (
      item ===
      "Кейс: «Монолит нужно разделить»"
    ) {
      setPage("case5");
    }

    if (
      item ===
      "Кейс: «Система работает, но пользователи жалуются»"
    ) {
      setPage("case6");
    }

    if (
      item ===
      "Кейс: «Новая система обработки заявок»"
    ) {
      setPage("case7");
    }
    if (
        item ===
        "Кейс-встреча: «Изменение тарифа клиента»"
    ) {
      setPage("case8");
    }
  };


  const renderPage = () => {


    // Главная

    if (page === "main") {
      return (
          <Main
              openSidebar={openSidebar}
              openPage={setPage}
          />
      );
    }


    // Грейды

    if (page === "junior") {
      return <Junior setPage={setPage} />;
    }

    if (page === "middle") {
      return <Middle setPage={setPage} />;
    }

    if (page === "senior") {
      return <Senior setPage={setPage} />;
    }


    // Кейсы

    if (page === "case1") {
      return <Case1 setPage={setPage} />;
    }

    if (page === "case2") {
      return <Case2 setPage={setPage} />;
    }

    if (page === "case3") {
      return <Case3 setPage={setPage} />;
    }

    if (page === "case4") {
      return <Case4 setPage={setPage} />;
    }

    if (page === "case5") {
      return <Case5 setPage={setPage} />;
    }

    if (page === "case6") {
      return <Case6 setPage={setPage} />;
    }

    if (page === "case7") {
      return <Case7 setPage={setPage} />;
    }

    if (page === "case8") {
      return <Case8 setPage={setPage} />;
    }


    // BPMN

    if (page === "bpmn") {
      return <BPMN setPage={setPage} />;
    }

    if (page.startsWith("bpmn_")) {
      return (
          <BPMNDetail
              setPage={setPage}
              page={page}
          />
      );
    }


    // UML

    if (page === "uml") {
      return <UML setPage={setPage} />;
    }

    if (page.startsWith("uml_")) {
      return (
          <UMLDetail
              setPage={setPage}
              page={page}
          />
      );
    }


    // Методология системного анализа.
    // Системное мышление.

    if (page === "system_analysis") {
      return <SystemAnalysis setPage={setPage} />;
    }
    if (page.startsWith("sa_")) {
      return (
          <SystemAnalysisDetail
              setPage={setPage}
              page={page}
          />
      );
    }


    return (
        <div>
          Страница не найдена
        </div>
    );
  };


  return (
      <>
        <Header onHome={() => setPage("main")} />

        <Sidebar
            open={sidebarOpen}
            items={sidebarItems}
            title={sidebarTitle}
            onClose={() => setSidebarOpen(false)}
            onSelect={handleSelect}
        />

        <Suspense fallback={<div>Загрузка...</div>}>
          {renderPage()}
        </Suspense>

        <Footer onFeedback={() => setFeedbackOpen(true)} />
        <FeedbackModal
            open={feedbackOpen}
            onClose={() => setFeedbackOpen(false)}
        />
      </>
  );
}
