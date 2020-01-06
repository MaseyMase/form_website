/**  X
var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");

ourList.addEventListener("click", activateItem )        

function activateItem() {
    ourHeadline.innerHTML = this.innerHTML;
        for (i = 0; i< listItems.length; i++) {
        listItems[i].classList.remove("active");    
    }
    this.classList.add("active");
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li>Something new " + newItemCounter +" </li>"; 
    newItemCounter++;
}



ourList.addEventListener("click", activateItem )        

function activateItem() {
    ourList;
}


document.getElementById('button').addEventListener('click',function() {
    document.getElementById('change').style.display = 'block';




document.getElementById('button').addEventListener('click',function() {
    document.getElementsByClassName('card1').style.display = 'block';
})


var elems = document.getElementsByClassName('button');
for (var i=0;i<elems.length;i++){
  elems[i].style.display = 'block';
}

*/



 document.getElementById('button').addEventListener('click',function() {
    var elems = document.getElementsByClassName('card1');
    for (var i=0;i<elems.length;i++){
      elems[i].style.display = 'block';
    }})


    document.getElementById('button-appear').addEventListener('click',function() {
        var elems = document.getElementsByClassName('card1');
        for (var i=0;i<elems.length;i++){
          elems[i].style.display = 'none';
        }})
    
