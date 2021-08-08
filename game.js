

function letsCheck(){
    let answers= document.querySelectorAll('.visible input');
    isChecked(answers);
}

function isChecked(list){
    for(let i=0; i<list.length;i++){
        if(list[i].checked&&(list[i].value=='false')){
            falseAnswer();
            
        }else if(list[i].checked&&(list[i].value=='true')){
            trueAnswer();
        }
    }
    
}

function trueAnswer(){
    let questions=document.querySelectorAll('.question');
    
    let visible= isVisible(questions);
    
    for(let i=0; i<questions.length;i++){
        questions[i].classList.replace('visible','unseen');
        
    }
    if(visible+1==questions.length){
        window.open('heaven.html','_self')
    }else{
        questions[visible+1].classList.replace('unseen','visible');
    }
    
}
function isVisible(list){
    for(let i=0; i<list.length;i++){
        if(list[i].classList.contains('visible')){
            return i;
        }
    }
}

function falseAnswer(){
    window.open('hell.html','_self')
}