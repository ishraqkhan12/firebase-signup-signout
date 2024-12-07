let image = document.getElementById("retrievedImage");
console.log(image.src);  
let displayimage = document.getElementById("afterClick");
let box = document.getElementById("box");

box.style.display = "none";


image.addEventListener("click", function() {
 
    if (box.style.display === "none") {
        box.style.display = "flex";  
        displayimage.src = image.src;  
    } else {
        box.style.display = "none";  
        displayimage.src = "";  
    }
})

displayimage.src = image.src;





    