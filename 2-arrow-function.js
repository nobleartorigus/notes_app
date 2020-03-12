/*
const square = function (x) {
    return x * x
}

*/

/*
const square = (x) => {
    return x * x
}
*/

const square = (x) => x * x

console.log(square(3))

const event = {
    name: 'Birthay party',
    guestList: ['Pedro', 'Paco', 'Juan'],
    printGuestList() {
        console.log('Gues List for ' + this.name)

        this.guestList.forEach(element => {
            console.log(element + ' is attending ' + this.name)            
        })
    }
}

event.printGuestList()