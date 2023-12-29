{/* <style>
    .btnstyle{
    }
</style> */}
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let inp=prompt("enter your task");
    if(inp!=null && inp.trim()!=="")
    {
        let item=document.createElement("li");
        item.innerText=inp;
        item.style.border='2px solid black';
        item.classList.add("d-flex");
        item.classList.add("justify-content-around");
        item.classList.add("mb-3")
        let dlt=document.createElement("button");
        dlt.classList.add("btn");
        dlt.innerText="DELETE";
        item.appendChild(dlt);
        ul.appendChild(item);
    }
});

ul.addEventListener("click",function(e){
    if(e.target.nodeName==="BUTTON")
    {
        let listitem=e.target.parentElement;
        listitem.remove();
    }
});