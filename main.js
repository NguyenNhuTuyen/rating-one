const rating = document.querySelector('.rating')
const thanks = document.querySelector('.thanks')
const btn = document.querySelector('.btn')
const numbersRating = document.querySelectorAll('.number')
let star = 0;
var num = ''
btn.onclick = () => {
    rating.classList.add('hidden')
    thanks.classList.remove('hidden')
}

numbersRating.forEach((el, i) => {
    el.onclick = function() {
        document.querySelector('.active').classList.remove('active')
        this.classList.add('active')
        document.querySelector('#star-number').innerHTML = this.innerHTML
    }
    
}
)


