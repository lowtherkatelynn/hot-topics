let url = "./partials/articles.html";
let buttons = document.querySelectorAll("li");
let content = document.getElementById("content");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", giveContent);
}

function giveContent(e) {
    let target = e.target;

    if (target.textContent === "Home") {

        url = "./partials/articles.html";

        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                let parser = new DOMParser();
                let htmlDOM = parser.parseFromString(data, "text/html");
                let parent = htmlDOM.querySelector("div");
                content.innerHTML = parent.innerHTML;
            })
            .catch(function (error) {
                console.log(error.message);
            });

    } else if (target.textContent === "Portfolio") {

        url = "./partials/portfolio.html";

        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                let parser = new DOMParser();
                let htmlDOM = parser.parseFromString(data, "text/html");
                let parent = htmlDOM.querySelector("div");
                content.innerHTML = parent.innerHTML;
            })
            .catch(function (error) {
                console.log(error.message);
            });

    }
}
fetch(url)
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        let parser = new DOMParser();
        let htmlDOM = parser.parseFromString(data, "text/html");
        let parent = htmlDOM.querySelector("div");
        content.innerHTML = parent.innerHTML;
    })
    .catch(function (error) {
        console.log(error.message);
    });
