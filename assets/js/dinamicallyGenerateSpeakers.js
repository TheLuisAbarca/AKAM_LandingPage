const content01 = {
  name: 'Joselyn Mero',
  position: 'CEO',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  speaker_image: 'assets/img/profile.png',
};
const content02 = {
  name: 'Ingrid Mero',
  position: 'CFO',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  speaker_image: 'assets/img/profile.png',
};
const content03 = {
  name: 'Ninoska Mero',
  position: 'COO',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  speaker_image: 'assets/img/profile.png',
};
const content04 = {
  name: 'Luis Abarca',
  position: 'CTO',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  speaker_image: 'assets/img/profile.png',
};
const content05 = {
  name: 'Arthas Menethil',
  position: 'CMO',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  speaker_image: 'assets/img/profile.png',
};
const content06 = {
  name: 'Jaina Proudmoore',
  position: 'President',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  speaker_image: 'assets/img/profile.png',
};
const allcontent = [content01, content02, content03, content04, content05, content06];
const basicNumberSpeakers = 2;
const windowSize = window.matchMedia('(max-width: 768px)');
const containerSpeakers = document.getElementById('speakers-container');
const moreBtn = document.querySelector('#tooglebutton');
let togglerMoreBtn = 'More';

function htmlSpeakersTemplate(index) {
  return `
    <div class="row">
      <div class="col-4">
        <img src="${index.speaker_image}" alt="profile" class="img-fluid">
      </div>
      <div class="col-8">
        <p class="text-justify text-lato text-dark mb-0 members1">
        ${index.name}
        </p>
        <p class="text-justify text-lato text-magenta mb-1 members2">
        ${index.position}
        </p>
        <p class="mt-sm-4 mt-md-4 text-justify text-lato text-dark members3">
        ${index.description}
        </p>
      </div>
    </div>`;
}

function generateSpeakers(functionToCall, index) {
  const dinContent = document.createDocumentFragment();
  const newDiv = document.createElement('div');
  newDiv.className = 'col-12 col-md-6 p-3';
  newDiv.innerHTML = functionToCall(index);
  dinContent.appendChild(newDiv);
  document.getElementById('speakers-container').appendChild(dinContent);
}

function BasicMobileSpeakers() {
  containerSpeakers.innerHTML = '';
  for (let i = 0; i < basicNumberSpeakers; i += 1) {
    generateSpeakers(htmlSpeakersTemplate, allcontent[i]);
  }
}

function showAll() {
  containerSpeakers.innerHTML = '';
  allcontent.forEach((element) => {
    generateSpeakers(htmlSpeakersTemplate, element);
  });
}

function generate() {
  if (windowSize.matches) {
    BasicMobileSpeakers();
  } else {
    showAll();
  }
}

window.addEventListener('load', generate);
window.addEventListener('resize', generate);

function showMoreAction() {
  for (let i = basicNumberSpeakers; i < allcontent.length; i += 1) {
    generateSpeakers(htmlSpeakersTemplate, allcontent[i]);
  }
}

function toggleMoreLess() {
  if (togglerMoreBtn === 'More') {
    showMoreAction();
    togglerMoreBtn = 'Less';
    moreBtn.innerHTML = 'Less <span> &#x2303;</span>';
  } else {
    BasicMobileSpeakers();
    togglerMoreBtn = 'More';
    moreBtn.innerHTML = 'More <span> &#x2304;</span>';
  }
}

moreBtn.addEventListener('click', toggleMoreLess);