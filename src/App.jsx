import { useState } from "react";

import "./App.css";

import LearnMode
    from "./components/LearnMode";


const routes = [
    { code: "A", name: "Angle" },
    { code: "B", name: "Back" },
    { code: "C", name: "Cross" },
    { code: "D", name: "Dig" },
    { code: "E", name: "Cordeer" },
    { code: "F", name: "Front*" },
    { code: "G", name: "Go" },
    { code: "H", name: "sHalow" },
    { code: "I", name: "In" },
    { code: "J", name: "Bench" },
    { code: "K", name: "Come Back" },
    { code: "L", name: "Bubble*" },

    {
        code: "M",
        name: "Whip invertido (grande)",
    },

    { code: "N", name: "sNag" },
    { code: "O", name: "Out" },
    { code: "P", name: "Pitch*" },

    {
        code: "Q",
        name: "Slant (Quick Pass)",
    },

    { code: "R", name: "dRag" },

    {
        code: "S",
        name: "Pantalla (Screen)*",
    },

    { code: "T", name: "Hitch" },
    { code: "U", name: "Under*" },
    { code: "V", name: "reVerse*" },
    { code: "W", name: "Whip" },
    { code: "X", name: "Counter*" },
    { code: "Y", name: "Pick" },
    { code: "Z", name: "Zig" },
];


function App() {

    const [mode, setMode] =
        useState("home");


    if (mode === "learn") {

        return (
            <LearnMode
                onExit={() =>
                    setMode("home")
                }
            />
        );

    }


    return (

        <div className="app">

            <header className="header">

                <div>

                    <span className="badge">
                        FLAG FOOTBALL
                    </span>

                    <h1>
                        ROUTE
                        <span>
                            {" "}TRAINER
                        </span>
                    </h1>

                </div>


                <div className="player">

                    <span>🔥</span>

                    <strong>
                        0 XP
                    </strong>

                </div>

            </header>


            <main>

                <section className="hero">

                    <div className="hero-content">

                        <p className="eyebrow">
                            DOMINA EL PLAYBOOK
                        </p>


                        <h2>
                            Aprende.
                            <br />

                            Practica.
                            <br />

                            <span>
                                Domina.
                            </span>
                        </h2>


                        <p className="description">

                            Entrena tus rutas de
                            Flag Football de una
                            forma rápida, visual
                            y divertida.

                        </p>


                        <button
                            className="play-button"
                            onClick={() =>
                                setMode(
                                    "learn"
                                )
                            }
                        >
                            ▶ COMENZAR
                            ENTRENAMIENTO
                        </button>

                    </div>


                    <FootballField />

                </section>


                <section className="training">

                    <p className="eyebrow">
                        CENTRO DE
                        ENTRENAMIENTO
                    </p>


                    <h2>
                        Elige tu modo
                    </h2>


                    <div className="modes">

                        <ModeCard
                            icon="🏈"
                            number="01"
                            title="APRENDER"
                            description="
                                Conoce cada ruta
                                y observa su
                                trayectoria.
                            "
                            onClick={() =>
                                setMode(
                                    "learn"
                                )
                            }
                        />


                        <ModeCard
                            icon="🧠"
                            number="02"
                            title="QUIZ"
                            description="
                                Reconoce la ruta
                                antes de que se
                                acabe el tiempo.
                            "
                        />


                        <ModeCard
                            icon="⚡"
                            number="03"
                            title="CONTRARRELOJ"
                            description="
                                Responde rápido,
                                crea una racha y
                                rompe tu récord.
                            "
                        />


                        <ModeCard
                            icon="✏️"
                            number="04"
                            title="DIBUJAR"
                            description="
                                Traza la ruta
                                correcta sobre
                                el campo.
                            "
                        />

                    </div>

                </section>


                <section className="route-section">

                    <div className="section-title">

                        <div>

                            <p className="eyebrow">
                                PLAYBOOK
                            </p>

                            <h2>
                                26 rutas
                            </h2>

                        </div>


                        <span className="route-counter">
                            0 / 26 dominadas
                        </span>

                    </div>


                    <div className="routes">

                        {routes.map(
                            (route) => (

                                <button
                                    className="route-card"
                                    key={
                                        route.code
                                    }
                                >

                                    <span
                                        className="
                                            route-letter
                                        "
                                    >
                                        {
                                            route.code
                                        }
                                    </span>


                                    <span
                                        className="
                                            route-name
                                        "
                                    >
                                        {
                                            route.name
                                        }
                                    </span>


                                    <span
                                        className="
                                            route-arrow
                                        "
                                    >
                                        →
                                    </span>

                                </button>

                            )
                        )}

                    </div>

                </section>

            </main>

        </div>

    );

}



function ModeCard({
    icon,
    number,
    title,
    description,
    onClick,
}) {

    return (

        <button
            className="mode-card"
            onClick={onClick}
        >

            <div className="mode-top">

                <span className="mode-icon">
                    {icon}
                </span>

                <span className="mode-number">
                    {number}
                </span>

            </div>


            <h3>
                {title}
            </h3>


            <p>
                {description}
            </p>


            <span className="enter">
                ENTRAR →
            </span>

        </button>

    );

}



function FootballField() {

    return (

        <div className="field-wrapper">

            <div className="field">

                <span
                    className="
                        yard yard-20
                    "
                >
                    20
                </span>

                <span
                    className="
                        yard yard-40
                    "
                >
                    40
                </span>

                <span
                    className="
                        yard yard-50
                    "
                >
                    50
                </span>

                <span
                    className="
                        yard yard-40b
                    "
                >
                    40
                </span>

                <span
                    className="
                        yard yard-20b
                    "
                >
                    20
                </span>


                <div className="player-dot">
                    ●
                </div>


                <svg
                    className="demo-route"
                    viewBox="0 0 500 300"
                    preserveAspectRatio="none"
                >

                    <path
                        d="
                            M 250 260
                            L 250 190
                            Q 250 130
                              320 95
                            L 430 45
                        "
                    />

                </svg>

            </div>


            <div className="field-label">
                RUTA DE DEMOSTRACIÓN
            </div>

        </div>

    );

}


export default App;