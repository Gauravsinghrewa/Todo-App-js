const inputbox=document.querySelector("input");
const Todolist=document.querySelector("ul");
const btn=document.querySelector("button");


   btn.addEventListener("click",function(){

    if(inputbox.value=== '')
    {
        alert("you must write text")
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        Todolist.appendChild(li);
        
        // let delets= document.createElement("button");
        // delets.innerText="Delete";
        // delets.classList .add("delete");
        // li.appendChild(delets)

        inputbox.value = '';
        let delets = document.createElement('button');
        delets.innerHTML= "\u00d7";
        delets.classList .add("delete");
        li.appendChild(delets)

       
    }
})


Todolist.addEventListener("click",function(event){
    // console.dir(event.target.nodeName);
    if(event.target.nodeName == "delete"){
        let listItem= event.target.parentElement;
        listItem.remove();

    }
 });

//  Todolist.addEventListener("click",function(event){
//             console.dir(event.target.nodeName);
//             if(event.target.nodeName == "BUTTON"){
//                 let listItem= event.target.parentElement;
//                 listItem.remove();
//                 console.log("delete");

//             }
//          });

