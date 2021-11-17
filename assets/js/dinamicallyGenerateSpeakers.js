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

function htmlSpeakersTemplate(index) {
  return `
  <div class="row">
    <div class="col-4">
      <img src="${index.speaker_image}" alt="profile" class="img-fluid">
    </div>
    <div class="col-8">
      <p class="text-justify text-lato text-dark mb-0" style="font-size: 20px;">
      ${index.name}
      </p>
      <p class="text-justify text-lato text-magenta" style="font-size: 15px;">
      ${index.position}
      </p>
      <p class="mt-4 text-justify text-lato text-dark" style="font-size: 10px;">
      ${index.description}
      </p>
    </div>
  </div>`;
}

allcontent.forEach((element) => {
  const dinContent = document.createDocumentFragment();
  const newDiv = document.createElement('div');
  newDiv.className = 'col-12 col-md-6 p-3';
  newDiv.innerHTML = htmlSpeakersTemplate(element);
  dinContent.appendChild(newDiv);
  document.getElementById('speakers-container').appendChild(dinContent);
});