//2nd way ) event handler property

let btn2 = document.querySelector(".clickthis")
btn2.onclick = ()=>{
    alert("hello sir")
}


// 3rd way for web devers / learners :- flexible and preferred way
// add event listner method
let submitBtn = document.querySelector(".submitBtn")
submitBtn.addEventListener("click",()=>{
    console.log("Clickeedddd")
})
// can add many events on one in this no overriding like b4 one

// event object -> it is a special object having inner self properties and methods -> which
// tells us in details about in which element even happening and its types

//eg:-

submitBtn.addEventListener("click",(e)=>{
    console.log(e.target) // on which element node event is happening /target
    console.log(e.type) // type of event
})



//
btnTheme = document.querySelector(".theme-btn")
def_theme_white = true

btnTheme.addEventListener("click",()=>{
    if (def_theme_white ){
        document.body.setAttribute("class","white")
        def_theme_white = false
    }else{
        document.body.setAttribute("class","dark")
        def_theme_white = true
    }
})