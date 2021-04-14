var textarea = document.querySelector("#text");
var button = document.querySelector("#translate");
var display = document.querySelector(".display");

const server = "https://api.funtranslations.com/translate/yoda.json";

function translate(){
    url = server+"?text="+textarea.value;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            display.innerHTML = json.contents.translated;
        })
        .catch(err => console.log(err))
};

button.addEventListener("click", translate);

