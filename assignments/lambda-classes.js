// CODE here for your Lambda Classes
class Person {

  constructor(facts) {

    this.name = facts.name;
    this.age = facts.age;
    this.location = facts.location;
    this.gender = facts.gender;

  }

  speak() {

    return `Hello my ${this.name} is Fred, I am from ${this.location}`;

  }

}

class Instructor extends Person {

  constructor(unique) {

    super(unique);
    this.specialty = unique.specialty;
    this.favLanguage = unique.favLanguage;
    this.catchPhrase = unique.catchPhrase;

  }

  demo(subject) {

    return `Today we are learning about ${super.demo(subject)}`;

  }


  grade(student, subject) {

    return `${student.name} receives a perfect score on ${super.grade(subject)}`;

  }

}

class Student extends Person {

  constructor(studentInfo) {

    super(studentInfo);
    this.previousBackground = studentInfo.previousBackground;
    this.className = studentInfo.className;
    this.favSubjects = studentInfo.favSubjects;

  }

  listsSubjects() {

    return `${this.favSubjects}`;

  }

  PRassignment(subject) {

    return `${student.name} has submitted a PR for ${super.PRassignment(subject)}`;

  }

  sprintChallenge(subject) {

    return `${student.name} has begun sprint challenge on ${super.sprintChallenge(subject)}`;

  }

}

class ProjectManagers extends Instructor {

  constructor(pmInfo) {

    super(pmInfo);
    this.gradClassName = pmInfo.gradClassName;
    this.favInstructor = pmInfo.favInstructor;

  }

  standUp() {

    return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`
    return `${this.name} debugs ${student.name}'s code on ${this.subject}`

  }

}
