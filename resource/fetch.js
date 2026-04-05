fetch("/HP/resource/header.html")
        .then((response) => response.text())
        .then((data) => document.querySelector("#menu").innerHTML = data);
fetch("/HP/resource/footer.html")
        .then((response) => response.text())
        .then((data) => document.querySelector("#footer").innerHTML = data);