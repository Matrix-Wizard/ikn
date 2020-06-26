window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  generateImgs();
  setTimeout(imgsSetting, 3000)

  lightGallery(document.getElementById('lg-gallery'), {
    selector: '.item',
    enableTouch: true,
    enableDrag: true,
    download: false,
    preload: 1,
    zoom: true,
    fullScreen: true,
  });
});



function generateImgs() {
  const lgGallery = document.querySelector('#lg-gallery')

  for (let i = 0; i < images.length; i++) {
    let galleryItem = `
  <div
    class = "item gallery__item"
    data-src=${images[i].dataSrc}
    data-sub-html="<h4>${images[i].name}</h4>
    <p>${images[i].text}.</p>"
  >
    <img class="gallery__item-img" src=${images[i].src}>
  </div>`
    lgGallery.insertAdjacentHTML("beforeend", galleryItem)
  }
}

function imgsSetting() {
  let galleryItemImgs = document.querySelectorAll('.gallery__item-img')


  for (let i = 0; i < galleryItemImgs.length; i++) {
    console.log(galleryItemImgs[i].complete);
    if (galleryItemImgs[i].naturalWidth > galleryItemImgs[i].naturalHeight) {
      galleryItemImgs[i].style.height = '100%'
    }
  }
}
