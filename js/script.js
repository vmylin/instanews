document.addEventListener('DOMContentLoaded', function () {

    $('option').on('select', function () {
        // $('option').val().
        $.ajax({
            method: 'GET',
            //{home,arts,business,sports,technology,fashion}
            url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=AWYIBsLV3ssb38vug8gBUciGOuyLBhEN'
        })
            .done(function (data) {
                console.log(data);
                // $('.user-name').append(data.login + ' - ' + data.followers);
                // $('.link').append(`<a href="` + data.blog + `">` + data.blog + `</a>`);
                // $.each(data, function (key, value) {
                //     $('.repo-list').append(`<li>` + value.name + `</li>`)
                // })
            })
            .fail(function (    ) {
                $('.user-name').append('Sorry there was an error.');
            });
            //always method is used for something like a loading spinner
    });
});




/*
jQuery also has a document ready you can use
NOTE all of these do the same thing, you just need one

$( document ).ready(function() {
    console.log( "ready!" );
});

OR the Shorthand

$(function() {
    console.log( "ready!" );
});
*/