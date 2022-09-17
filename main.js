let button = document.getElementById("button");
let num = document.querySelectorAll(".num");
// console.log(button);
// console.log(num);

button.onclick = function(){
        button.classList.toggle("left");
if(button.classList.contains("left")){
    // console.log("true");
    num.forEach(function(e, index){
        if(index === 0){
            // console.log(e);
            e.innerHTML ="$199.99";
            
        }else if (index === 1){
            e.innerHTML = "$249.99";
            // console.log(e);
        }else{
            e.innerHTML = "$399.99";
            // console.log(e);
        }        
    })
}else{
    num.forEach(function(e, index){
        if(index === 0){
            // console.log(e);
            e.innerHTML = "$19.99";
        }else if (index === 1){
            e.innerHTML = "$24.99";
            // console.log(e);
        }else{
            e.innerHTML = "$39.99";
            // console.log(e);
        }        
    })
}
       
    }


 
    
let learn = document.querySelectorAll(".learn");
// console.log(learn);

let box = document.querySelectorAll(".box");
// console.log(box);



learn.forEach(function(e){
    

    e.onclick = function(){
        
        box.forEach(function(ele){
            ele.classList.remove("active");
        })
        
    // console.log(e.parentElement); 
    e.parentElement.classList.add("active");  
    }
    
})



