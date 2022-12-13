const $ = (elem,scope)=> (scope || document).querySelector(elem)
const $$ = (elem,scope)=> (scope || document).querySelectorAll(elem)
const log =(a,b,c)=> console.log(a,b,c)
const createElement = (parent, tag, className, content) => {
    elem = document.createElement(tag)
    if (className) elem.classList.add(className)
    if (content) elem.textContent= content
    // parent.appendChild(elem)
}
const addClass = (selector, className, scope) => {
    (scope || document).querySelector(selector).classList.add(className);
}

root.addEventListener('click',tar)
big = $('#big')

log(big.reset())
smallScreenValue =""
bigScreenValue=""
function tar(e){
    bigScreen = $('#big-screen')
    smallScreen = $('#small-screen')
    key = e.target.classList
    if (smallScreen.value.indexOf('=')>-1){
        log('working')
        smallScreenValue=""
        smallScreen.value = ""
    }
    if(key.value === "numbers"){
        bigScreenValue = bigScreenValue.concat("",e.target.innerText)
        bigScreen.value = bigScreenValue
        

    }else if (key.value !== "numbers"){
        bigScreen.value = ""
        smallScreenValue = smallScreenValue.concat("", bigScreenValue + e.target.innerText)
        bigScreenValue=""
        smallScreen.value = smallScreenValue
        log("===")   
        return 
    } else if((e.target.innerText === 'del')){
    // log(keyValue,"del") 
    return 
}

//  
 
}




