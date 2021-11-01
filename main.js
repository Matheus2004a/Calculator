function insertValues(num) {
    const inputNumbers = document.querySelector("input").value
    document.querySelector("input").value = inputNumbers + num.replace("\/", "÷")
}

function calculateValues() {
    const inputNumbers = document.querySelector("input").value
    document.querySelector("input").value = eval(inputNumbers.replace("÷", "\/"))
}

const btnInvertValue = document.querySelector(".fraction")
btnInvertValue.addEventListener("click", () => {
    calculateValues()
    const inputNumbers = document.querySelector("input").value
    document.querySelector("input").value = inputNumbers * -1
})

const btnClearInput = document.querySelector(".clear")
btnClearInput.addEventListener("click", () => {
    document.querySelector("input").value = ""
})

const inputNumbers = document.querySelector("input")
const calculator = document.querySelector("section")
const buttonsCalculator = document.querySelectorAll(".item")
const iconsChangeTheme = document.querySelector(".icons")

const iconLightMode = document.querySelector(".icon-light-mode")
iconLightMode.addEventListener("click", changeLightMode)
function changeLightMode() {
    inputNumbers.classList.remove("darkMode")
    calculator.classList.remove("darkMode")
    iconsChangeTheme.classList.remove("darkMode")
    iconLightMode.classList.remove("active")
    iconDarkMode.classList.remove("active")

    for(let button of buttonsCalculator){
        button.classList.remove("darkMode")    
    }
}

const iconDarkMode = document.querySelector(".icon-dark-mode")
iconDarkMode.addEventListener("click", changeDarkMode)
function changeDarkMode() {
    inputNumbers.classList.add("darkMode")
    calculator.classList.add("darkMode")
    iconsChangeTheme.classList.add("darkMode")
    iconLightMode.classList.add("active")
    iconDarkMode.classList.add("active")

    for(let button of buttonsCalculator){
        button.classList.add("darkMode")    
    }
}