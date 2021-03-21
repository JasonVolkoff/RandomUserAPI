// $(document).ready(function () {
//     $.get("https://randomuser.me/api/?results=5", function (data) {
//         $("#name1").text(data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last);
//         $("#age1").text(data.results[0].dob.age);
//         $("#email1").text(data.results[0].email);
//         $("#address1").text(`${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state} ${data.results[0].location.postcode}`);
//         console.log(data.results[0]);
//     }, "json");
$(document).ready(function () {
    $.getJSON("https://randomuser.me/api/?results=5", function (data) {
        var randomuser_data = data;
        $.each(randomuser_data[0].results, function (key, value) {
            console.log(key);
            console.log(value);

        });
    });
});