$(document).ready(function () {

    $.getJSON('data/example.json', function (data) {

        /*if (data.instances[1].id !== data.budgets[1].instances[1]) {
            console.log("equal");
        } else {
            console.log("not equal");
        }*/

        //Tableau
        var items = '';
        $(data.instances).each(function (key, value) {
            items += '<tr>';
            items += '<td class="font-weight-bold">' + value.id + '</td>';
            items += '<td>' + value.name + '</td>';
            items += '<td>' + value.categorie + '</td>';
            items += '<td>' + value.type + '</td>';
            items += '<td>' + value.status + '</td>';
            items += '<td>' + value.creationDate + '</td>';
            items += '</tr>';
        });
        $('#items_table').append(items);

        //Coloration on/off
        $('tr td:nth-child(5)').each(
            function () {
                if ($(this).text() == "off") {
                    $(this).addClass("red-text text-uppercase font-weight-normal");
                } else if ($(this).text() == "on") {
                    $(this).addClass("green-text text-uppercase font-weight-normal");
                }
            }
        );

    });

});