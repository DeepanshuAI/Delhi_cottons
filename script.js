
// Mobile Menu Toggle

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});





// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});






// Scroll Reveal Animation


const sections = document.querySelectorAll("section");


const reveal = () => {

    sections.forEach(section => {


        const sectionTop = section.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.2;



        if(sectionTop < screenPosition){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }


    });


};





// Initial hidden style

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

});





window.addEventListener("scroll", reveal);


reveal();






// Button click animation

const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {


    button.addEventListener("click", () => {


        button.style.transform="scale(.95)";


        setTimeout(()=>{

            button.style.transform="";

        },150);


    });


});
// PRODUCT FILTER


function filterProducts(category){


const products = document.querySelectorAll(".product");


products.forEach(product=>{


if(category==="all" || product.classList.contains(category)){


product.style.display="block";


}

else{


product.style.display="none";


}


});


}






// PRODUCT POPUP


function openProduct(title,desc){


document.getElementById("productTitle").innerHTML=title;


document.getElementById("productDesc").innerHTML=desc;


document.getElementById("productModal").style.display="flex";


}




function closeProduct(){


document.getElementById("productModal").style.display="none";


}
