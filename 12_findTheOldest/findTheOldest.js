const findTheOldest = function(people) {

 return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(currentPerson);
    return oldestAge < currentAge ? currentPerson : oldest;
 });
  
};

const getAge = function(person){
  if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear;

  return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
