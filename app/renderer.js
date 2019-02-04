const timer25button = document.querySelector('#timer-25')
const timer5button = document.querySelector('#timer-5')

timer25button.addEventListener('click', () => { timer(25) });
timer5button.addEventListener('click', () => { timer(5) });

const timer = time => {
  switch (time) {
    case 25: setTimeout(() => { alert(`25 sec`) }, 25000); break;  
    case 5: setTimeout(() => { alert(`5 sec`) }, 5000); break;
    default: console.error('xz'); break;
  }
}