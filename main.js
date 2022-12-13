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
keyValue =[]
function tar(e){
    
    bigScreen = $('#big-screen')
    smallScreen = $('#small-screen')
    log(bigScreen, smallScreen)
    
    keyValue.push(e.target.innerText)
bigScreen.value = e.target.innerText
log(keyValue) 
if (e.target.innerText === '='){
    log(keyValue,"yes") 
}

 return e.target.innerText
 
}




