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


big = $('#big')

smallScreenValue =""
bigScreenValue=""
bigScreen = $('#big-screen')
smallScreen = $('#small-screen')
root.addEventListener('click',tar)

function tar(e){
    key = e.target.classList
    if (smallScreen.value.indexOf('=')>-1){
        smallScreenValue=""
        smallScreen.value = ""
        bigScreenValue = ""
        bigScreen.value=""
    }
    if(key.value === "numbers"){
        bigScreenValue = bigScreenValue.concat("",e.target.innerText)
        bigScreen.value = bigScreenValue
        

    }else if (key.value === "operators"){
        
        smallScreenValue = smallScreenValue.concat("", bigScreenValue + e.target.innerText)
        smallScreen.value = smallScreenValue
        bigScreenValue=""
        bigScreen.value = ""
        if (e.target.innerText.indexOf('=')>-1){
            ans = eval(smallScreenValue.substr(0, smallScreenValue.length-1))
            bigScreen.value=ans
        }
            
           
       
    } else if (e.target.innerText.indexOf('del')>-1){
        log(bigScreenValue)
        if (bigScreenValue.length > 0){
            bigScreenValue = bigScreenValue.substr(0, bigScreenValue.length - 1)
            bigScreen.value=bigScreenValue
            log(bigScreenValue)
        } else{
            log('3')
            if (smallScreenValue.length > 0){
                smallScreenValue = smallScreenValue.substr(0, smallScreenValue.length-1)
                smallScreen.value = smallScreenValue
            }
        
        }


    } else if (e.target.innerText.indexOf('sqrt')>-1){
        smallScreenValue = smallScreenValue.concat("", bigScreenValue + '**0.5' )
        
        ans = eval(smallScreenValue)
        bigScreen.value=ans
        smallScreen.value = e.target.innerText + ' of ' + smallScreenValue.substr(0, smallScreenValue.length-5) +  '='

    }else if (e.target.classList.value.indexOf('clr')>-1){
        smallScreenValue=""
        smallScreen.value = ""
        bigScreenValue = ""
        bigScreen.value=""
    }
    return e.target
} 




