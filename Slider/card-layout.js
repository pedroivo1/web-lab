const container = document.querySelector('.card-container');

const checkCardOverflow = () => {
  const totalCardWidth = Array.from(container.children).reduce((acc, card) => {
    const style = window.getComputedStyle(card);
    const marginRight = parseFloat(style.marginRight || 0);
    return acc + card.offsetWidth + marginRight;
  }, 0);

  const containerWidth = container.offsetWidth;

  if (totalCardWidth < containerWidth) {
    container.style.justifyContent = 'center';
  } else {
    container.style.justifyContent = 'flex-start';
  }
};

checkCardOverflow();
window.addEventListener('resize', checkCardOverflow);
