document.addEventListener('DOMContentLoaded', function () {

    $('#news').on('change', function () {
        // $('option').val().
        $.ajax({
            method: 'GET',
            //{home,arts,business,sports,technology,fashion}
            url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=AWYIBsLV3ssb38vug8gBUciGOuyLBhEN'
        })
            .done(function (data) {
                console.log(data.results);
$.each(data.results, function() {
    $('.article-list').append(`<li class="articles">`+this.abstract+`</li>`)
    $('.article-list').append(`<a href="`+this.abstract+`"></a>`)
    $('.articles').css(`background-image`,`url(`+ this.multimedia[4].url+ `)`)
});
            })
            .fail(function () {
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