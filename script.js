$(document).ready(function () {
    var navbar = $('.navbar');
    var backToTop = $('.back-to-top');

    function handleScroll() {
        if ($(window).scrollTop() > 550) {
            navbar.addClass('solid');
            backToTop.addClass('visible');
        } else {
            navbar.removeClass('solid');
            backToTop.removeClass('visible');
        }
    }
    const carouselText = [
        { text: "Fullstack Developer", color: "Orange" },
        { text: "Software Developer", color: "Yellow" },
        { text: "Data Analyst", color: "pink" }
    ]
    $(document).ready(async function () {
        carousel(carouselText, "#feature-text")
    });
    async function typeSentence(sentence, eleRef, delay = 85) {
        const letters = sentence.split("");
        let i = 0;
        while (i < letters.length) {
            await waitForMs(delay);
            $(eleRef).append(letters[i]);
            i++
        }
        return;
    }
    async function deleteSentence(eleRef) {
        const sentence = $(eleRef).html();
        const letters = sentence.split("");
        let i = 0;
        while (letters.length > 0) {
            await waitForMs(100);
            letters.pop();
            $(eleRef).html(letters.join(""));
        }
    }
    async function carousel(carouselList, eleRef) {
        var i = 0;
        while (true) {
            updateFontColor(eleRef, carouselList[i].color)
            await typeSentence(carouselList[i].text, eleRef);
            await waitForMs(1500);
            await deleteSentence(eleRef);
            await waitForMs(500);
            i++
            if (i >= carouselList.length) { i = 0; }
        }
    }
    function updateFontColor(eleRef, color) {
        $(eleRef).css('color', color);
    }
    function waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    $(window).scroll(handleScroll);
    $("a").on('click', function (event) {
        if (this.hash !== "") 
        {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        } 
    });
});
