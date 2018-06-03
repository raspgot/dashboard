$(document).ready(function () {

    $.getJSON('data/example.json', function (data) {

        //budgets
        var items = '';
        $(data.user).each(function (key, value) {
            items += '<div class="col-lg-3 col-md-4 col-sm-6 m-5">';
            items += '<div class="z-depth-1">';
            items += '<div class="cardbis hovercard">';
            items += '<div class="cardheader z-depth-1"></div>';
            items += '<div class="avatar">';
            items += '<img alt="avatar" class="z-depth-2" src="assets/img/avatar.jpg">';
            items += '</div>';
            items += '<div class="info">';
            items += '<div class="title">';
            items += '<p class="mb-1">' + value.mail + '</p>';
            items += '</div>';
            items += '<div class="desc"> ID : ' + value.id + '</div>';
            items += '</div>';
            items += '<div class="bottom">';
            items += '<span class="badge badge-pill light-blue mb-2">' + value.group + '</span>';
            items += '</div></div></div></div>';
        });
        $('#items_users').append(items);

    });

});