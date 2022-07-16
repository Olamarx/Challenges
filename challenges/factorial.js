function factorial(n) {
let store = 1

for (let i = n; i > 0; i--) {
    store = store * i
}
console.log(store)
}

factorial(5)