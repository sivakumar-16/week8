const balls = document.getElementsByClassName('ball');
const balls2 = document.getElementsByClassName('ball2');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  balls[0].style.left = x;
  balls[0].style.top = y;
  balls[0].transform = 'translate(-' + x + ',-' + y + ')';
  balls2[0].style.left = x;
  balls2[0].style.top = y;
  balls2[0].transform = 'translate(-' + x + ',-' + y + ')';
};

