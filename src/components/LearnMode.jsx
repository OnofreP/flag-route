import { useRef, useState } from "react";
import { routes } from "../data/routes";
import PickAnimation from "./PickAnimation";
import "./LearnMode.css";

const IMPORTANT_YARDS = new Set([
    -5,
    0,
    2,
    3,
    5,
    7,
    10,
    12,
    15,
]);

function LearnMode({ onExit }) {
    const [currentIndex, setCurrentIndex] =
        useState(0);

    const [animationKey, setAnimationKey] =
        useState(0);
    
    const [pickReaction, setPickReaction] =
        useState("up");

    const [trainingMode, setTrainingMode] =
        useState("demo");

    const [drawnPoints, setDrawnPoints] =
        useState([]);

    const [isDrawing, setIsDrawing] =
        useState(false);

    const [checked, setChecked] =
        useState(false);

    const fieldRef = useRef(null);

    const route = routes[currentIndex];

    const changeRoute = (index) => {
        setCurrentIndex(index);
        setTrainingMode("demo");
        setDrawnPoints([]);
        setChecked(false);
        setAnimationKey(
            (previous) => previous + 1
        );
    };

    const previousRoute = () => {
        if (currentIndex === 0) {
            changeRoute(routes.length - 1);
            return;
        }

        changeRoute(currentIndex - 1);
    };

    const nextRoute = () => {
        if (
            currentIndex ===
            routes.length - 1
        ) {
            changeRoute(0);
            return;
        }

        changeRoute(currentIndex + 1);
    };

    const startDemo = () => {
        setTrainingMode("demo");
        setDrawnPoints([]);
        setChecked(false);

        /*
        * En Y — Pick cambiamos la
        * decisión del linebacker.
        */
        if (route.code === "Y") {
            setPickReaction(
                (previous) =>
                    previous === "up"
                        ? "down"
                        : "up"
            );
        }

        setAnimationKey(
            (previous) => previous + 1
        );
    };

    const startPractice = () => {
        if (route.pending) {
            return;
        }

        setTrainingMode("practice");
        setDrawnPoints([]);
        setChecked(false);
    };

    const getPointerPosition = (event) => {
        const field =
            fieldRef.current;

        if (!field) {
            return null;
        }

        const rect =
            field.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) /
                rect.width) *
            500;

        const y =
            ((event.clientY - rect.top) /
                rect.height) *
            500;

        return {
            x: Math.max(
                0,
                Math.min(500, x)
            ),

            y: Math.max(
                0,
                Math.min(500, y)
            ),
        };
    };

    const handlePointerDown = (event) => {
        if (
            trainingMode !== "practice" ||
            route.pending
        ) {
            return;
        }

        event.currentTarget
            .setPointerCapture(
                event.pointerId
            );

        const point =
            getPointerPosition(event);

        if (!point) {
            return;
        }

        setChecked(false);
        setDrawnPoints([point]);
        setIsDrawing(true);
    };

    const handlePointerMove = (event) => {
        if (
            !isDrawing ||
            trainingMode !== "practice"
        ) {
            return;
        }

        const point =
            getPointerPosition(event);

        if (!point) {
            return;
        }

        setDrawnPoints(
            (previousPoints) => {
                const lastPoint =
                    previousPoints[
                        previousPoints.length - 1
                    ];

                if (!lastPoint) {
                    return [point];
                }

                const distance =
                    Math.hypot(
                        point.x - lastPoint.x,
                        point.y - lastPoint.y
                    );

                /*
                 * Evita almacenar demasiados
                 * puntos mientras se dibuja.
                 */
                if (distance < 3) {
                    return previousPoints;
                }

                return [
                    ...previousPoints,
                    point,
                ];
            }
        );
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const clearDrawing = () => {
        setDrawnPoints([]);
        setChecked(false);
    };

    const drawnPath =
        drawnPoints.length > 0
            ? drawnPoints
                  .map(
                      (point, index) =>
                          `${
                              index === 0
                                  ? "M"
                                  : "L"
                          } ${point.x} ${point.y}`
                  )
                  .join(" ")
            : "";

    return (
        <div className="learn-page">

            {/* HEADER */}

            <header className="learn-header">
                <button
                    className="back-button"
                    onClick={onExit}
                >
                    ← VOLVER
                </button>

                <div className="learn-title">
                    <small>
                        ROUTE TRAINER
                    </small>

                    <strong>
                        MODO APRENDER
                    </strong>
                </div>

                <div className="route-progress">
                    {currentIndex + 1}
                    <span>/</span>
                    {routes.length}
                </div>
            </header>


            {/* MAIN */}

            <main
                className={`learn-main ${
                    trainingMode === "practice"
                        ? "practice-mode"
                        : ""
                }`}
            >

                {/* INFORMACIÓN */}

                <section className="route-panel">

                    <div className="route-heading">

                        <div className="route-code">
                            {route.code}
                        </div>

                        <div>
                            <small>
                                RUTA
                            </small>

                            <h1>
                                {route.name}
                            </h1>
                        </div>

                    </div>


                    <div className="distance-card">

                        <small>
                            REFERENCIA
                        </small>

                        <strong>
                            {
                                route.distanceLabel
                            }
                        </strong>

                    </div>


                    <div className="route-description">

                        <small>
                            ¿CÓMO SE HACE?
                        </small>

                        <p>
                            {
                                route.description
                            }
                        </p>

                    </div>


                    {route.pending ? (
                        <div className="pending-route">
                            RUTA PENDIENTE DE
                            DEFINIR
                        </div>
                    ) : (
                        <div className="learning-tip">

                            <span>TIP</span>

                            <p>
                                Primero observa la
                                demostración.
                                Después intenta
                                dibujarla sin ver
                                la trayectoria.
                            </p>

                        </div>
                    )}


                    {/* MODOS */}

                    <div className="training-selector">

                        <button
                            className={
                                trainingMode ===
                                "demo"
                                    ? "active"
                                    : ""
                            }
                            onClick={startDemo}
                        >
                            ▶ DEMOSTRACIÓN
                        </button>

                        <button
                            className={
                                trainingMode ===
                                "practice"
                                    ? "active"
                                    : ""
                            }
                            onClick={
                                startPractice
                            }
                            disabled={
                                route.pending
                            }
                        >
                            ✎ PRACTICAR
                        </button>

                    </div>


                    {/* RUTAS */}

                    <div className="mini-route-list">

                        {routes.map(
                            (
                                item,
                                index
                            ) => (
                                <button
                                    key={
                                        item.code
                                    }
                                    className={
                                        index ===
                                        currentIndex
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        changeRoute(
                                            index
                                        )
                                    }
                                >
                                    {
                                        item.code
                                    }
                                </button>
                            )
                        )}

                    </div>

                </section>


                {/* CAMPO */}

                <section className="field-section">

                    <div className="field-header">

                        <div>
                            <small>
                                RUTA ACTUAL
                            </small>

                            <strong>
                                {route.code} —{" "}
                                {route.name}
                            </strong>
                        </div>

                        <span>
                            -5 → 15 YD
                        </span>

                    </div>


                    <div
                        ref={fieldRef}
                        className={`learn-field ${
                            trainingMode ===
                            "practice"
                                ? "practice-field"
                                : ""
                        }`}
                        onPointerDown={
                            handlePointerDown
                        }
                        onPointerMove={
                            handlePointerMove
                        }
                        onPointerUp={
                            stopDrawing
                        }
                        onPointerCancel={
                            stopDrawing
                        }
                        onPointerLeave={
                            stopDrawing
                        }
                    >

                        <FieldGrid
                            highlighted={
                                route.highlightYard
                            }
                        />


                        {/* RUTA */}

                        <svg
                            className="learn-route-svg"
                            viewBox="0 0 500 500"
                            preserveAspectRatio="none"
                        >

                            <defs>
                                <marker
                                    id="routeArrow"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="5"
                                    refY="3"
                                    orient="auto"
                                >
                                    <path
                                        d="M0,0 L0,6 L6,3 z"
                                        fill="#b7ff32"
                                    />
                                </marker>
                            </defs>


                            {trainingMode === "demo" &&
                                !route.pending &&
                                route.code !== "Y" && (
                                    <path
                                        key={animationKey}
                                        className="animated-route"
                                        d={route.path}
                                        markerEnd="url(#routeArrow)"
                                    />
                                )}


                            {trainingMode ===
                                "practice" &&
                                drawnPath && (
                                    <path
                                        className="user-drawn-route"
                                        d={
                                            drawnPath
                                        }
                                    />
                                )}


                            {trainingMode ===
                                "practice" &&
                                checked &&
                                !route.pending && (
                                    <path
                                        className="answer-route"
                                        d={
                                            route.path
                                        }
                                    />
                                )}

                        </svg>

                        {trainingMode === "demo" &&
                            route.code === "Y" && (
                                <PickAnimation
                                    reaction={pickReaction}
                                    animationKey={animationKey}
                                />
                            )}


                        {/* FORMACIÓN */}

                        <FormationPlayer
                            className="receiver-player"
                            shortName="WR"
                            label="RECEPTOR"
                        />

                        <FormationPlayer
                            className="center-player"
                            shortName="C"
                            label="CENTRO"
                        />

                        <FormationPlayer
                            className="qb-player"
                            shortName="QB"
                            label="QB"
                        />

                        <FormationPlayer
                            className="rb-player"
                            shortName="RB"
                            label="CORREDOR"
                        />


                        {/* MENSAJE PRACTICAR */}

                        {trainingMode ===
                            "practice" &&
                            drawnPoints.length ===
                                0 && (
                                <div className="draw-instruction">
                                    DIBUJA LA RUTA
                                </div>
                            )}

                    </div>


                    {/* CONTROLES DEL CAMPO */}

                    <div className="field-bottom">

                        <div className="field-legend">

                            <span>
                                <i className="legend-wr" />
                                WR
                            </span>

                            <span>
                                <i className="legend-center" />
                                CENTRO
                            </span>

                            <span>
                                <i className="legend-qb" />
                                QB
                            </span>

                            <span>
                                <i className="legend-rb" />
                                CORREDOR
                            </span>

                        </div>


                        {trainingMode ===
                        "demo" ? (
                            <button
                                className="repeat-route"
                                onClick={
                                    startDemo
                                }
                            >
                                ↻ REPETIR
                            </button>
                        ) : (
                            <div className="practice-actions">

                                <button
                                    className="clear-route"
                                    onClick={
                                        clearDrawing
                                    }
                                >
                                    BORRAR
                                </button>

                                <button
                                    className="check-route"
                                    disabled={
                                        drawnPoints.length <
                                        2
                                    }
                                    onClick={() =>
                                        setChecked(
                                            true
                                        )
                                    }
                                >
                                    ✓ COMPROBAR
                                </button>

                            </div>
                        )}

                    </div>


                    {trainingMode ===
                        "practice" &&
                        checked && (
                            <div className="answer-message">
                                <strong>
                                    COMPARA TU
                                    RECORRIDO
                                </strong>

                                <span>
                                    Verde =
                                    trayectoria
                                    correcta
                                </span>
                            </div>
                        )}

                </section>

            </main>


            {/* NAVEGACIÓN */}

            <footer className="learn-footer">

                <button
                    onClick={previousRoute}
                >
                    ← ANTERIOR
                </button>

                <div>
                    <strong>
                        {route.code}
                    </strong>

                    <span>
                        {route.name}
                    </span>
                </div>

                <button
                    onClick={nextRoute}
                >
                    SIGUIENTE →
                </button>

            </footer>

        </div>
    );
}


