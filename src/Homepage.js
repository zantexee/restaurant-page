const Homepage = () => {
  const componentContainer = document.getElementById('content');

  const loremText =
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero, esseofficia labore quia at repudiandae animi illo odio minus mollitia pariaturblanditiis alias recusandae impedit, neque necessitatibus quidem aspernatur!';

  const navbar = document.createElement('nav');
  navbar.classList = 'navbar flex';
  navbar.id = '#navbar';

  // Creates logo and appends it to the logo container and then the navbar
  const logoDiv = document.createElement('div');
  logoDiv.classList = 'logo';

  const logo = document.createElement('img');
  logo.src = './assets/imgs/logo.webp';
  logo.alt = 'cheemsburger logo';
  logo.classList = 'img-fit circle-border';

  logoDiv.appendChild(logo);

  const headline = document.createElement('h1');
  const headlineText = document.createTextNode('Le Burger');
  headline.appendChild(headlineText);

  const paragraph = document.createElement('p');
  const paragraphText = document.createTextNode(loremText);
  paragraph.appendChild(paragraphText);

  const heroImage = document.createElement('img');
  heroImage.src = './assets/imgs/hero.webp';
  heroImage.alt = 'cheems the dog as chef';
  heroImage.classList = 'img-fit';

  const paragraphHeroDiv = document.createElement('div');
  paragraphHeroDiv.appendChild(paragraph);
  paragraphHeroDiv.appendChild(heroImage);
  paragraphHeroDiv.classList = 'hero flex flow-column';

  navbar.appendChild(headline);
  navbar.appendChild(logoDiv);

  componentContainer.appendChild(navbar);
  componentContainer.appendChild(paragraphHeroDiv);
  // componentContainer.appendChild(paragraph);
  // componentContainer.appendChild(heroImage);
};

export default Homepage;
