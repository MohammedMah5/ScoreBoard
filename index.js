let score = 0
document.getElementById("hadd1").addEventListener('click' , ()=> {
    score += 1
    document.getElementById("score").textContent = score
})
document.getElementById("hadd2").addEventListener('click' , ()=> {
    score += 2
    document.getElementById("score").textContent = score
})
document.getElementById("hadd3").addEventListener('click' , ()=> {
    score += 3
    document.getElementById("score").textContent = score
})
let score2 = 0
document.getElementById("gadd1").addEventListener('click' , ()=> {
    score2 += 1
    document.getElementById("score2").textContent = score2
})
document.getElementById("gadd2").addEventListener('click' , ()=> {
    score2 += 2
    document.getElementById("score2").textContent = score2
})
document.getElementById("gadd3").addEventListener('click' , ()=> {
    score2 += 3
    document.getElementById("score2").textContent = score2
})
document.getElementById("reset").addEventListener('click' , ()=> {
    score = 0
    score2 = 0
    document.getElementById("score").textContent = score
    document.getElementById("score2").textContent = score2
})