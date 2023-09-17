let input= document.querySelector(".input")
let ul= document.querySelector(".ul")
console.log(input);

function ornate() {
    if (input.value == "") {
    alert("Please enter a value..!");
} else {
    let li =document.createElement("li");
    li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>` ;
     
    ul.appendChild(li);

    li.querySelector("i").addEventListener("click", deleteli);
    function deleteli() {
        li.remove();
    }
    
   
    
    input.value = ""; 
}
}