
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

nameForm.addEventListener("submit", function (e){
    e.preventDefault;

    let name = document.getElementById("create-name").value;
    if (name == false) {
        alert("You must enter a valid username!");
        return false;
    }
    let formData = new FormData(nameForm);

    fetch("/create-name", {
        method: "post",
        body: formData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.error(error);
        alert(error);
    })
});

document.onload = loadRooms();

function loadRooms() {

};
