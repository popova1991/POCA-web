import { useLayoutEffect } from "react";

import {
    sdlcPages,
    sdlcPageOrder,
} from "../data/sdlcPages";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ArticleNavigation from "../components/ArticleNavigation";
import ArticleSideNavigation from "../components/ArticleSideNavigation";
import MermaidBlock from "../components/MermaidBlock";
import { getArticleNeighbors } from "../utils/articleNavigation";


export default function SDLCDetail({ setPage, page }) {

    const data = sdlcPages[page];
    const { previousKey, nextKey } = getArticleNeighbors(
        sdlcPageOrder,
        page
    );

    const previousArticle = previousKey
        ? {
            key: previousKey,
            title: sdlcPages[previousKey].title,
        }
        : null;
    const nextArticle = nextKey
        ? {
            key: nextKey,
            title: sdlcPages[nextKey].title,
        }
        : null;

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [page]);

    const handleArticleNavigate = (targetKey) => {
        if (!targetKey) return;

        setPage(targetKey);
    };


    /*
     * ЕСЛИ СТРАНИЦА НЕ НАЙДЕНА
     */

    if (!data) {

        return (

            <div className="grade-page">

                <div className="detail-page">

                    <h2>
                        Страница не найдена
                    </h2>


                    <p>
                        page: {String(page)}
                    </p>


                    <button
                        className="back-btn"
                        onClick={() =>
                            setPage("sdlc")
                        }
                    >

                        ← Вернуться к разделу SDLC

                    </button>

                </div>

            </div>

        );

    }


    /*
     * ОСНОВНАЯ СТРАНИЦА
     */

    return (

        <div className="grade-page">

            <div className="detail-page">


                {/* HEADER */}

                <div className="subpage-header">

                    <button
                        className="back-btn"
                        onClick={() =>
                            setPage("sdlc")
                        }
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


                            /*
                             * TEXT BLOCK
                             */

                            if (block.type === "text") {

                                return (

                                    <div
                                        key={i}
                                        className="text-block markdown"
                                    >

                                        <ReactMarkdown
                                            remarkPlugins={[
                                                remarkGfm
                                            ]}
                                            components={{

                                                a({
                                                      href,
                                                      children,
                                                      ...props
                                                  }) {

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


                            /*
                             * TABLE BLOCK
                             */

                            if (block.type === "table") {

                                return (

                                    <div
                                        key={i}
                                        className="table-wrapper"
                                    >

                                        <table className="page-table">


                                            <thead>

                                            <tr>

                                                {block.headers.map(
                                                    (
                                                        header,
                                                        index
                                                    ) => (

                                                        <th
                                                            key={index}
                                                        >

                                                            {header}

                                                        </th>

                                                    )
                                                )}

                                            </tr>

                                            </thead>


                                            <tbody>

                                            {block.rows.map(
                                                (
                                                    row,
                                                    rowIndex
                                                ) => (

                                                    <tr
                                                        key={rowIndex}
                                                    >

                                                        {row.map(
                                                            (
                                                                cell,
                                                                cellIndex
                                                            ) => (

                                                                <td
                                                                    key={
                                                                        cellIndex
                                                                    }
                                                                >

                                                                    {cell}

                                                                </td>

                                                            )
                                                        )}

                                                    </tr>

                                                )
                                            )}

                                            </tbody>


                                        </table>

                                    </div>

                                );

                            }


                            /*
                             * IMAGE BLOCK
                             */

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
                                            alt={
                                                block.alt ||
                                                "SDLC Image"
                                            }
                                            onError={() => {

                                                console.error(
                                                    "IMAGE LOAD ERROR:",
                                                    block.src
                                                );

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


                            /*
                             * MERMAID BLOCK
                             */

                            if (block.type === "mermaid") {

                                return (

                                    <MermaidBlock
                                        key={i}
                                        code={block.value}
                                        caption={block.caption}
                                    />

                                );

                            }


                            /*
                             * UNKNOWN BLOCK TYPE
                             */

                            return null;

                        })

                    }

                    <ArticleNavigation
                        previous={previousArticle}
                        next={nextArticle}
                        onNavigate={handleArticleNavigate}
                        label="Навигация по статьям SDLC"
                    />


                </div>


            </div>

            <ArticleSideNavigation
                previous={previousArticle}
                next={nextArticle}
                onNavigate={handleArticleNavigate}
                label="Навигация по статьям SDLC"
            />

        </div>

    );

}
