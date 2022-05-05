const english = {
  title: 'english',
  guaranteeItems: {
    maintitle: 'AMP interactive becomes e’motion',
    paragraph: 'The show will continue right here on this new web platform. Stay turned!',
  },
};
const français = {
  title: 'français',
  guaranteeItems: {
    maintitle: 'AMP interactive devient e’motion',
    paragraph:
      'Le show va bientôt se poursuivre sur cette nouvelle plateforme web! Restez connectés.',
  },
};

const languages = {
  english,
  français,
};
console.log(languages);

const currentLanguage = 'français';
localStorage.setItem('language', JSON.stringify(currentLanguage));
const links = [
  { name: languages[currentLanguage].guaranteeItems['maintitle'] },
  { name: languages[currentLanguage].guaranteeItems['paragraph'] },
];

const murkUp = links.reduce((acc, item) => {
  acc += `<li><p class="guarantee__title">${item.name}</a></li>`;
  return acc;
}, '');

document.querySelector('.guarantee__list').innerHTML = murkUp;
