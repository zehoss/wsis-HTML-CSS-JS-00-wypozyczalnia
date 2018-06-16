var aboutSection = document.querySelector('.section-about');
var readMoreButton = aboutSection.querySelector(':scope a.readMore');
var hideButton = aboutSection.querySelector(':scope a.hideButton');
var paragraphs = aboutSection.querySelectorAll(':scope p');


function toggleParagraphs(paragraphs, visibility) {
    var i;
    var paragraph;
    for (i = 1; i < paragraphs.length; i++) {
        paragraph = paragraphs[i];
        paragraph.style.display = visibility;
    }
}

toggleParagraphs(paragraphs, 'none');
hideButton.style.display = "none";

readMoreButton.addEventListener('click', function (event) {
    toggleParagraphs(paragraphs, "block");
    readMoreButton.style.display = "none";
    hideButton.style.display = "block";
    event.preventDefault();
});