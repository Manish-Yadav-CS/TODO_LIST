let btn = document.querySelector("button");
let inp=document.querySelector("input");
let ul= document.querySelector("ul");


btn.addEventListener("click", function(){
    let item= document.createElement("li");
    item.innerText=inp.value;
    
    let del= document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");

    item.appendChild(del);



    ul.appendChild(item);
    inp.value="";
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName=='BUTTON'){
        let listitem= event.target.parentElement;
        let usermood = prompt("Are you really want to delete this item ?");

        if(usermood == 'yes'){
            listitem.remove();
        console.log("Intem deleted");
        }
        else{
            console.log("Item was not deleted.");
        }
        
    };

    
})