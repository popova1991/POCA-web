import { bpmnPages } from "../data/bpmnPages";

export default function BPMNDetail({ setPage, page }) {
  // 🔥 нормализация ключа
  const normalizePageKey = (page) => {
    return page.replace("bpmn_", "");
  };

  const key = normalizePageKey(page);
  const data = bpmnPages[key];

  // 🔥 ДЕБАГ (оставляем, пока не стабилизируется)
  console.log("PAGE RAW:", page);
  console.log("PAGE KEY:", key);
  console.log("DATA:", data);
  console.log("AVAILABLE KEYS:", Object.keys(bpmnPages));

  if (!data) {
    return (
      <div>
        <h2>Страница не найдена</h2>

        <p>
          Текущий page: <b>{page}</b>
        </p>

        <p>Нормализованный ключ: <b>{key}</b></p>

        <p>Доступные страницы:</p>
        <ul>
          {Object.keys(bpmnPages).map((k) => (
            <li key={k}>
              <button onClick={() => setPage(`bpmn_${k}`)}>
                {k}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      {/* HEADER */}
      <div className="breadcrumbs">
        <span style={{ cursor: "pointer" }} onClick={() => setPage("main")}>
          Главная
        </span>

        <span> &gt; </span>

        <span style={{ cursor: "pointer" }} onClick={() => setPage("bpmn")}>
          BPMN
        </span>

        <span> &gt; </span>

        <span>{data.title}</span>
      </div>

      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>

      {/* CONTENT */}
      <div>
        {Array.isArray(data.content) &&
          data.content.map((block, i) => {
            if (block.type === "text") {
              return (
                <div
                  key={i}
                  style={{
                    whiteSpace: "pre-line",
                    marginBottom: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {block.value}
                </div>
              );
            }

            if (block.type === "table") {
              return (
                <table
                  key={i}
                  border="1"
                  cellPadding="8"
                  style={{
                    marginTop: 20,
                    borderCollapse: "collapse",
                  }}
                >
                  <thead>
                  <tr>
                    {block.headers.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                  </thead>

                  <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td key={c}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                  </tbody>
                </table>
              );
            }

            return null;
          })}
      </div>
    </>
  );
}
