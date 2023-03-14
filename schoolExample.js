class School {
    constructor(name, level, numberOfStudents) {
        this._name = name
        this._level = level
        this._numberOfStudents = numberOfStudents
    }
    get name() {
      return this._name
    }
    get level() {
      return this._level
    }
    get numberOfStudents() {
      return this._numberOfStudents
    }
    set setNumberOfStudents(newNumberOfStudents) {
      if(typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents
      } else {
        return 'Invalid input: numberOfStudents must be set to a Number.'
      }
    }
    quickFacts() {
      return `${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`
    }
    static pickSubstituteTeach(substituteTeachers) {
      let pickedTeacher = Math.floor(Math.random() * substituteTeachers.length)
      return substituteTeachers[pickedTeacher]
    }
  }
  
  const fitz = new School('Fitz', 'Secondary', 100);
  
  console.log(fitz)
  console.log(fitz.quickFacts());
  console.log(School.pickSubstituteTeach(['te', 'fe', 'he']))
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy() {
      return this._pickupPolicy
    }
  }
  
  class HighSchool extends School {
    constructor(name,numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents)
      this._sportsTeams = sportsTeams
    }
    get sportsTeams() {
      return this._sportsTeams
    }
  }
  
  const prim = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age 13.')
  
  console.log(prim)
  
  console.log(prim.quickFacts())
  
  console.log(School.pickSubstituteTeach(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  
  console.log(alSmith.sportsTeams)
  