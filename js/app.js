//Data
const navList=document.querySelector("#navbar__list");
const sections=Array.from(document.querySelectorAll("section"));

//My Functions

//Making the navigation bar
function navBar(){
    for(sec of sections){
        Li=document.createElement("li");
        Li.innerHTML=`<a href="#${sec.id}" class="menu__link" data-nav="${sec.id}">${sec.dataset.nav}</a>`;
        console.log(Li)
        navList.appendChild(Li);
    }
}
navBar();
//adding animation when the section appear
window.onscroll=function(){
    document.querySelectorAll("section").forEach(function(active){
        if(active.getBoundingClientRect().top>-400 && active.getBoundingClientRect().top <=270){
            active.classList.add("your-active-class");
        }
        else{
            active.classList.remove("your-active-class");
        }
    });
}

 