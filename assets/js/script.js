var headerAnchor = document.querySelectorAll('header ul a');
var headerSubmenu = document.querySelector('.nav-submenu');

headerAnchor.forEach(function(anchor){
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.nextElementSibling) {
      e.target.nextElementSibling.classList.toggle('active');
      e.target.classList.toggle('active');
      e.target.parentElement.nextElementSibling.classList.toggle('active');
    }
  })
})

//**************************************************//

var headerFormControl = document.querySelector('.header-form .input-control');

headerFormControl.addEventListener('click', function(e){
  this.previousElementSibling.classList.toggle('active');
})

//**************************************************//

var learnMoreButton = document.querySelectorAll('.section-learn-more a')

learnMoreButton.forEach(function(learnMore){
  learnMore.addEventListener('click', function(e){
    e.preventDefault();
    var learnMorePara = e.target.parentElement.previousElementSibling;
    
    if(learnMorePara.classList.contains('learn-more-para')) {
      learnMorePara.classList.toggle('active');
      e.target.classList.toggle('active');
      
      if(learnMorePara.classList.contains('active')) {
        e.target.innerHTML = 'learn less<span class="section-caret">caret</span>';
        var caret = e.target.children[0];
        caret.classList.add('active');
      }else {
        e.target.innerHTML = 'learn more<span class="section-caret">caret</span>';
      }
    }
  })
})

//**************************************************//

var menuToggle = document.querySelector('.menu-toggle');
var nav = document.querySelector('nav');
var html = document.querySelector('html');

menuToggle.addEventListener('click',function() {
  var bars = this.children;
  
  for(var bar of bars) {
    bar.classList.toggle('active');
  }

  nav.classList.toggle('active');
  html.classList.toggle('overflow-hidden');
})