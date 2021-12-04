var lastScrollTop = 1000;
const navbar = document.getElementById('nav');
navbar.classList.toggle("ativo");
window.addEventListener("scroll" , () => {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.bottom = "-80px";
    navbar.classList.toggle("ativo");
  }else{
    navbar.style.bottom = "0px";
  }
  lastScrollTop = scrollTop;
})