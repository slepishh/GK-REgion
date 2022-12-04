document.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('.js-textWrap')) {
        let textWrap = document.querySelectorAll('.js-textWrap');
        textWrap.forEach(function(elem) {
            let textMaxHeight = getComputedStyle(elem).maxHeight;
            textMaxHeight = parseInt(textMaxHeight, 10);
            let textHeight = elem.scrollHeight;
            let btnMore = elem.nextElementSibling;
            if (textHeight > textMaxHeight) {
                btnMore.classList.add('show')
            }
            function showMoreText() {
                if (btnMore.classList.contains('js-lessText')) {
                    elem.classList.remove('open')
                    btnMore.innerHTML = 'Подробнее';
                    btnMore.classList.remove('js-lessText')
                } else {
                    elem.classList.add('open')
                    btnMore.innerHTML = 'Скрыть';
                    btnMore.classList.add('js-lessText')
                }
            }
            btnMore.addEventListener("click", showMoreText);
        })
    }
})