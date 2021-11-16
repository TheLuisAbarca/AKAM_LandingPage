const btnBars = document.getElementById('barsBtn');
const mobMenu = document.getElementsByClassName('mobMenu');
const closeIcon = document.getElementsByClassName('closeIcon');
const listEl = document.querySelectorAll('.mobMenu > ul > li');
const bodyel = document.querySelector('body');

btnBars.addEventListener('click', () => {
    mobMenu[0].style.display = 'flex';
    bodyel.style.overflow = 'hidden';
});
  
closeIcon[0].addEventListener('click', () => {
  mobMenu[0].style.display = 'none';
  bodyel.style.overflow = 'auto';
});

listEl.forEach((el) => {
  el.addEventListener('click', () => {
    mobMenu[0].style.display = 'none';
    bodyel.style.overflow = 'auto';
  });
});

const content01 = {
    name: 'Joselyn Mero',
    position: 'CEO',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    speaker_image: 'src/img/img_Placeholder.png',
};
const content02 = {
    name: 'Joselyn Mero',
    position: 'CEO',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    speaker_image: 'src/img/img_Placeholder.png',
};
const content03 = {
    name: 'Joselyn Mero',
    position: 'CEO',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    speaker_image: 'src/img/img_Placeholder.png',
};
const content04 = {
    name: 'Joselyn Mero',
    position: 'CEO',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    speaker_image: 'src/img/img_Placeholder.png',
};
const content05 = {
    name: 'Joselyn Mero',
    position: 'CEO',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    speaker_image: 'src/img/img_Placeholder.png',
};
const content06 = {
    name: 'Joselyn Mero',
    position: 'CEO',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    speaker_image: 'src/img/img_Placeholder.png',
};
const allcontent = [content01, content02, content03, content04];

function htmlWorksTemplate(index) {
}