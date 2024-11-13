const players_wrapper = document.querySelector('.players_wrapper')
const players_slider = players_wrapper.querySelector('.players_list');
const players = players_wrapper.querySelectorAll('.player');

const prev = players_wrapper.querySelector('.prev');
const next = players_wrapper.querySelector('.next');

const textCurrent = players_wrapper.querySelector('.page_num.current');
const textTotal = players_wrapper.querySelector('.page_num.total');

let curentPage = 0;

const width = players_slider.offsetWidth;
const totalPages = Math.ceil((players.length * players[0].offsetWidth) / width);
const itemsOnPage = Math.ceil(players.length / totalPages);

changePaging();

prev.addEventListener("click", () => {
    if (prev.classList.contains('_active')) {
        curentPage--;
        slide();
        changePaging();
    }
});

next.addEventListener("click", () => {
    if (next.classList.contains('_active')) {
        curentPage++;
        slide();
        changePaging();
    }
});

function slide () {
    for (let item of players) {
        item.style.transform = `translateX(calc(-${curentPage * width}px - ${curentPage}*20px))`;
    }
}

function changePaging() {
    (curentPage == 0) ? prev.classList.toggle('_active', false) : prev.classList.toggle('_active', true);
    (curentPage == (totalPages-1)) ? next.classList.toggle('_active', false) : next.classList.toggle('_active', true);

    textCurrent.textContent = ((curentPage+1)*itemsOnPage <= players.length) ? (curentPage+1)*itemsOnPage : players.length;
    textTotal.textContent = players.length;
}
