/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections=document.querySelectorAll('section');
const docFrag=document.createDocumentFragment();
/**
 * End Global Variables
 * 
*/

// Build menu
for(let i=0;i<sections.length;i++){
  let names=document.createElement('a');  
  const taps=document.createElement('li');
    names.href="#"+sections[i].getAttribute('id');
    names.innerText=sections[i].getAttribute('data-nav');
    names.style.textDecoration="none";
    names.style.color= "black";
    taps.style.padding="15px"; 
    taps.style.float="left";
    
// style for seleting taps when moving on them
    taps.addEventListener('mousemove',function linksActiveState(){
        names.style.color="white";
        taps.style.backgroundColor="gray";
      });
      taps.addEventListener('mouseout',function linksActiveState(){
        names.style.color="black";
        taps.style.backgroundColor="white";
      });

// Scroll to section on link click
      taps.addEventListener('click',function scrollToSection(e){
         e.preventDefault();
         sections[i].scrollIntoView({behavior:"smooth", block:"center"});
      });

// build the nav
    taps.appendChild(names);
    docFrag.appendChild(taps);
};
document.getElementById('navbar__list').appendChild(docFrag); 

// Add class 'active' to section when near top of viewport
function toggleActiveState(){
const callback=(inputs)=>{ 
      if (inputs[0].isIntersecting) {
        sections.forEach(sec => {
            if(sec.classList.contains("your-active-class")){
                sec.classList.remove("your-active-class");
                inputs[0].target.classList.add("your-active-class");
               
            }
      });
    };
};
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };
  sections.forEach((section)=>{
  let observer = new IntersectionObserver(callback, options);
   observer.observe(section);
  });
};
// Set sections as active
 window.addEventListener('scroll',toggleActiveState);