import { bpmnPages } from "../data/bpmnPages";

export default function BPMNDetail({ setPage, page }) {
  // нормализация ключа
  const normalizePageKey = (page) => page.replace("bpmn_", "");

  const key = normalizePageKey(page);
  const data = bpmnPages[key];

  console.log("PAGE RAW:", page);
  console.log("PAGE KEY:", key);
  console.log("DATA:", data);

  if (!data) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Страница не найдена</h2>

        <p>
          Текущий page: <b>{page}</b>
        </p>

        <p>
          Нормализованный ключ: <b>{key}</b>
        </p>

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
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>

      {/* HEADER */}
      <div style={{ marginBottom: 20 }}>

        {/* BACK BUTTON (ВОТ ОНА ТВОЯ КНОПКА НАЗАД) */}
        <button
          onClick={() => setPage("bpmn")}
          style={{
            marginBottom: 12,
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px solid #ddd",
            background: "#fff",
            cursor: "pointer",
          }}
        >
          ← Назад
        </button>

        {/* BREADCRUMBS */}
        <div style={{ color: "#666", fontSize: 14 }}>
          <span style={{ cursor: "pointer" }} onClick={() => setPage("main")}>
            Главная
          </span>
          {" > "}
          <span style={{ cursor: "pointer" }} onClick={() => setPage("bpmn")}>
            BPMN
          </span>
          {" > "}
          <b>{data.title}</b>
        </div>
      </div>

      {/* TITLE */}
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>
        {data.title}
      </h1>

      <p style={{ color: "#666", marginBottom: 20 }}>
        {data.subtitle}
      </p>

      {/* EXCERPT */}
      {data.excerpt && (
        <div
          style={{
            background: "#f5f5f5",
            padding: 12,
            borderRadius: 8,
            marginBottom: 24,
            color: "#333",
          }}
        >
          {data.excerpt}
        </div>
      )}

      {/* CONTENT */}
      <div style={{ lineHeight: 1.7 }}>
        {Array.isArray(data.content) &&
          data.content.map((block, i) => {

            if (block.type === "text") {
              return (
                <div key={i} style={{ marginBottom: 20, whiteSpace: "pre-line" }}>
                  {block.value}
                </div>
              );
            }

            if (block.type === "table") {
              return (
                <div key={i} style={{ overflowX: "auto", marginTop: 20 }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: 14,
                    }}
                  >
                    <thead>
                    <tr>
                      {block.headers.map((h) => (
                        <th
                          key={h}
                          style={{
                            border: "1px solid #ddd",
                            padding: 10,
                            background: "#f3f3f3",
                            textAlign: "left",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                    </thead>

                    <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            style={{
                              border: "1px solid #ddd",
                              padding: 10,
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}
      </div>
    </div>
  );
}