function FieldGrid({ highlighted }) {
    const yards = [];

    for (
        let yard = -5;
        yard <= 15;
        yard++
    ) {
        yards.push(yard);
    }

    return (
        <div className="field-grid">

            {yards.map((yard) => {
                const top =
                    75 - yard * 5;

                const isHighlighted =
                    highlighted === yard;

                const showLabel =
                    IMPORTANT_YARDS.has(
                        yard
                    ) ||
                    isHighlighted;

                return (
                    <div
                        key={yard}
                        className={`clean-yard-line ${
                            yard === 0
                                ? "line-of-scrimmage"
                                : ""
                        } ${
                            isHighlighted
                                ? "highlighted-yard"
                                : ""
                        }`}
                        style={{
                            top: `${top}%`,
                        }}
                    >

                        {showLabel && (
                            <span className="clean-yard-number">
                                {yard === 0
                                    ? "LOS"
                                    : `${yard} YD`}
                            </span>
                        )}

                        {isHighlighted &&
                            yard !== 0 && (
                                <span className="target-yard-label">
                                    OBJETIVO
                                </span>
                            )}

                    </div>
                );
            })}

        </div>
    );
}


function FormationPlayer({
    className,
    shortName,
    label,
}) {
    return (
        <div
            className={`formation-player ${className}`}
        >
            <div className="formation-circle">
                {shortName}
            </div>

            <span>
                {label}
            </span>
        </div>
    );
}


export default LearnMode;