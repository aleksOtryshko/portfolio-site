function checkBackend() {
    fetch("https://mybackend.onrender.com/")
        .then(response => response.text())
        .then(data => {
            document.getElementById("status").innerText = "Бэкенд работает!";
        })
        .catch(error => {
            document.getElementById("status").innerText = "Ошибка соединения!";
        });
}
