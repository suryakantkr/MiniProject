const btn=document.querySelector("button");
const inp=document.querySelector("input");
const ul=document.querySelector("ul");

btn.addEventListener("click",function(){
   let item=document.createElement("li");
   item.innerText=inp.value;

   let detbtn=document.createElement("button");
   detbtn.innerText="delete";
   detbtn.classList.add("delete");

   item.appendChild(detbtn);
   ul.append(item);
   inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("delete");
    }
});

