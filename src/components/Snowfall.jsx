import { useMemo } from "react";

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function createFlake(id, variant) {
  if (variant === "hero") {
    return {
      id,
      style: {
        "--snow-x": `${randomBetween(4, 96).toFixed(2)}%`,
        "--snow-size": `${randomBetween(4, 9).toFixed(2)}px`,
        "--snow-duration": `${randomBetween(8, 16).toFixed(2)}s`,
        "--snow-delay": `${-randomBetween(0, 16).toFixed(2)}s`,
        "--snow-drift": `${randomBetween(-28, 28).toFixed(2)}px`,
        "--snow-opacity": randomBetween(0.35, 0.7).toFixed(2),
      },
    };
  }

  return {
    id,
    side: Math.random() < 0.5 ? "left" : "right",
    style: {
      "--snow-x": `${randomBetween(0, 100).toFixed(2)}%`,
      "--snow-size": `${randomBetween(5, 12).toFixed(2)}px`,
      "--snow-duration": `${randomBetween(9, 20).toFixed(2)}s`,
      "--snow-delay": `${-randomBetween(0, 20).toFixed(2)}s`,
      "--snow-drift": `${randomBetween(-40, 40).toFixed(2)}px`,
      "--snow-opacity": randomBetween(0.35, 0.8).toFixed(2),
    },
  };
}

export default function Snowfall({
  variant = "edges",
  count = 28,
  className = "",
}) {
  const flakes = useMemo(
    () => Array.from({ length: count }, (_, index) => createFlake(index, variant)),
    [count, variant]
  );

  if (variant === "hero") {
    return (
      <div
        className={`snowfall snowfall--hero ${className}`.trim()}
        aria-hidden="true"
      >
        {flakes.map((flake) => (
          <span key={flake.id} className="snowflake" style={flake.style} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`snowfall snowfall--edges ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="snowfall__lane snowfall__lane--left">
        {flakes
          .filter((flake) => flake.side === "left")
          .map((flake) => (
            <span key={flake.id} className="snowflake" style={flake.style} />
          ))}
      </div>

      <div className="snowfall__lane snowfall__lane--right">
        {flakes
          .filter((flake) => flake.side === "right")
          .map((flake) => (
            <span key={flake.id} className="snowflake" style={flake.style} />
          ))}
      </div>
    </div>
  );
}
