import React from "react";
import "./CasePage.css";

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
        <ol className="case-list">
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

export default function CasePage({ data, onBack }) {
  if (!data) return null;

  return (
    <div className="grade-page">
      <div className="detail-page">
        <div className="subpage-header">
          <button className="back-btn" onClick={onBack}>
            ←
          </button>
          <h1 className="page-title">{data.title}</h1>
        </div>

        {data.info && <div className="page-excerpt">{data.info}</div>}
        {data.subtitle && (
          <div className="page-subtitle">{data.subtitle}</div>
        )}

        <div className="page-content">
          {data.description && (
            <p className="text-block">{data.description}</p>
          )}

          {Array.isArray(data.table) &&
            data.table.map((section, si) => (
              <div className="case-section" key={si}>
                <div className="case-section-head">
                  <span className="case-competence">
                    {section.competence}
                  </span>
                  <h2 className="case-section-title">
                    {section.indicator}
                  </h2>
                </div>

                {section.description && (
                  <p className="text-block">{section.description}</p>
                )}

                {Array.isArray(section.details) &&
                  section.details.map((block, bi) => (
                    <Block key={bi} block={block} />
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
