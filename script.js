let overlay = document.querySelector('.overlay'),
    go = document.querySelector('.go'),
    blocks = document.querySelector('.wap'),
    choice = document.querySelector('.choice'),
    pointsUser = document.querySelectorAll('.points')[0],
    pointsBot = document.querySelectorAll('.points')[1],
    bloksBot = document.querySelectorAll('.block')
let info = document.querySelector('.information')

let valueUser
let valueBot
let pointsU = 0
let pointsB = 0
pointsUser.textContent = pointsU
pointsBot.textContent = pointsB

choice.addEventListener('click', e => {
    let target = e.target
    if (target.textContent === 'X') {
        valueUser = 'X'
        valueBot = 'O'
        overlay.style.display = 'none'
    } else if (target.textContent === 'O') {
        valueUser = 'O'
        valueBot = 'X'
        overlay.style.display = 'none'
    }

})

let botBlocks = (block) => {
    let arr = Array.from(bloksBot)
    let emptyBlocks = arr.filter(el => el.innerHTML === '')

    let element = Math.floor(Math.random() * (emptyBlocks.length - 1) + 1)
    setTimeout(() => {
        emptyBlocks.forEach((el, i) => {
            if (element === i + 1) {
                el.innerHTML = `<p>${valueBot}</p>`
            }
        })
    }, 1000)


}
let check = (value) => {
    if (bloksBot[1].innerHTML === `<p>${value}</p>` && bloksBot[4].innerHTML === `<p>${value}</p>` && bloksBot[7].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''

            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[3].innerHTML === `<p>${value}</p>` && bloksBot[4].innerHTML === `<p>${value}</p>` && bloksBot[5].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''

            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1

            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[0].innerHTML === `<p>${value}</p>` && bloksBot[4].innerHTML === `<p>${value}</p>` && bloksBot[8].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[2].innerHTML === `<p>${value}</p>` && bloksBot[4].innerHTML === `<p>${value}</p>` && bloksBot[6].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[0].innerHTML === `<p>${value}</p>` && bloksBot[1].innerHTML === `<p>${value}</p>` && bloksBot[2].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'
            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[3].innerHTML === `<p>${value}</p>` && bloksBot[4].innerHTML === `<p>${value}</p>` && bloksBot[5].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[6].innerHTML === `<p>${value}</p>` && bloksBot[7].innerHTML === `<p>${value}</p>` && bloksBot[8].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[0].innerHTML === `<p>${value}</p>` && bloksBot[4].innerHTML === `<p>${value}</p>` && bloksBot[6].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[1].innerHTML === `<p>${value}</p>` && bloksBot[4].innerHTML === `<p>${value}</p>` && bloksBot[7].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[2].innerHTML === `<p>${value}</p>` && bloksBot[5].innerHTML === `<p>${value}</p>` && bloksBot[8].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else if (bloksBot[0].innerHTML === `<p>${value}</p>` && bloksBot[3].innerHTML === `<p>${value}</p>` && bloksBot[6].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.animation = 'go 6s ease alternate'

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    } else {
        return false
    }
}

blocks.addEventListener('click', e => {
    let target = e.target
    target.innerHTML = `<p>${valueUser}</p>`
    info.style.opacity = '0'
    if (!check(valueUser)) {
        botBlocks(target)
        setTimeout(() => {
            info.style.opacity = '1'
        }, 1000)
        let a = check(valueBot)
    }


})


