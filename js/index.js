const pageStudio = document.querySelector('.main__studio');
const pagePortfolio = document.querySelector('.main__portfolio');
const buttonStudio = document.querySelector('#js-but__studio');
const buttonPortfolio = document.querySelector('#js-but__portfoilo');

if (localStorage.getItem('current') === 'portfolioClass') {
  openPortfolioPage();
}

function openPortfolioPage(e) {
  buttonStudio.classList.remove('current');
  buttonPortfolio.classList.add('current');
  pageStudio.classList.replace('display__block', 'display__none');
  pagePortfolio.classList.replace('display__none', 'display__block');
  localStorage.setItem('current', 'portfolioClass');
}

function openStudioPage(e) {
  buttonPortfolio.classList.remove('current');
  buttonStudio.classList.add('current');
  pagePortfolio.classList.replace('display__block', 'display__none');
  pageStudio.classList.replace('display__none', 'display__block');
  localStorage.setItem('current', 'studioClass');
}

buttonPortfolio.addEventListener('click', openPortfolioPage);
buttonStudio.addEventListener('click', openStudioPage);

// const handleButtonsNav = e => {
//   if (!e.currentTarget.classList.contains('current')) {
//     let mainButton = e.currentTarget;
//     let secondButton = null;
//     let mainPage = pageStudio;
//     let secondPage = null;

//     if (mainButton === buttonStudio) {
//       secondButton = buttonPortfolio;
//       secondPage = pagePortfolio;
//     } else {
//       secondButton = buttonStudio;
//       secondPage = pageStudio;
//       mainPage = pagePortfolio;
//     }

//     secondButton.classList.remove('current');
//     mainButton.classList.add('current');

//     secondPage.classList.replace('display__block', 'display__none');
//     mainPage.classList.replace('display__none', 'display__block');
//   }
// };

// buttonPortfolio.addEventListener('click', handleButtonsNav);
// buttonStudio.addEventListener('click', handleButtonsNav);
