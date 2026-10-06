/*
 * FLAG ROUTE TRAINER
 *
 * Campo:
 * -5 yd a +15 yd
 *
 * SVG:
 * 500 x 500
 *
 * Línea de scrimmage:
 * y = 375
 *
 * ESCALA:
 * 25 unidades = 1 yarda
 *
 * RECEPTOR:
 * (250, 375)
 */

export const FIELD = {
    width: 500,
    height: 500,

    startX: 250,
    startY: 375,

    unitsPerYard: 25,
};


export const routes = [

    /* =========================
       A — ANGLE
    ========================= */

    {
        code: "A",
        name: "Angle",

        playerType: "WR",

        distanceLabel:
            "Corte a 3 yd",

        highlightYard: 3,

        description:
            "Recorre 3 yardas en diagonal hacia dentro y después realiza el corte en diagonal hacia afuera.",

        path: `
            M 250 375
            L 300 300
            L 225 225
        `,
    },


    /* =========================
       B — BACK
    ========================= */

    {
        code: "B",
        name: "Back",

        playerType: "WR",

        distanceLabel:
            "5 yd hacia atrás",

        highlightYard: -5,

        description:
            "Retrocede aproximadamente 5 yardas en línea recta hacia atrás.",

        path: `
            M 250 375
            L 250 495
        `,
    },


    /* =========================
       C — CROSS
    ========================= */

    {
        code: "C",
        name: "Cross",

        playerType: "WR",

        distanceLabel:
            "Cruce a 12 yd",

        highlightYard: 12,

        description:
            "Realiza el cruce progresivamente hasta alcanzar una profundidad de 12 yardas.",

        path: `
            M 250 375
            C 275 310,
              330 190,
              455 75
        `,
    },


    /* =========================
       D — DIG
    ========================= */

    {
        code: "D",
        name: "Dig",

        playerType: "WR",

        distanceLabel:
            "Corte a 7 yd",

        highlightYard: 7,

        description:
            "Avanza 7 yardas y realiza un corte de 90 grados hacia la derecha.",

        path: `
            M 250 375
            L 250 200
            L 420 200
        `,
    },


    /* =========================
       E — CORDERO
    ========================= */

    {
        code: "E",
        name: "Cordeer",

        playerType: "WR",

        distanceLabel:
            "Corte a 7 yd",

        highlightYard: 7,

        description:
            "Avanza 7 yardas y realiza el corte diagonal hacia afuera.",

        path: `
            M 250 375
            L 250 200
            L 130 105
        `,
    },


    /* =========================
       F — FRONT
    ========================= */

    {
        code: "F",
        name: "Front",

        playerType: "RB",

        distanceLabel:
            "Pasa frente al QB",

        highlightYard: null,

        description:
            "Ruta de corredor. El corredor pasa por enfrente del quarterback.",

        /*
         * Esta ruta NO inicia
         * desde el WR.
         *
         * La dibujamos desde la
         * zona del corredor y pasa
         * frente al QB.
         */

        path: `
            M 455 440
            C 430 420,
              400 405,
              360 405
            L 300 405
        `,
    },


    /* =========================
       G — GO
    ========================= */

    {
        code: "G",
        name: "Go",

        playerType: "WR",

        distanceLabel:
            "Sin límite",

        highlightYard: 15,

        description:
            "Corre completamente hacia adelante. La ruta continúa hasta el final del campo.",

        path: `
            M 250 375
            L 250 20
        `,
    },


    /* =========================
       H — SHALLOW
    ========================= */

    {
        code: "H",
        name: "sHalow",

        playerType: "WR",

        distanceLabel:
            "Cruce a 2 yd",

        highlightYard: 2,

        description:
            "Realiza una curva similar a Cross, pero manteniendo una profundidad aproximada de 2 yardas.",

        /*
         * Curva corta.
         *
         * Termina aproximadamente
         * a la altura de 2 yd.
         */

        path: `
            M 250 375
            C 275 345,
              335 325,
              450 325
        `,
    },


    /* =========================
       I — IN
    ========================= */

    {
        code: "I",
        name: "In",

        playerType: "WR",

        distanceLabel:
            "Corte a 2 yd",

        highlightYard: 2,

        description:
            "Avanza 2 yardas hacia enfrente y realiza un corte de 90 grados hacia la derecha.",

        /*
         * 2 yd:
         *
         * 375 - 50 = 325
         */

        path: `
            M 250 375
            L 250 325
            L 405 325
        `,
    },


    /* =========================
       J — BENCH
    ========================= */

    {
        code: "J",
        name: "Bench",

        playerType: "WR",

        distanceLabel:
            "3 yd + 3 yd + 3 yd",

        highlightYard: 3,

        description:
            "Recorre 3 yardas en diagonal hacia dentro, después 3 yardas hacia enfrente y termina con 3 yardas en diagonal hacia afuera.",

        /*
         * 1:
         * 3 yd diagonal hacia dentro
         *
         * 2:
         * 3 yd hacia enfrente
         *
         * 3:
         * 3 yd diagonal hacia afuera
         */

        path: `
            M 250 375
            L 300 300
            L 300 225
            L 225 150
        `,
    },

        /* =========================
       K — COME BACK
    ========================= */

    {
        code: "K",
        name: "Come Back",

        playerType: "WR",

        distanceLabel:
            "7 yd + regreso 1–2 yd",

        highlightYard: 7,

        description:
            "Avanza 7 yardas y realiza un corte de 45 grados hacia afuera y hacia atrás, regresando aproximadamente 1 o 2 yardas.",

        /*
         * Avanza 7 yd.
         *
         * Después corta aproximadamente
         * 45° hacia afuera y atrás.
         *
         * Finalmente pierde alrededor
         * de 2 yd de profundidad.
         */

        path: `
            M 250 375
            L 250 200
            L 175 250
        `,
    },


    /* =========================
       L — BUBBLE
    ========================= */

    {
        code: "L",
        name: "Bubble",

        playerType: "RB",

        distanceLabel:
            "Termina a la altura del QB",

        highlightYard: null,

        description:
            "Ruta de corredor. Realiza una curva hacia abajo y termina aproximadamente a la altura del quarterback.",

        /*
         * Inicia desde el corredor.
         *
         * Hace la curva hacia abajo
         * hasta quedar aproximadamente
         * a la altura del QB.
         */

        path: `
            M 455 440
            C 470 440,
              485 450,
              490 465
            C 492 475,
              488 480,
              475 480
        `,
    },


    /* =========================
       M — WHIP INVERTIDO
    ========================= */

    {
        code: "M",
        name: "Whip invertido",

        playerType: "WR",

        distanceLabel:
            "Curva a 2 yd",

        highlightYard: 3,

        description:
            "Realiza una curva de aproximadamente 2 yardas hacia afuera y después regresa hacia adentro.",

        /*
         * Primero abre hacia afuera.
         *
         * Después cambia de dirección
         * y vuelve hacia dentro.
         */

        path: `
            M 250 375
            C 225 335,
            165 300,
            80 300

            L 400 300
        `,
    },


    /* =========================
       N — SNAG
    ========================= */

    {
        code: "N",
        name: "sNag",

        playerType: "WR",

        distanceLabel:
            "2 yd",

        highlightYard: 2,

        description:
            "Avanza 2 yardas hacia enfrente.",

        path: `
            M 250 375
            L 250 325
        `,
    },


    /* =========================
       O — OUT
    ========================= */

    {
        code: "O",
        name: "Out",

        playerType: "WR",

        distanceLabel:
            "Corte a 2 yd",

        highlightYard: 2,

        description:
            "Avanza 2 yardas y realiza un corte de 90 grados hacia afuera.",

        /*
         * 2 yd hacia enfrente.
         *
         * Después 90° hacia afuera.
         *
         * En nuestro diagrama:
         * afuera = izquierda.
         */

        path: `
            M 250 375
            L 250 325
            L 100 325
        `,
    },

    /* =========================
    P — PITCH
    ========================= */

    {
        code: "P",
        name: "Pitch",

        playerType: "RB",

        distanceLabel:
            "Movimiento lateral",

        highlightYard: null,

        description:
            "Ruta de corredor. Se desplaza en línea recta hacia el lado contrario del quarterback.",

        /*
        * El RB está del lado derecho.
        * Pitch cruza en línea recta
        * hacia el lado contrario del QB.
        */

        path: `
            M 455 440
            L 495 440
        `,
    },


    /* =========================
    Q — SLANT
    ========================= */

    {
        code: "Q",
        name: "Slant (Quick Pass)",

        playerType: "WR",

        distanceLabel:
            "Curva a 5 yd",

        highlightYard: 5,

        description:
            "Realiza una curva progresiva hasta alcanzar aproximadamente 5 yardas de profundidad.",

        /*
        * Similar al concepto de una
        * curva progresiva, alcanzando
        * una profundidad de 5 yd.
        */

        path: `
            M 250 375
            C 270 340,
            310 290,
            375 250
        `,
    },


    /* =========================
    R — DRAG
    ========================= */

    {
        code: "R",
        name: "dRag",

        playerType: "WR",

        distanceLabel:
            "Hacia el centro",

        highlightYard: null,

        description:
            "Corre en línea recta desde su posición en dirección al centro.",

        path: `
            M 250 375
            L 350 375
        `,
    },


    /* =========================
    S — PANTALLA / SCREEN
    ========================= */

    {
        code: "S",
        name: "Pantalla (Screen)",

        playerType: "RB",

        distanceLabel:
            "Corte a 7 yd",

        highlightYard: 7,

        description:
            "Ruta de corredor. Avanza 7 yardas hacia enfrente y realiza un corte de 90 grados hacia el centro del campo.",

        /*
        * Sale desde el RB.
        *
        * 7 yd hacia enfrente:
        * 440 - 175 = 265
        *
        * Después realiza el corte
        * hacia el centro del campo.
        */

        path: `
            M 455 440
            L 455 265
            L 250 265
        `,
    },


    /* =========================
    T — HITCH
    ========================= */

    {
        code: "T",
        name: "Hitch",

        playerType: "WR",

        distanceLabel:
            "Stop",

        highlightYard: null,

        description:
            "No realiza desplazamiento. Se queda en su posición y hace un stop.",

        /*
        * Hitch en este playbook:
        * quedarse en el mismo lugar.
        *
        * Dibujamos un pequeño símbolo
        * para que visualmente se pueda
        * identificar el STOP.
        */

        path: `
            M 250 375
            L 250 374
        `,
    },

    /* =========================
    U — UNDER
    ========================= */

    {
        code: "U",
        name: "Under",

        playerType: "RB",

        distanceLabel:
            "Pendiente",

        highlightYard: null,

        description:
            "Ruta pendiente de definir.",

        path: `
            M 455 440
        `,

        pending: true,
    },


    /* =========================
    V — REVERSE
    ========================= */

    {
        code: "V",
        name: "reVerse",

        playerType: "RB",

        distanceLabel:
            "Por detrás del QB",

        highlightYard: null,

        description:
            "Ruta de corredor similar a Front, pero pasando por detrás del quarterback.",

        /*
        * FRONT pasa por enfrente.
        * REVERSE pasa por detrás.
        *
        * Sale desde la zona del RB
        * y cruza detrás del QB.
        */

        path: `
            M 455 440

            C 440 455,
            415 470,
            385 470

            C 350 470,
            315 455,
            285 440
        `,
    },


    /* =========================
    W — WHIP
    ========================= */

    {
        code: "W",
        name: "Whip",

        playerType: "WR",

        distanceLabel:
            "Curva de 3 yd",

        highlightYard: 3,

        description:
            "Realiza una curva de 3 yardas hacia el lado contrario de Whip invertido y después regresa en línea recta.",

        /*
        * Es el espejo de M.
        *
        * M:
        * curva hacia izquierda
        * y recta hacia derecha.
        *
        * W:
        * curva hacia derecha
        * y recta hacia izquierda.
        */

        path: `
            M 250 375

            C 275 335,
            335 300,
            420 300

            L 100 300
        `,
    },


    /* =========================
    X — COUNTER
    ========================= */

    {
        code: "X",
        name: "Counter",

        playerType: "RB",

        distanceLabel:
            "Diagonal hacia el QB",

        highlightYard: null,

        description:
            "Ruta de corredor. Sale en diagonal desde su posición en dirección al quarterback.",

        path: `
            M 455 440
            L 410 425
        `,
    },


    /* =========================
    Y — PICK
    ========================= */

    {
        code: "Y",
        name: "Pick",

        playerType: "WR",

        distanceLabel:
            "Lectura del linebacker",

        highlightYard: null,

        description:
            "Sale inicialmente en diagonal hacia el centro del campo y modifica la ruta según el movimiento del linebacker: si el linebacker baja, el receptor sube; si el linebacker sube, el receptor baja.",

        /*
        * PICK ES UNA RUTA DE LECTURA.
        *
        * Salida inicial:
        * diagonal hacia el centro.
        *
        * Después existen dos opciones:
        *
        * LB baja  -> receptor sube.
        * LB sube  -> receptor baja.
        *
        * Por ahora mostramos
        * la salida inicial.
        *
        * Después la haremos interactiva.
        */

        path: `
            M 250 375
            L 315 325
        `,

        readRoute: true,
    },


    /* =========================
    Z — ZIG
    ========================= */

    {
        code: "Z",
        name: "Zig",

        playerType: "WR",

        distanceLabel:
            "3 yd + 3 yd + 3 yd",

        highlightYard: 3,

        description:
            "Recorre 3 yardas en diagonal hacia afuera, después 3 yardas en diagonal hacia el centro del campo y termina con 3 yardas hacia afuera del campo.",

        /*
        * 1. 3 yd diagonal hacia afuera.
        *
        * 2. 3 yd diagonal hacia
        *    el centro del campo.
        *
        * 3. 3 yd nuevamente
        *    hacia afuera.
        */

        path: `
            M 250 375
            L 195 320
            L 250 265
            L 195 210
        `,
    },

];