let Number = Math.floor(Math.random() * 13)
let Points = 5

document.body.innerHTML += Number
alert('Welkom bij hoger - lager')
alert('Als je 10 punten krijgt win je')

//dit is voor als je op de hoger knop klikt
function myFunction() {
    let myNumber = Math.floor(Math.random() * 13)
    if (Points <= 0) {
        alert('Je hebt geen punten meer.')
    } else if (Points >=10) {
        alert('Je hebt gewonnen')
    } else if (myNumber > Number) {
        Points = Points + 1
        myFunctionThree()
        alert('Je hebt het goed')
        document.body.innerHTML += myNumber
        document.body.innerHTML = document.body.innerHTML.replace(Number, ' ')
        Number = Math.floor(Math.random() * 13)
        document.body.innerHTML = document.body.innerHTML.replace(' ', Number)
    } else {
        Points = Points - 1
        myFunctionThree()
        alert('Je hebt het fout')
        document.body.innerHTML += myNumber
        document.body.innerHTML = document.body.innerHTML.replace(Number, ' ')
        Number = Math.floor(Math.random() * 13)
        document.body.innerHTML = document.body.innerHTML.replace(' ', Number)
    }
}

//dit is voor als je op de lager knop klikt
function myFunctionTwo() {
    let myNumber = Math.floor(Math.random() * 13)
    if (Points <= 0) {
        alert('Je hebt geen punten meer')
    } else if (Points >= 10) {
        alert('Je hebt gewonnen')
    } else if (myNumber < Number) {
        Points = Points + 1
        myFunctionThree()
        alert('Je hebt het goed')
        document.body.innerHTML += myNumber
        document.body.innerHTML = document.body.innerHTML.replace(Number, ' ')
        Number = Math.floor(Math.random() * 13)
        document.body.innerHTML = document.body.innerHTML.replace(' ', Number)
    } else {
        Points = Points - 1
        myFunctionThree()
        alert('Je hebt het fout')
        document.body.innerHTML += myNumber
        document.body.innerHTML = document.body.innerHTML.replace(Number, ' ')
        Number = Math.floor(Math.random() * 13)
        document.body.innerHTML = document.body.innerHTML.replace(' ', Number)
    } 
}

//dit haalt alle nummers weg
function myFunctionThree() {
    document.body.innerHTML = document.body.innerHTML.replace(Number, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(1, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(2, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(3, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(4, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(5, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(6, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(7, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(8, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(9, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(1, ' ')
    document.body.innerHTML = document.body.innerHTML.replace(0, ' ')
    document.body.innerHTML += Number
}