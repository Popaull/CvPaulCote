//NAVABAR
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop =
    window.pageYOffset || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});


//tete

let balls = document.getElementsByClassName('yeux1');





window.addEventListener("mousemove", (e)=>{
  let x = e.clientX *100/window.innerWidth+ "%"
  let y = e.clientY *100/window.innerHeight+ "%"

  for (let i  = 0; i <2; i++){
    balls[i].style.left=x
    balls[i].style.top=y
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
    
  }
  
})

// TYPED
var typed3 = new Typed(".typed", {
  strings: [
    "",
    "Hey c'est Paul ! Je suis passioné par tout ce qui concerne l'informatique . Je suis jeune ,   j'apprend  vite , Patient et traivailleur  .",
  ],
  typeSpeed: 15,
  backSpeed: 0,
  smartBackspace: true, // this is a default
  loop: false,
});
//AOS

AOS.init();


// nav bar 

const nav = document.querySelector("nav");
const navPos = nav.getBoundingClientRect();
const sections = document.querySelectorAll("section");
const paul = document.getElementById("paul");
const lg = document.getElementById("lg");
const parcours = document.getElementById("nParcours");
const Projet= document.getElementById("nProjet");


const a = "active"


 window.onscroll = (e)=>{
  console.log(sections[2].getBoundingClientRect().bottom);
   if (sections[2].getBoundingClientRect().bottom > 1000 )
   
   {
     paul.classList.add(a)
     lg.classList.remove(a)
     parcours.classList.remove(a)
     Projet.classList.remove(a)
   }
   
   else if (sections[2].getBoundingClientRect().bottom < 1000 & 
   sections[2].getBoundingClientRect().bottom > -100){
    lg.classList.add(a)
    paul.classList.remove(a)
    parcours.classList.remove(a)
    Projet.classList.remove(a)

   }

   else if (sections[2].getBoundingClientRect().bottom < -100 & 
   sections[3].getBoundingClientRect().bottom > -2000){
    lg.classList.remove(a)
    paul.classList.remove(a)
    parcours.classList.add(a)
    Projet.classList.remove(a)
   }
   else if (sections[3].getBoundingClientRect().bottom < -2000
   ){
    lg.classList.remove(a)
    paul.classList.remove(a)
    parcours.classList.remove(a)
    Projet.classList.add(a)
   }
 }
