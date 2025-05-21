const productContainers = [...document.querySelectorAll('.card-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

const scrollC = 0.7;

function getCardWidthWithMargin(container) {
    const card = container.querySelector('.card');
    const style = window.getComputedStyle(card);
    const width = card.offsetWidth;
    const marginRight = parseInt(style.marginRight) || 0;
    return width + marginRight;
}

let containerWidths = productContainers.map(item => {
    const baseWidth = item.getBoundingClientRect().width * scrollC;
    const cardWidth = getCardWidthWithMargin(item);
    return baseWidth < cardWidth ? cardWidth : baseWidth;
});

window.addEventListener('resize', () => {
    containerWidths = productContainers.map(item => {
        const baseWidth = item.getBoundingClientRect().width * scrollC;
        const cardWidth = getCardWidthWithMargin(item);
        return baseWidth < cardWidth ? cardWidth : baseWidth;
    });
});

productContainers.forEach((item, i) => {
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidths[i];
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidths[i];
    });
});
