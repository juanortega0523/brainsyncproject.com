const carousel = document.querySelector('.overflow-x-auto');



let isDragging = false;

const dragStart = () => {
  isDragging = true;
  console.log('oi');
}

const dragging = (e) => {
  if (!isDragging) {
    return;
  }
  carousel.scrollBy(e.pageX, 0);
  // console.log(e.pageX);
  // carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
