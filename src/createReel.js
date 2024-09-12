import arrowL from '/home/tobias/Desktop/repos/imagecarousel/assets/arrow-left.svg';
import arrowR from '/home/tobias/Desktop/repos/imagecarousel/assets/arrow-right.svg';

export default function factoryFunction() {
  const img = [];
  const mainDiv = document.createElement('div');
  let returnDiv = { mainReturn: mainDiv };
  const header = document.createElement('h1');
  header.textContent = "Change me with changeHeader('H1 Text')";
  const imgReelContainer = document.createElement('div');
  const images = document.createElement('div');
  const navigation = document.createElement('div');
  const imageLocation = document.createElement('div');
  const arrowLeft = document.createElement('button');
  const arrowRight = document.createElement('button');
  const buttons = [];
  let firstImg;
  let secondImg;
  let thirdImg;
  let imgIndex;
  let arrayLength;

  function createReel(...urls) {
    urls.forEach((item) => {
      let imageCreated = document.createElement('img');
      imageCreated.src = item;
      img.push(imageCreated);
      buttons.push(document.createElement('button'));
    });

    firstImg = img[1];
    secondImg = img[2];
      thirdImg = img[3];
      imgIndex = 2;
    arrayLength = img.length - 1;

    setInitialStyle();

    return returnDiv;
  }

  function setInitialStyle() {
    mainDiv.style.cssText = `width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;`;

    buttons.forEach((item) => {
      item.style.cssText = `
    height: 20px;
    width: 20px;
    border-radius: 100%;
    border: none;
    background-color: rgba(192, 191, 191, 0.582);`;
    });
      
    buttons[imgIndex].style.backgroundColor = 'red';

    imageLocation.style.cssText = `display:flex;
    gap: 5px;
    justify-content: center;
    align-items: center;`;

    imgReelContainer.style.cssText = ` padding: 3%;
    display: flex;
    flex-grow: 1;`;

    images.style.cssText = `width: 100%;
    display: grid;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    align-items: center;`;

    img.forEach((item) => {
      item.setAttribute('alt', 'Picture of a cliff');
      item.setAttribute('class', 'thirdImg imageInCarousel');
      item.setAttribute('width', '500');
      item.setAttribute('height', '600');
    });

    navigation.style.cssText = `display: flex;
    align-self: center;
    gap: 20px;
    align-items: center;
    `;

    arrowLeft.style.cssText = `
    background-image: url(${arrowL});
    background-color: white;
    border: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 30px;
    width: 30px;`;

    arrowRight.style.cssText = `
    background-image: url(${arrowR});
    background-color: white;
    border: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 30px;
    width: 30px;`;

    arrowRight.addEventListener('click', (e) => nextImage());
    arrowLeft.addEventListener('click', (e) => previousImage());

    navigation.appendChild(arrowLeft);
    buttons.forEach((item) => navigation.appendChild(item));
    navigation.appendChild(arrowRight);

    firstImg.style.cssText = `grid-column: 1/3;
    position: absolute;
    opacity: 0.5;
    width: 100%;
    height: 80%;
  border-radius: 20%;
    `;

    secondImg.style.cssText = `grid-column: 2/4;
    position: absolute;
    opacity: 1;
    z-index: 9;
    height: 100%;
    width: 100%;
    border-radius: 20%;
    `;

    thirdImg.style.cssText = `grid-column: 3/5;
    position: absolute;
    justify-self: end;
    opacity: 0.5;
    width: 100%;
    height: 80%;
    border-radius: 20%;
    `;

    images.appendChild(firstImg);
    images.appendChild(secondImg);
    images.appendChild(thirdImg);

    mainDiv.appendChild(header);
    imgReelContainer.appendChild(images);
    mainDiv.appendChild(imgReelContainer);
    mainDiv.appendChild(navigation);
  }

  function nextImage() {
    if (imgIndex === arrayLength) {
      firstImg = img[imgIndex - 1];
        firstImg = img[imgIndex - 1];
        resetButtons();
      buttons[imgIndex].style.backgroundColor = 'red';
      secondImg = img[imgIndex];
      updateImages();
    } else {
      imgIndex++;
      firstImg = img[imgIndex - 1];
        secondImg = img[imgIndex];
        resetButtons();
      buttons[imgIndex].style.backgroundColor = 'red';
      thirdImg = img[imgIndex + 1];
      updateImages();
    }
  }

  function resetButtons() {
    buttons.forEach((item) => {
      (item.style.backgroundColor = 'rgba(192, 191, 191, 0.582)');
    });
  }

  function previousImage() {
    if (imgIndex - 1 === 0) {
      imgIndex--;
        secondImg = img[0];
        resetButtons();
      buttons[0].style.backgroundColor = 'red';
      thirdImg = img[1];
      updateImages();
    } else {
      imgIndex--;
      console.log(imgIndex);
      firstImg = img[imgIndex - 1];
        secondImg = img[imgIndex];
        resetButtons();
      buttons[imgIndex].style.backgroundColor = 'red';
      thirdImg = img[imgIndex + 1];
      updateImages();
    }
  }

  function changeHeader(text) {
    header.textContent = text;
  }

  function updateImages() {
    arrowLeft.style.display = `inline`;
    arrowRight.style.display = `inline`;
    if (imgIndex === arrayLength) {
      arrowRight.style.display = `none`;
    }
    if (imgIndex === 0) {
      arrowLeft.style.display = `none`;
    }

      if (firstImg) {
      firstImg.style.cssText = `
            position: absolute;
            grid-column: 1 / 3;
            opacity: 0.5;
            width: 100%;
            height: 80%;
            border-radius: 20%;
        `;
      images.appendChild(firstImg);
    }

      if (secondImg) {
      secondImg.style.cssText = `
            grid-column: 2 / 4;
            position: absolute;
            opacity: 1;
            z-index: 9;
            height: 100%;
            width: 100%;
            border-radius: 20%;
        `;
      images.appendChild(firstImg);
    }

      if (thirdImg) {
      thirdImg.style.cssText = `
            grid-column: 3 / 5;
            position: absolute;
            justify-self: end;
            opacity: 0.5;
            width: 100%;
            height: 80%;
            border-radius: 20%;
        `;
      images.appendChild(thirdImg);
    }
  }

  return { createReel, changeHeader };
}
