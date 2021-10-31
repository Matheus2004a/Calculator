function insertValues(num) {
    const inputNumbers = document.querySelector("input").value
    document.querySelector("input").value = inputNumbers + num
}

function calculateValues() {
    const inputNumbers = document.querySelector("input").value
    document.querySelector("input").value = eval(inputNumbers)
}

const btnInvertValue = document.querySelectorAll("button")[1]
btnInvertValue.addEventListener("click", () => {
    calculateValues()
    const inputNumbers = document.querySelector("input").value
    document.querySelector("input").value = inputNumbers * -1
})

const btnClearInput = document.querySelectorAll("button")[0]
btnClearInput.addEventListener("click", () => {
    document.querySelector("input").value = ""
})