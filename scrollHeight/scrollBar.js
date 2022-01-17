window.onload = () => {
  let text = document.querySelector('.progress .txt');
  let progressBar = document.querySelector('.progress .bar');

  const getProgress = () => {
    let sectionHeight = document.querySelector('.sec01').clientHeight;
    let scrollHeight = sectionHeight - window.innerHeight;
    let scrollTop = window.scrollY;
    let scrollPercentile = (scrollTop / scrollHeight) * 100;
    let percent = Math.round(scrollPercentile);
    render(percent, scrollPercentile);
  };

  const render = (percent, scrollPercentile) => {
    text.innerHTML = percent + '%';
    progressBar.style.width = scrollPercentile + '%';
  };

  const init = () => {
    getProgress();
  };

  window.addEventListener('scroll', () => {
    getProgress();
  });

  init();
};
