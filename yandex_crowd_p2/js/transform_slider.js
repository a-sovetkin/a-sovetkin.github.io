const transform_wrapper = document.querySelector('.transform_wrapper')
const transform_table = transform_wrapper.querySelector('.transform_table');
const stages = transform_wrapper.querySelectorAll('.stage');

const prev_card = transform_wrapper.querySelector('.prev');
const next_card = transform_wrapper.querySelector('.next');

const dot = transform_wrapper.querySelector('.paging.dots');
const number = transform_wrapper.querySelector('.numbers');

let page = 0;

const gridValue = getComputedStyle(transform_table).getPropertyValue('grid-template-columns');
const totalItem = gridValue.split(/\s+/).length;
const widthBlock = transform_table.offsetWidth;
const countItems = 1;

if (totalItem > 1) {
    for (let i=1; i < totalItem; i++){
        const cloneDot = dot.cloneNode(true);
        number.append(cloneDot);
    }
}

const dotsAll = transform_wrapper.querySelectorAll('.paging.dots');

changePaging();

prev_card.addEventListener("click", () => {
    if (prev_card.classList.contains('_active')) {
        page--;
        slideTransform();
        changePaging();
    }
});

next_card.addEventListener("click", () => {
    if (next_card.classList.contains('_active')) {
        page++;
        slideTransform();
        changePaging();
    }
});

function slideTransform() {
    for (let item of stages) {
        item.style.transform = `translateX(calc(-${page * widthBlock}px - ${page}*20px))`;
    }
}

function changePaging() {
    (page == 0) ? prev_card.classList.toggle('_active', false) : prev_card.classList.toggle('_active', true);
    (page == (totalItem-1)) ? next_card.classList.toggle('_active', false) : next_card.classList.toggle('_active', true);

    dotsAll.forEach((el, i) => {
        (page == i) ? el.classList.toggle('_active', true) : el.classList.toggle('_active', false);
    });
}
