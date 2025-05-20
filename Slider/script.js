const productContainers = [...document.querySelectorAll('.card-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((container, i) => {
    const card = container.querySelector('.card');
    const cardStyle = window.getComputedStyle(card);
    
    const cardWidth = card.offsetWidth;
    const cardMarginRight = parseInt(cardStyle.marginRight);
    const scrollAmount = cardWidth + cardMarginRight;

    nxtBtn[i].addEventListener('click', () => {
        container.scrollLeft += scrollAmount;
    });

    preBtn[i].addEventListener('click', () => {
        container.scrollLeft -= scrollAmount;
    });
});
