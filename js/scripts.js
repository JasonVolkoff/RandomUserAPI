// $(document).ready(function () {
//     $.get("https://randomuser.me/api/?results=5", function (data) {
//         $("#name1").text(data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last);
//         $("#age1").text(data.results[0].dob.age);
//         $("#email1").text(data.results[0].email);
//         $("#address1").text(`${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state} ${data.results[0].location.postcode}`);
//         console.log(data.results[0]);
//     }, "json");
$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=5',
        dataType: 'json',
        success: function (data) {
            console.log(data.results[0]);
            for (var i = 0; i < 5; i++) {
                $("#userTables").append("<tr>" +
                    "<td>" +
                    data.results[i].name.title + " " + data.results[i].name.first + " " + data.results[i].name.last +
                    "</td>" +
                    "<td>" +
                    data.results[i].dob.age +
                    "</td>" +
                    "<td>" +
                    data.results[i].email +
                    "</td>" +
                    "<td>" +
                    `${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state} ${data.results[0].location.postcode}` +
                    "</td>" +
                    "</tr>"
                );

            }
        }
    });
})
