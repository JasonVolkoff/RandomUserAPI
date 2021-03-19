$(document).ready(function () {
    $.get("https://randomuser.me/api/?results=5", function (data) {
        $("#name1").text(data.results[0].name.title + ". " + data.results[0].name.first + " " + data.results[0].name.last);
    }, "json");
});