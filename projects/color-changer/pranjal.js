const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (btn) {
  // console.log(btn);
  btn.addEventListener('click', function (obj) {
    // console.log(obj);
    // console.log(obj.target);
    switch (obj.target.id) {
      case 'grey': {
        document.body.style.backgroundColor = obj.target.id;
        break;
      }
      case 'white': {
        document.body.style.backgroundColor = obj.target.id;
        break;
      }
      case 'blue': {
        document.body.style.backgroundColor = obj.target.id;
        break;
      }
      case 'yellow': {
        document.body.style.backgroundColor = obj.target.id;
        break;
      }
    }
  });
});
