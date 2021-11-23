btn.addEventListener("click",fnc);
function fnc(){
    console.log(а.checked);
    console.log(б.checked);
    console.log(в.checked);
    console.log(г.checked);
    console.log(д.checked);
    if (б.checked){
        alert("Правильно!");
    } else {
        alert("Ошибка!");
    }
}