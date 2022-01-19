window.onload = () => {
  const target = document.querySelector('.sc_infinity .list');
  const loadLimit = 10; // set load images limit
  let loadCount = 0;

  const loadImages = () => {
    let scrollTop = window.scrollY;
    let onTop =
      document.body.clientHeight -
      window.innerHeight -
      document.querySelector('.footer').clientHeight;
    let data = '';
    scrollTop >= onTop && (data = getImages());
    data && (target.innerHTML += data);
  };

  // This would be API request to the DB if this was real life application
  const getImages = () => {
    loadCount++;
    const imageList =
      '<li><figure><img src="./images/1.jpg"></figure></li><li><figure><img src="./images/2.jpg"></figure></li><li><figure><img src="./images/3.jpg"></figure></li>';
    return loadCount < loadLimit ? imageList : null;
  };

  window.addEventListener('scroll', loadImages);

  const init = () => {
    loadImages();
  };
  init();
};
