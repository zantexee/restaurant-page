const initialComponent = () => {
  const componentContainer = document.getElementById('content');

  const loremText =
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero, esseofficia labore quia at repudiandae animi illo odio minus mollitia pariaturblanditiis alias recusandae impedit, neque necessitatibus quidem aspernatur!';

  const headline = document.createElement('h1');
  const headlineText = document.createTextNode('Le Burger');
  headline.appendChild(headlineText);

  const paragraph = document.createElement('p');
  const paragraphText = document.createTextNode(loremText);
  paragraph.appendChild(paragraphText);

  const heroImage = document.createElement('img');
  heroImage.src = './assets/imgs/hero.webp';
  heroImage.alt = 'cheemsburger logo';

  componentContainer.appendChild(headline);
  componentContainer.appendChild(paragraph);
  componentContainer.appendChild(heroImage);
};

export default initialComponent;
