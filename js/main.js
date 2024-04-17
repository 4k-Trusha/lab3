window.scrollTo(0, 0);
window.onbeforeunload = () => {
  history.scrollRestoration = 'manual';
  document.documentElement.style.scrollBehavior = '';
  window.scrollTo(0, 0);
};
window.onload = () => {
  document.querySelectorAll('.toggle').forEach(function (element) {
    element.onclick = function () {
      const nav = document.querySelector('.nav');
      nav.style.visibility = 'visible';

      document
        .querySelectorAll('.toggle')
        .forEach((el) => el.classList.toggle('is-opened'));

      document.body.classList.toggle('nav-is-opened');

      const transitionEndHandler = (event) => {
        if (event.propertyName === 'opacity') {
          nav.removeEventListener('transitionend', transitionEndHandler);
          nav.style.visibility = 'hidden';
        }
      };
      if (!document.body.classList.contains('nav-is-opened')) {
        nav.addEventListener('transitionend', transitionEndHandler);
      }
    };
  });
};
