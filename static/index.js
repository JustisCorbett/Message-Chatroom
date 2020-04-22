document.addEventListener("DOMContentLoaded", () => {
    const roomPanel = document.querySelector(".room-panel");
    document.querySelector('.panel-button').onclick = () => {
        if (roomPanel.classList.contains("panel-open")){
            roomPanel.classList.remove("panel-open");
            document.getElementById("panel-arrow").innerHTML = ">";
            
        }
        else {
            roomPanel.classList.add("panel-open");
            document.getElementById("panel-arrow").innerHTML = "<";
        }
    };
});