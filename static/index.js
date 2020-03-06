document.addEventListener("DOMContentLoaded", () => {
    const roomPanel = document.querySelector(".room-panel");
    document.querySelector('.panel-button').onclick = () => {
        if (roomPanel.classList.contains("panel-open"))
            roomPanel.classList.remove("panel-open");
        else
            roomPanel.classList.add("panel-open");
    };
});