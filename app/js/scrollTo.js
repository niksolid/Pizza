;(function(){
  const scroll = function(target) {
    const targetTop = target.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset;
    const targetOffsetTop = targetTop + scrollTop;
    const headerOffset = document.querySelector('.header-page').clientHeight;

    window.scrollTo(0, targetOffsetTop - headerOffset);
  }

  myLib.body.addEventListener('click', function(e) {
    const target = e.target;
    const scrollToItemClass = myLib.closestAttr(target,'data-scroll-to');

    if (scrollToItemClass === null) {
      return;
    }

    e.preventDefault(); // Отмена стандартного поведения
    const scrollToItem = document.querySelector(`.${scrollToItemClass}`);

    if (scrollToItem) {
      scroll(scrollToItem)
    }
  });
})();
