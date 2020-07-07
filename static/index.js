
const roomPanel = document.querySelector(".room-panel");
const chatPanel = document.querySelector(".chat-panel");

document.querySelector('.panel-button').onclick = () => {
    if (roomPanel.classList.contains("panel-open")){
        chatPanel.classList.add("panel-open");
        roomPanel.classList.remove("panel-open");
        document.getElementById("panel-arrow").innerHTML = ">";    
    }
    else {
        roomPanel.classList.add("panel-open");
        chatPanel.classList.remove("panel-open");
        document.getElementById("panel-arrow").innerHTML = "<";
    }
};

const nameForm = document.getElementById("name-form");

function submitUsername() {

    let name = document.getElementById("create-name");

    let entry = {
        name: name.value
    }

    fetch("/create-name", {
        method: "POST",
        credentials: "include",
        headers: new Headers ({
            "content-type": "application/json"
        }),
        body: JSON.stringify(entry)
    }).then(function (response) {
        return response.text();
    }).catch(function (error) {
        console.error(error);
        alert(error);
    })
};

document.onload = loadRooms();

function loadRooms() {

};
