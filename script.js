var slide = document.querySelectorAll(".slide");
var i = 0;


function hideAll () {
    Array.from(slide).forEach(element => {
        element.style.display = "none";    
    });    
};
function showAll () {
    Array.from(slide).forEach(element => {
        element.style.display = "inline-block";    
    });    
};



function slideShow () {
    hideAll();
    if (i > 3){
       i = 0;
    }; 
    slide[i].style.display = "block"; 
    i += 1;   
        
};

function slidethrough () {
    showAll();
    if (i > 3){
        i = 0;
     };
     slide[i].style.display = "none";
     i += 1;
};
if (screen.width > "480px") {
    setInterval(slideShow, 5000);
} else {
    setInterval(slidethrough, 3000);
};
