import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import Junior from "./pages/Junior";
import Middle from "./pages/Middle";
import Senior from "./pages/Senior";

import BPMN from "./pages/BPMN";
import BPMNDetail from "./pages/BPMNDetail";

import UML from "./pages/UML";
import UMLDetail from "./pages/UMLDetail";

import SystemAnalysis from "./pages/SystemAnalysis";
import SystemAnalysisDetail from "./pages/SystemAnalysisDetail";

import Case1 from "./pages/Case1";
import Case2 from "./pages/Case2";
import Case3 from "./pages/Case3";
import Case4 from "./pages/Case4";
import Case5 from "./pages/Case5";
import Case6 from "./pages/Case6";
import Case7 from "./pages/Case7";
import Case8 from "./pages/Case8";


export default function App() {
  const [page, setPage] = useState("main");

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
      "Кейс: «Новая система обработки заявок»",
      "Кейс: «Автоматизация согласования документов»",
      "Кейс: «Оптимизация клиентского сервиса»",
      "Кейс: «Интеграция информационных систем»",
      "Кейс: «Разработка личного кабинета»",
      "Кейс: «Модернизация внутреннего процесса»",
      "Кейс: «Автоматизация отчетности»",
      "Кейс: «Проектирование новой системы»"
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
        "Кейс: «Новая система обработки заявок»"
    ) {
      setPage("case1");
    }

    if (
        item ===
        "Кейс: «Автоматизация согласования документов»"
    ) {
      setPage("case2");
    }

    if (
        item ===
        "Кейс: «Оптимизация клиентского сервиса»"
    ) {
      setPage("case3");
    }

    if (
        item ===
        "Кейс: «Интеграция информационных систем»"
    ) {
      setPage("case4");
    }

    if (
        item ===
        "Кейс: «Разработка личного кабинета»"
    ) {
      setPage("case5");
    }

    if (
        item ===
        "Кейс: «Модернизация внутреннего процесса»"
    ) {
      setPage("case6");
    }

    if (
        item ===
        "Кейс: «Автоматизация отчетности»"
    ) {
      setPage("case7");
    }

    if (
        item ===
        "Кейс: «Проектирование новой системы»"
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
        <Header />

        <Sidebar
            open={sidebarOpen}
            items={sidebarItems}
            title={sidebarTitle}
            onClose={() => setSidebarOpen(false)}
            onSelect={handleSelect}
        />

        {renderPage()}
      </>
  );
}