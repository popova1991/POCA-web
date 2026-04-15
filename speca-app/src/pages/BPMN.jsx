export default function BPMN({ setPage }) {
  return (
    <>
      <div className="subpage-header">
        <button
          className="back-btn"
          onClick={() => setPage("main")}
        >
          ←
        </button>
        <h1>BPMN</h1>
      </div>

      <main className="bpmn-main">
        <div className="cards">
          <div className="card">
            <h2>Цели моделирования</h2>
            <p>Описание</p>
          </div>
        </div>
      </main>
    </>
  );
}
