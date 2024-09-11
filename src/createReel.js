export default function factoryFunction() {
  const img = [];
  const mainDiv = document.createElement('div');
  const header = document.createElement('h1');
  header.textContent = "Change me with changeHeader('H1 Text')";
  const imgReelContainer = div.createElement('div');
  const images = div.createElement('div');
  const navigation = div.createElement('div');
  const imageLocation = div.createElement('div');
    const arrowLeft = div.createElement('button');
    const arrowRight = div.createElement('button');
    const buttons = [];

  function createReel(...urls) {
    urls.forEach((item) => {
      img.push({
        url: item,
        imgElement: document.createElement('img'),
        width: '500px',
        height: '500px',
      });
      buttons.push(document.createElement("button").classList.add("navigationDots buttonsImageCarousel"))
    
    });

    mainDiv.style.cssText = `width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;`;

    imgReelContainer.style.cssText = `
    padding: 3%;
    display: flex;
    flex-grow: 1;`;

    images.style.cssText = `
    width: 100%;
    display: grid;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    align-items: center;`;

    navigation.style.cssText = `
    display: flex;
    align-self: center;
    gap: 20px;`;

    imageLocation.style.cssText = `
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;`;
  }

  return { createReel };
}
