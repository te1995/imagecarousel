import './styles.css';
import factoryFunction from './createReel';
import firstImg from '/assets/carousel-imgs/garrett-parker-DlkF4-dbCOU-unsplash.jpg';
import secondImg from '/assets/carousel-imgs/adam-kool-ndN00KmbJ1c-unsplash.jpg';
import thirdImg from '/assets/carousel-imgs/bailey-zindel-NRQV-hBF10M-unsplash.jpg';
import fourthImg from '/assets/carousel-imgs/urban-vintage-78A265wPiO4-unsplash.jpg';
import fifthImg from '/assets/carousel-imgs/robert-lukeman-_RBcxo9AU-U-unsplash.jpg';

const bodyThat = document.querySelector('body');

let theFunction = factoryFunction();

bodyThat.appendChild(
  theFunction.createReel(
    firstImg,
    secondImg,
    thirdImg,
  ).mainReturn
);

// document.querySelector('.firstImg').src = firstImg;
// document.querySelector('.secondImg').src = secondImg;
// document.querySelector('.thirdImg').src = thirdImg;
