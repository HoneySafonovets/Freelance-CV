const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
  if (nav.classList.toggle('nav-list-open')) {
    navBtnImg.src = './assets/Mobile/NAV CLOSE.svg'
    document.body.classList.add('hidden')
  } else {
    navBtnImg.src = './assets/Mobile/NAV.svg'
    document.body.classList.remove('hidden')
  }
}