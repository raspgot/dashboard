$(document).ready(function () {

    $.getJSON('data/example.json', function (data) {

        //budgets
        var items = '';
        $(data.budgets).each(function (key, value) {
            items += '<div class="col-lg-4 col-md-6 m-5">';
            items += '<div class="card text-center">';
            items += '<div class="card-header info-color z-depth-2 text-uppercase white-text">' + value.name + '</div>';
            items += '<div class="card-body">';
            items += '<ul class="list-group">';
            items += '<li class="list-group-item teal lighten-5">';
            items += '<strong>Seuil Alert : </strong>' + value.seuilAlert + '€';
            items += '</li>';
            items += '<li class="list-group-item deep-orange lighten-5">';
            items += '<strong>Seuil Maximum : </strong>' + value.seuilMaximum + '€';
            items += '</li>';
            items += '<li class="list-group-item">';
            items += '<strong>Instances : </strong>' + value.instances + '';
            items += '</li>';
            items += '</ul>';
            items += '</div></div></div>';
        });
        $('#items_card').append(items);

    });

});