import { useEffect, useId, useState } from "react";

let mermaidPromise;

function loadMermaid() {
    if (!mermaidPromise) {
        mermaidPromise = import("mermaid").then(({ default: mermaid }) => {
            mermaid.initialize({
                startOnLoad: false,
                securityLevel: "strict",
                theme: "base",
                fontFamily: '"Inter", system-ui, sans-serif',
                themeVariables: {
                    primaryColor: "#EDE9FE",
                    primaryBorderColor: "#7C3AED",
                    primaryTextColor: "#2B2B2B",
                    lineColor: "#6B7280",
                    fontSize: "15px"
                },
                sequence: { useMaxWidth: true }
            });

            return mermaid;
        });
    }

    return mermaidPromise;
}

export default function MermaidBlock({ code, caption }) {
    const reactId = useId();
    const reactIdsafe = reactId.replace(/:/g, "");

    const [svg, setSvg] = useState("");
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        let active = true;

        setSvg("");
        setFailed(false);

        loadMermaid()
            .then((mermaid) => mermaid.render(`mermaid-${reactIdsafe}`, code))
            .then(({ svg }) => {
                if (active) setSvg(svg);
            })
            .catch((err) => {
                console.error("Mermaid render error:", err);

                if (active) setFailed(true);
            });

        return () => {
            active = false;
        };
    }, [code, reactIdsafe]);

    if (failed) {
        return (
            <div className="mermaid-block">
                {caption && <p className="image-caption">{caption}</p>}

                <pre className="code-block">{code}</pre>
            </div>
        );
    }

    return (
        <div className="mermaid-block">
            {caption && <p className="image-caption">{caption}</p>}

            {svg ? (
                <div
                    className="mermaid-svg"
                    dangerouslySetInnerHTML={{ __html: svg }}
                />
            ) : (
                <div className="mermaid-skeleton" aria-busy="true" />
            )}
        </div>
    );
}
