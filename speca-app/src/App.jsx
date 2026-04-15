import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import Junior from "./pages/Junior";
import Middle from "./pages/Middle";
import Senior from "./pages/Senior";
import BPMN from "./pages/BPMN";

export default function App() {
  const [page, setPage] = useState("main");

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarItems, setSidebarItems] = useState([]);
  const [sidebarTitle, setSidebarTitle] = useState("");

  const sidebarContent = {
    "Грейды системного аналитика": ["Junior", "Middle", "Senior"],
    "Обучающие материалы": ["BPMN"],
  };

  const openSidebar = (title) => {
    setSidebarTitle(title);
    setSidebarItems(sidebarContent[title] || []);
    setSidebarOpen(true);
  };

  const handleSelect = (item) => {
    setSidebarOpen(false);
    setPage(item.toLowerCase()); // junior / middle / senior
  };

  const renderPage = () => {
    if (page === "main") {
      return <Main openSidebar={openSidebar} openPage={setPage} />;
    }

    if (page === "junior") {
      return <Junior setPage={setPage} />;
    }

    if (page === "middle") {
      return <Middle setPage={setPage} />;
    }

    if (page === "senior") {
      return <Senior setPage={setPage} />;
    }

    if (page === "bpmn") {
      return <BPMN setPage={setPage} />;
    }

    return <div>Страница не найдена</div>;
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
