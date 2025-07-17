
/*=============== SHOW MENU ===============*/
const menu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu_links');
const links = document.querySelectorAll('.menu_links a');

//toggle menu on click
menu.addEventListener('click', (event) => {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
    event.stopPropagation();
});

//close menu when click outside
document.addEventListener('click', (event) => {
    if (menu.classList.contains('active') && 
    !menu.contains(event.target) && 
    !menuLinks.contains(event.target)){
        menu.classList.remove('active');
        menuLinks.classList.remove('active');
    }
});
//close menu after clicking a link
links.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuLinks.classList.remove('active');
    })
})

/*=============== PORTFOLIO SECTION ===============*/
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.filter_btn');
    const timelineItems = document.querySelectorAll('.timeline_item');
    const timelineContainer = document.querySelector('.timeline');
    
    //add event listener to filter button
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute('data-category');
            //reset all timeline items and add active/inactive class based on category
            timelineItems.forEach(item => {
                if(category === "all" || item.classList.contains(category)){
                    item.classList.add('active');
                    item.classList.remove('inactive');
                } else {
                    item.classList.remove('active');
                    item.classList.add('inactive');
                }
            });
            //scroll to top of container to focus on active category
            timelineContainer.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    //trigger the animation when the page loads
    setTimeout(() => {
        timelineItems.forEach(item => {
            item.classList.add("active");
        });
    }, 100);
});
/*=============== SHOW SCROLL UP ===============*/ 
const backtoTopButton = document.querySelector(".backtoTop");
window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        backtoTopButton.classList.add("show");
    } else {
        backtoTopButton.classList.remove("show");
    }
});
backtoTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const revealElements = document.querySelectorAll("[data-reveal]");
const scrollReveal = function(){
    for (let i = 0; i < revealElements.length; i++){
        const elementsonScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;
        if(elementsonScreen){
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
}
window.addEventListener("scroll", scrollReveal);
scrollReveal();