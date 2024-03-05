var links=document.querySelectorAll('.links');

links.forEach(link=>{
    link.addEventListener('click',function(){
        link.classList.add('active');
    })
})


document.addEventListener("DOMContentLoaded",function(){
    const expandArrow=document.getElementById("expand-arrow");
    const itemList=document.querySelector('.item-list');
    const changeBgcolor=this.querySelector('right-container-part3');

    expandArrow.addEventListener('click',function(){

        if(itemList.style.display==="none"){
            itemList.style.display="block";
          
        }else{
            itemList.style.display="none";
        }
});
});