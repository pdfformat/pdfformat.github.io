(function(){
  var menu=document.querySelector('.menu-toggle'), nav=document.getElementById('site-nav');
  if(!menu||!nav)return;
  document.documentElement.classList.add('js');
  var small=window.matchMedia('(max-width: 800px)');
  function reset(){nav.hidden=small.matches;menu.setAttribute('aria-expanded','false');}
  menu.addEventListener('click',function(){var open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.hidden=open;});
  small.addEventListener?small.addEventListener('change',reset):small.addListener(reset);
  reset();
}());
