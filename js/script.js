document.addEventListener('DOMContentLoaded', function () {
    const articles = $('#articles');

    $('#news').on('change', function () {
        $('.header-wrapper').addClass('change');
        $('.all-articles').addClass('change');
        $('footer').addClass('change');
        let selection = $(this).val();
        $('.load-gif').show();

        $.ajax({
            method: 'GET',
            url: `https://api.nytimes.com/svc/topstories/v2/${selection}.json?api-key=AWYIBsLV3ssb38vug8gBUciGOuyLBhEN`,
            dataType: "json"
        })
            .done(function (data) {
                $('.load-gif').hide();
                const removeObject = data.results.filter(function (e) {
                    if (e.multimedia[4] !== undefined) {
                        return true;
                    }
                })

                articles.html("");

                const cutArray = removeObject.slice(0, 12)

                $.each(cutArray, function (index, value) {

                    articles.append(`
                    <a href="${value.url}">
                        <article class="each-article" style="background-image:url(${value.multimedia[4].url})">
                            <div class="title">
                            <h2>${value.title}</h2>
                            <p>${value.abstract}</p></div>
                        </article>
                    </a>
                    `);
                });
            })
            .fail(function () {
                $('.all-articles').append(`<p>Sorry there was an error, the api might have expired.</p>`);
            })
    });
    $('footer').append(`<p class="copyright">&copy; Copyright 2019 <span>instanews</span></p>`)

});                                                   
