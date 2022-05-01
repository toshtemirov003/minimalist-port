const elHeaderNav = document.querySelector('.sitenav')
const elHeaderBtn = document.querySelector('.site-header__js-btn')

// site-header__nav--open

elHeaderBtn.addEventListener('click', () => {
  elHeaderNav.classList.toggle('sitenav--open')
})   