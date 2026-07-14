import { bpmnPages } from "../data/bpmnPages";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BPMNDetail({ setPage, page }) {
  const normalizePageKey = (page) => {
    if (typeof page !== "string") return null;
    return page.replace("bpmn_", "");
  };

  const key = normalizePageKey(page);
  const data = key ? bpmnPages[key] : null;

  console.log("PAGE RAW:", page);
  console.log("KEY:", key);
  console.log("DATA:", data);

  if (!data) {
    return (
      <div className="grade-page">
        <div className="bpmn-detail">
          <h2>Страница не найдена</h2>

          <p>page: {String(page)}</p>
          <p>key: {String(key)}</p>

          <button
            className="back-btn"
            onClick={() => setPage("bpmn")}
          >
            ← Вернуться в BPMN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grade-page">
      <div className="bpmn-detail">

        {/* HEADER */}
        <div className="subpage-header">
          <button
            className="back-btn"
            onClick={() => setPage("bpmn")}
          >
            ←
          </button>

          <h1 className="page-title">
            {data.title}
          </h1>
        </div>


        {/* SUBTITLE */}
        {data.subtitle && (
          <div className="page-subtitle">
            {data.subtitle}
          </div>
        )}


        {/* EXCERPT */}
        {data.excerpt && (
          <div className="page-excerpt">
            {data.excerpt}
          </div>
        )}


        {/* CONTENT */}
        <div className="page-content">

          {Array.isArray(data.content) &&
            data.content.map((block, i) => {

              // TEXT BLOCK
              if (block.type === "text") {
                return (
                  <div
                    key={i}
                    className="text-block markdown"
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a({ href, children, ...props }) {
                          return (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              {...props}
                            >
                              {children}
                            </a>
                          );
                        }
                      }}
                    >
                      {block.value}
                    </ReactMarkdown>
                  </div>
                );
              }

              // TABLE BLOCK
              if (block.type === "table") {
                return (
                  <div
                    key={i}
                    className="table-wrapper"
                  >
                    <table className="bpmn-table">

                      <thead>
                      <tr>
                        {block.headers.map((h, index) => (
                          <th key={index}>
                            {h}
                          </th>
                        ))}
                      </tr>
                      </thead>


                      <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, c) => (
                            <td key={c}>
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


              // IMAGE BLOCK
              if (block.type === "image") {
                return (
                  <div
                    key={i}
                    className="image-block"
                    style={{
                      textAlign: "center",
                      margin: "20px 0"
                    }}
                  >

                    {block.caption && (
                      <p className="image-caption">
                        {block.caption}
                      </p>
                    )}

                    <img
                      src={block.src}
                      alt={block.alt || "BPMN Image"}
                      onError={(e) => {
                        console.error("IMAGE LOAD ERROR:", block.src);
                      }}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "8px"
                      }}
                    />

                  </div>
                );
              }


              // UNKNOWN BLOCK TYPE
              return null;

            })}

        </div>

      </div>
    </div>
  );
}
