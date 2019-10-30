document.addEventListener('DOMContentLoaded', function () {

    const articles = $('#articles');

    $('#news').on('change', function () {
        let selection = $(this).val();
        $.ajax({
            method: 'GET',
            url: `https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=AWYIBsLV3ssb38vug8gBUciGOuyLBhEN`,
            dataType: "json"
        }).done(function (data) {
            console.log(data)
            const removeObject = data.results.filter(function (e) {
                if (e.multimedia[4] !== undefined) {
                    return true;
                }
            })
            const cutArray = removeObject.slice(0, 12)
            $.each(cutArray, function (index, value) {

                articles.append(`
                    <article class="each-article" style="background-image:url(${value.multimedia[4].url})">
                        <a href="${value.url}"></a>
                        <div class="title"><h2>${value.title}</h2>
                        <p>${value.abstract}</p></div>
                    </article>
                    `);
            });
        })
            .fail(function () {
                $('.user-name').append('Sorry there was an error.');
            });
        //always method is used for something like a loading spinner
    });
});





// jQuery also has a document ready you can use
// NOTE all of these do the same thing, you just need one

// $( document ).ready(function() {
//     console.log( "ready!" );
// });

// OR the Shorthand

// $(function() {
//     console.log( "ready!" );
// });
