let displayBoard = document.getElementById("display-board");


function display(num){
    displayBoard.value  += num; 
}



function calculate(){
    try{
        displayBoard.value = eval(displayBoard.value);
    }
    catch(mistake){
        alert('Hi...\nPlease enter a valid number or arithmetic sign');
    }
}



function deleteAll(){
    displayBoard.value = '';
}


function del(){
    displayBoard.value = displayBoard.value.slice(0, -1);
}