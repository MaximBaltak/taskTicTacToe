let overlay = document.querySelector('.overlay'),
    go = document.querySelector('.go'),
    blocks = document.querySelector('.wap'),
    choice = document.querySelector('.choice'),
    pointsUser = document.querySelectorAll('.points')[0],
    pointsBot = document.querySelectorAll('.points')[1],
    bloksBot = document.querySelectorAll('.block')
let info = document.querySelector('.information')
//создание музыки
let audio = new Audio()
audio.src = './audio/kr-love-me.mp3'
//событие для начала проигрования
document.addEventListener('click', () => {
    audio.play()
    audio.loop = true
})
// события для изменения громкости при движении колёсика мыши
document.addEventListener('wheel', e => {
    let delta = e.deltaY
    if (delta < 0) {
        if (audio.volume <= 0.1) {
            audio.volume = 0
        } else {
            audio.volume -= 0.1
            delta -= e.deltaY
        }

    } else if (delta > 0) {
        if (audio.volume >= 0.9) {
            audio.volume = 1
        } else {
            audio.volume += 0.1
            delta += e.deltaY
        }

    }
    console.log(audio.volume)
})
// нужные данные для работы логики
let valueUser
let valueBot
let pointsU = 0
let pointsB = 0
pointsUser.textContent = pointsU
pointsBot.textContent = pointsB
go.style.transform = 'translateX(-260px)'
info.style.opacity = '1'

//выбор игрока нолик или крестик
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
//анимация модально окна окончания
let animationGo = () => {

    if (go.style.transform === 'translateX(-260px)') {
        go.style.transform = 'translateX(1920px)'
    } else {
        go.style.transform = 'translateX(-260px)'
    }
}

//проверка на победу или ничью
let check = (value) => {
    if (bloksBot[1].innerHTML === `<p>${value}</p>` && bloksBot[4].innerHTML === `<p>${value}</p>` && bloksBot[7].innerHTML === `<p>${value}</p>`) {
        if (value === valueUser) {
            go.innerHTML = `<p>Вы победили!</p>`
            go.style.backgroundColor = '#6161e7'
            animationGo()
            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''

            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()
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
            go.style.backgroundColor = '#6161e7'
            animationGo()

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''

            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

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
            go.style.backgroundColor = '#6161e7'
            animationGo()

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

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
            go.style.backgroundColor = '#6161e7'
            animationGo()

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

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
            go.style.backgroundColor = '#6161e7'
            animationGo()
            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

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
            go.style.backgroundColor = '#6161e7'
            animationGo()

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

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
            go.style.backgroundColor = '#6161e7'
            animationGo()

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

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
            go.style.backgroundColor = '#6161e7'
            animationGo()

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

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
            go.style.backgroundColor = '#6161e7'
            animationGo()

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

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
            go.style.backgroundColor = '#6161e7'
            animationGo()

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

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
            go.style.backgroundColor = '#6161e7'
            animationGo()

            pointsU += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsUser.textContent = pointsU
            return true
        } else if (value === valueBot) {
            go.innerHTML = `<p>Bot победил</p>`
            go.style.backgroundColor = '#8d3939'
            animationGo()

            pointsB += 1
            bloksBot.forEach(el => {
                el.innerHTML = ''
            })
            pointsBot.textContent = pointsB
            return true
        }
    }
    let x = []
    bloksBot.forEach(el => {
        if (el.innerHTML === '') {
            x.push(el)
        }
    })
    if (x.length === 0) {
        go.innerHTML = `<p>Ничья</p>`
        go.style.backgroundColor = '#0b4c0b'
        animationGo()
        bloksBot.forEach(el => {
            el.innerHTML = ''
        })
        return true
    } else {
        return false
    }
}
//логика для компьютера
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
//процесс игры
blocks.addEventListener('click', e => {
    let target = e.target
    if (target.innerHTML === '') {
        if (info.style.opacity === '1') {

            target.innerHTML = `<p>${valueUser}</p>`
            info.style.opacity = '0'
            if (!check(valueUser)) {
                botBlocks(target)
                setTimeout(() => {

                }, 1000)
                setTimeout(() => {
                    check(valueBot)

                }, 1500)


            }
        }
    }
    setTimeout(() => {
        info.style.opacity = '1'
    }, 2000)


})


