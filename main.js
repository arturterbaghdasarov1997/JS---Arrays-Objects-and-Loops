// User array
const users = [
    {name: 'Temo', age: '25'},
    {name: 'Lasha', age: '21'},
    {name: 'Ana', age: '28'},
]

// Function to find the name of the youngest user
function youngestUserName(users) {
    if (users.length === 0)
        return null

    let youngest = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngest.age) {
            youngest = users[i];
        }
    }

    return youngest.name;
}

console.log(youngestUserName(users));

// Function to create a new user object
const oldUser = {name: 'Lasha', age: '21'}
const newUser = differentUser(oldUser)

function differentUser(user) {
    return { ...user };
}

console.log(oldUser);
console.log(newUser);

console.log(oldUser === differentUser);

// Function for random dice game
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function startGame() {
    let aTries = 0;
    let bTries = 0;
    let aRolls, bRolls;

    do {
        aRolls = rollDice();
        aTries++;

        console.log("Player A rolled:", aRolls);

        if (aRolls === 3) {
            console.log("Player A wins with", aTries, "tries!");
            break;
        }

        bRolls = rollDice();
        bTries++;

        console.log("Player B rolled:", bRolls);

        if (bRolls === 3) {
            console.log("Player B wins with", bTries, "tries!");
            break;
        }

    } while (true);
}

startGame();
