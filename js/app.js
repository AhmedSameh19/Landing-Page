//Data
const navList = document.querySelector("#navbar__list");
const sections = Array.from(document.querySelectorAll("section"));


//My Functions

//Making the navigation bar
function navBar() {
    for (sec of sections) {
        let Li = document.createElement("li");
        Li.innerHTML = `<a href="#${sec.id}" class="menu__link " data-nav="${sec.id}">${sec.dataset.nav}</a>`;
        navList.appendChild(Li);
    }
}
navBar();
//adding animation when the section appear
window.onscroll = function() {
    document.querySelectorAll("section").forEach(function(active) {
        if (active.getBoundingClientRect().top > -400 && active.getBoundingClientRect().top <= 270) {
            active.classList.add("your-active-class");
            addActiveClass(active.id)

        } else {
            active.classList.remove("your-active-class");
        }
    });
}

//adding smoot scroll to the section clicked 
navList.addEventListener("click", (sec) => {
    
    sec.preventDefault();
    
    document.getElementById(sec.target.dataset.nav).scrollIntoView({
        behavior: "smooth",
    });
    addActiveClass(sec.target.dataset.nav)
    
})
//adding a background to the active link section

    function addActiveClass(id){
        
        document.querySelector(".link-active")?.classList.remove("link-active");
        document.querySelector(`[href="#${id}"]`).classList.add("link-active");
        
    }
   
   

//end of the functions
