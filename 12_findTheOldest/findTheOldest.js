const findTheOldest = function(array) {

    const ages = array.map((person) => {
        if (person.yearOfDeath == undefined) {
            let currentDate = new Date()
            return {name: person.name, age: currentDate.getFullYear() - person.yearOfBirth}
        } else {
            return {name: person.name, age: person.yearOfDeath - person.yearOfBirth}
        }
    })

    return ages.reduce((oldest, current) => {
        if (oldest.age < current.age) {
            return current
        } else {
            return oldest
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
