// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

const append = "je";
for (const name of names) {
    console.log(name + append)
}

// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const numbers = [2, 4, 5, 29, 38];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];

for (const number of numbers) {
    if(number%2 === 0) {
        console.log(number * 2)
    }
    else if(number%2 !== 0) {
        console.log(number * 3)
    }
}
console.log("\n")

// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array, het volume uitrekent.
// Het volume van een vierkant is Lengte x Breedte x Hoogte
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [a] is [b]"
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft:
// [
//   'Het volume van 30 is 27000',
//   'Het volume van 2 is 8',
//   'Het volume van 8 is 512',
//   'Het volume van 24 is 13824',
//   'Het volume van 11 is 1331'
// ]

for (const square of squares) {
    console.log("het volume van "+square+" = "+square**3)
}

