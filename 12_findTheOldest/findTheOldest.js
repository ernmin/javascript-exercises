const findTheOldest = function(arr) {
    let highest = 0;
    let currentPerson = null;
    const todayDate = new Date();
    arr.forEach(function(person){
        let hasyearOfDeath = person.hasOwnProperty("yearOfDeath");
        if (!hasyearOfDeath){
            let currentAge = todayDate.getFullYear() - person.yearOfBirth;
            if (currentAge > highest){
                currentPerson = person;
                highest = currentAge;
            }
        }
        else if ((person.yearOfDeath - person.yearOfBirth) > highest){
            currentPerson = person;
            highest = person.yearOfDeath - person.yearOfBirth;
        }
    });
    return currentPerson;
                
    

    //try using reduce, only return a value if it is greater than the previous greatest, else don't return
};

// Do not edit below this line
module.exports = findTheOldest;
