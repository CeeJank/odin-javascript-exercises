function getAge(birth, death) {
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people = people.reduce((oldPerson, youngPerson) => {
        const oldAge = getAge(oldPerson.yearOfBirth, oldPerson.yearOfDeath);
        const youngAge = getAge(youngPerson.yearOfBirth, youngPerson.yearOfDeath);

        return oldAge < youngAge ? youngPerson : oldPerson;
    });  

    
    
};

// Do not edit below this line
module.exports = findTheOldest;
