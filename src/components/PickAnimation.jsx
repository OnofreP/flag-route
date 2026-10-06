function PickAnimation({
    reaction = "up",
    animationKey = 0,
}) {
    /*
     * reaction = "up"
     * El WR termina subiendo porque
     * el LB bajó.
     *
     * reaction = "down"
     * El WR termina bajando porque
     * el LB subió.
     */

    const receiverPath =
        reaction === "up"
            ? `
                M 250 375
                L 315 325
                C 335 305,
                  350 265,
                  365 210
              `
            : `
                M 250 375
                L 315 325
                C 340 345,
                  350 385
              `;

    const linebackerStart = {
        x: 355,
        y: 300,
    };

    const linebackerEnd =
        reaction === "up"
            ? {
                  x: 355,
                  y: 365,
              }
            : {
                  x: 355,
                  y: 235,
              };

    const lbText =
        reaction === "up"
            ? "LB BAJA"
            : "LB SUBE";

    const wrText =
        reaction === "up"
            ? "WR SUBE"
            : "WR BAJA";

    return (
        <>
            {/* TRAYECTORIA DEL RECEPTOR */}

            <svg
                className="pick-route-layer"
                viewBox="0 0 500 500"
                preserveAspectRatio="none"
            >
                <defs>
                    <marker
                        id="pickArrow"
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

                <path
                    key={`route-${animationKey}`}
                    className="pick-receiver-path"
                    d={receiverPath}
                    markerEnd="url(#pickArrow)"
                />
            </svg>


            {/* LINEBACKER */}

            <div
                key={`lb-${animationKey}`}
                className={`pick-linebacker ${
                    reaction === "up"
                        ? "lb-goes-down"
                        : "lb-goes-up"
                }`}
                style={{
                    "--lb-start-x":
                        `${linebackerStart.x / 5}%`,
                    "--lb-start-y":
                        `${linebackerStart.y / 5}%`,
                    "--lb-end-x":
                        `${linebackerEnd.x / 5}%`,
                    "--lb-end-y":
                        `${linebackerEnd.y / 5}%`,
                }}
            >
                <div className="pick-lb-circle">
                    LB
                </div>

                <span>
                    LINEBACKER
                </span>
            </div>


            {/* MENSAJE DE LECTURA */}

            <div
                key={`read-${animationKey}`}
                className="pick-read-message"
            >
                <span>{lbText}</span>

                <strong>→</strong>

                <span>{wrText}</span>
            </div>
        </>
    );
}

export default PickAnimation;