let entry = document.getElementById("entry")
let counter = document.getElementById("counter")
let count = 0

function countclick() {
    count += 1
    counter.textContent = count
}

function save() {
    let countStr = count + " - "
    entry.textContent += countStr
    counter.textContent = 0
    count = 0
}


