
let addbtn = document.getElementById('addbtn') ;
let clearbtn = document.getElementById('clearbtn') ;
let mylist = document.getElementById('mylist') ;

var todolistarray = [] ;

var clearlist = function(){
    todolistarray = []
    localStorage.removeItem('mylist') ;
    mylist.innerHTML = '' ;
}

clearbtn.addEventListener('click',clearlist) ;