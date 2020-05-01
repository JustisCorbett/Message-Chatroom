
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

const nameForm = document.getElementById("name-form");

nameForm.addEventListener("submit", function (e){
    e.preventDefault;

    const formData = new FormData(this);

    fetch("/create-name", {
        method: "post",
        body: formData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.error(error);
    })
});

