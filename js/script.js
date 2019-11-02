document.addEventListener('DOMContentLoaded', function () {
    const articles = $('#articles');
    //i want to make the options to be called in as js
    // make an array 
    //
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
                    console.log(data.section);
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

    const topbtn = document.getElementById('btn');

    window.onscroll = function () {
        scrollPast();
    }

    function scrollPast() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            topbtn.style.display = "block";
        } else {
            topbtn.style.display = 'none';
        }
    }

    function btnClick() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    topbtn.onclick = function () {
        btnClick();
    }
});                                                   
