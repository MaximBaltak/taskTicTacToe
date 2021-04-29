let overlay=document.querySelector('.overlay'),
    go=document.querySelector('.go'),
    blocks=document.querySelector('.wap'),
    choice=document.querySelector('.choice'),
    pointsUser=document.querySelectorAll('.points')[0],
    pointsBot=document.querySelectorAll('.points')[1],
    bloksBot=document.querySelectorAll('.block')
    let info=document.querySelector('.information')

let valueUser
let valueBot

choice.addEventListener('click',e=>{
    let target=e.target
    if(target.textContent==='X'){
        valueUser='X'
        valueBot='O'
        overlay.style.display='none'
    }else if(target.textContent==='O'){
        valueUser='O'
        valueBot='X'
        overlay.style.display='none'
    }

})

let botBlocks=(b)=>{
    let arr=Array.from(bloksBot)
   let emptyBlocks=arr.filter(el=>el.innerHTML==='')

    let element=Math.floor(Math.random()*(emptyBlocks.length-1)+1)
    setTimeout(()=>{emptyBlocks.forEach((el,i)=>{
        if(element===i+1){
            el.innerHTML=`<p>${valueBot}</p>`
        }
    })},1000)

}
let check=()=>{

    if(bloksBot[0].innerHTML===bloksBot[1].innerHTML){
        if (bloksBot[1].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''

            })

            return true
        }else {
            go.innerHTML=`<p>Bot победил</p>`
            go.style.animation='go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else if(bloksBot[3].innerHTML===bloksBot[4].innerHTML===bloksBot[5].innerHTML){
        if (bloksBot[3].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''

            })
            return true
        }else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else if(bloksBot[0].innerHTML===bloksBot[4].innerHTML===bloksBot[8].innerHTML){
        if (bloksBot[0].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else if(bloksBot[2].innerHTML===bloksBot[4].innerHTML===bloksBot[6].innerHTML){
        if (bloksBot[2].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else if(bloksBot[0].innerHTML===bloksBot[1].innerHTML===bloksBot[2].innerHTML){
        if (bloksBot[0].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else if(bloksBot[3].innerHTML===bloksBot[4].innerHTML===bloksBot[5].innerHTML){
        if (bloksBot[3].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else if(bloksBot[6].innerHTML===bloksBot[7].innerHTML===bloksBot[8].innerHTML){
        if (bloksBot[6].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else if(bloksBot[0].innerHTML===bloksBot[3].innerHTML===bloksBot[6].innerHTML){
        if (bloksBot[0].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else if(bloksBot[1].innerHTML===bloksBot[4].innerHTML===bloksBot[7].innerHTML){
        if (bloksBot[1].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else if(bloksBot[2].innerHTML===bloksBot[5].innerHTML===bloksBot[8].innerHTML){
        if (bloksBot[2].innerHTML===`<p>${valueUser}</p>`){
            go.innerHTML=`<p>Вы победили!</p>`
            go.style.animation='go 6s ease alternate'
            pointsUser.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsBot.textContent+='1'
            bloksBot.forEach(el=>{
                el.innerHTML=''
            })
            return true
        }
    }else{
        return false
    }
}

blocks.addEventListener('click',e=>{
    let target=e.target
    target.innerHTML=`<p>${valueUser}</p>`
    info.style.opacity='0'
    if(!check()) {
        botBlocks(target)
        check()
        setTimeout(() => {
            info.style.opacity = '1'
        }, 1000)
    }
    go.style.animation=''
})


