function start () {
    const images = document.querySelectorAll('#carousel div')
    const right = document.querySelector('.right')
    const back = document.querySelector('.back')

    let imgNum = 0

    back.onclick = (clicked) => {
        images[imgNum].classList.toggle('hiden')

        if (imgNum > 0) {
            images[--imgNum].classList.toggle('hiden')
        } else {
            imgNum = (images.length - 1)
            images[imgNum].classList.toggle('hiden')
        }
    }

    right.onclick = () => {
        images[imgNum].classList.toggle('hiden')

        if (imgNum < (images.length - 1)) {
            images[++imgNum].classList.toggle('hiden')
        } else {
            images[imgNum = 0].classList.toggle('hiden')
        }
    }
}
document.addEventListener('DOMContentLoaded', start)