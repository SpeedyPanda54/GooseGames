// =====================
// GooseGames Alert Library
// Alert.js
// =====================

(function () {

    if (document.getElementById("gg-alert-styles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "gg-alert-styles";

    style.textContent = `

        .gg-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,.7);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity .25s ease;
            z-index: 99999;
        }

        .gg-box {
            background: white;
            width: 90%;
            max-width: 450px;
            border-radius: 16px;
            padding: 25px;
            text-align: center;
            box-shadow: 0 15px 40px rgba(0,0,0,.3);
            animation: ggPop .3s ease;
        }

        .gg-title {
            margin: 0 0 15px;
            color: #222;
        }

        .gg-message {
            margin-bottom: 20px;
            line-height: 1.5;
            color: #555;
        }

        .gg-buttons {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .gg-btn {
            border: none;
            border-radius: 10px;
            padding: 10px 20px;
            cursor: pointer;
            font-weight: bold;
            transition: .2s;
        }

        .gg-btn:hover {
            transform: translateY(-2px);
        }

        .gg-btn-primary {
            background: #0ea5e9;
            color: white;
        }

        .gg-btn-danger {
            background: #e74c3c;
            color: white;
        }

        .gg-btn-secondary {
            background: #dcdcdc;
            color: #333;
        }

        @keyframes ggPop {

            0% {
                transform: scale(.8);
                opacity: 0;
            }

            80% {
                transform: scale(1.05);
            }

            100% {
                transform: scale(1);
                opacity: 1;
            }

        }

    `;

    document.head.appendChild(style);

})();

function createOverlay(id) {

    let overlay = document.getElementById(id);

    if (overlay) {
        return overlay;
    }

    overlay = document.createElement("div");
    overlay.id = id;
    overlay.className = "gg-overlay";

    overlay.onclick = (e) => {

        if (e.target === overlay) {
            closeModal(overlay);
        }

    };

    document.body.appendChild(overlay);

    return overlay;
}

function openModal(overlay) {

    overlay.style.pointerEvents = "auto";

    setTimeout(() => {
        overlay.style.opacity = "1";
    }, 10);

}

function closeModal(overlay) {

    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";

}

// Escape key closes modals

document.addEventListener("keydown", (e) => {

    if (e.key !== "Escape") return;

    document
        .querySelectorAll(".gg-overlay")
        .forEach(closeModal);

});

// =====================
// ALERT
// =====================

function Alert(
    message,
    title = "GooseGames"
) {

    const overlay =
        createOverlay("gg-alert");

    overlay.innerHTML = `

        <div class="gg-box">

            <h2 class="gg-title">
                ${title}
            </h2>

            <div class="gg-message">
                ${message}
            </div>

            <button
                class="gg-btn gg-btn-primary">
                OK
            </button>

        </div>

    `;

    overlay
        .querySelector("button")
        .onclick = () =>
            closeModal(overlay);

    openModal(overlay);

}

// =====================
// CONFIRM
// =====================

function Confirm(
    title,
    message,
    onYes,
    yesText = "Continue",
    cancelText = "Cancel"
) {

    const overlay =
        createOverlay("gg-confirm");

    overlay.innerHTML = `

        <div class="gg-box">

            <h2 class="gg-title">
                ${title}
            </h2>

            <div class="gg-message">
                ${message}
            </div>

            <div class="gg-buttons">

                <button
                    id="gg-cancel"
                    class="gg-btn gg-btn-secondary">
                    ${cancelText}
                </button>

                <button
                    id="gg-confirm-btn"
                    class="gg-btn gg-btn-danger">
                    ${yesText}
                </button>

            </div>

        </div>

    `;

    overlay
        .querySelector("#gg-cancel")
        .onclick = () =>
            closeModal(overlay);

    overlay
        .querySelector("#gg-confirm-btn")
        .onclick = () => {

            closeModal(overlay);

            if (typeof onYes === "function") {
                onYes();
            }

        };

    openModal(overlay);

}