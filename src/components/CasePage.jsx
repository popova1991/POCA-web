import React, { useState } from "react";

function Block({ block }) {
  switch (block.type) {
    case "title":
      return <h3 className="case-block-title">{block.text}</h3>;

    case "subtitle":
      return <h4 className="case-block-subtitle">{block.text}</h4>;

    case "paragraph":
      return <p className="text-block">{block.text}</p>;

    case "ordered":
      return (
        <ol className="case-list case-list-ordered">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );

    case "list":
      return (
        <ul className="case-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "note":
      return <div className="case-note">{block.text}</div>;

    case "flow":
      return <div className="case-flow">{block.text}</div>;

    default:
      return null;
  }
}

function renderInline(str) {
  return String(str)
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );
}

function RichText({ text }) {
  const blocks = String(text).split(/\n\n+/);

  return (
    <div className="rich-text">
      {blocks.map((block, i) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("[[") && trimmed.endsWith("]]")) {
          return (
            <div className="answer-callout" key={i}>
              {renderInline(trimmed.slice(2, -2))}
            </div>
          );
        }

        if (trimmed.startsWith("{{") && trimmed.endsWith("}}")) {
          return (
            <div className="answer-flowbox" key={i}>
              {renderInline(trimmed.slice(2, -2))}
            </div>
          );
        }

        return (
          <p className="text-block" key={i}>
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}

function Chevron() {
  return (
    <svg
      className="chevron"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function CasePage({ data, onBack }) {
  if (!data) return null;

  const [expanded, setExpanded] = useState({});
  const [checked, setChecked] = useState({});
  const [answerOpen, setAnswerOpen] = useState({});

  const toggleExpand = (i) =>
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  const toggleCheck = (i) =>
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }));
  const toggleAnswer = (key) =>
    setAnswerOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const rows = (Array.isArray(data.table) ? data.table : []).map(
    (section) => ({
      num: section.competence,
      label: section.indicator,
      desc: section.description,
      content: section.details,
    })
  );

  return (
    <div className="grade-page">
      <div className="grade-header">
        <button className="back-btn" onClick={onBack}>
          ←
        </button>
        <h1>{data.title}</h1>
      </div>

      {data.info && (
        <div className="info-box">
          <div className="info-icon">!</div>
          <div className="info-content">
            <p>{data.info}</p>
          </div>
        </div>
      )}

      <div className="grade-table-container">
        <h2>{data.subtitle}</h2>
        <p>{data.description}</p>

        <table className="grade-table grade-table-case">
          <thead>
            <tr>
              <th>✔</th>
              <th>№</th>
              <th>Компетенция</th>
              <th>Описание</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <React.Fragment key={i}>
                <tr
                  className={
                    (checked[i] ? "row-checked " : "") +
                    (expanded[i] ? "row-expanded" : "")
                  }
                >
                  <td>
                    <input
                      type="checkbox"
                      className="row-check"
                      checked={!!checked[i]}
                      onChange={() => toggleCheck(i)}
                    />
                  </td>
                  <td>{row.num}</td>
                  <td>{row.label}</td>
                  <td>{row.desc}</td>
                  <td>
                    <button
                      type="button"
                      className={"case-toggle" + (expanded[i] ? " open" : "")}
                      onClick={() => toggleExpand(i)}
                      aria-expanded={!!expanded[i]}
                      aria-label={expanded[i] ? "Свернуть" : "Развернуть"}
                    >
                      <Chevron />
                    </button>
                  </td>
                </tr>
                    {expanded[i] && (
                      <tr className="details-row">
                        <td colSpan={5}>
                          <div className="case-details">
                            {Array.isArray(row.content) &&
                              row.content.map((block, bi) =>
                                block.type === "rich" ? (
                                  <RichText key={bi} text={block.text} />
                                ) : (
                                  <Block key={bi} block={block} />
                                )
                              )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="answers-container">
            {data.correctAnswer && (
              <div className="answer-block">
                <button
                  type="button"
                  className="answer-header correct"
                  onClick={() => toggleAnswer("correct")}
                  aria-expanded={!!answerOpen.correct}
                >
                  <span className="answer-label">Правильный вариант</span>
                  <span
                    className={"case-toggle" + (answerOpen.correct ? " open" : "")}
                  >
                    <Chevron />
                  </span>
                </button>
                {answerOpen.correct && (
                  <div className="answer-content">
                    <RichText text={data.correctAnswer} />
                  </div>
                )}
              </div>
            )}

            {data.wrongAnswer && (
              <div className="answer-block">
                <button
                  type="button"
                  className="answer-header wrong"
                  onClick={() => toggleAnswer("wrong")}
                  aria-expanded={!!answerOpen.wrong}
                >
                  <span className="answer-label">Неправильный вариант</span>
                  <span
                    className={"case-toggle" + (answerOpen.wrong ? " open" : "")}
                  >
                    <Chevron />
                  </span>
                </button>
                {answerOpen.wrong && (
                  <div className="answer-content">
                    <RichText text={data.wrongAnswer} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
  );
}
