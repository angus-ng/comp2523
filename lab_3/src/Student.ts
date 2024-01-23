import { faker } from "@faker-js/faker";

export class Student {
    firstName: string = "";
    lastName: string = "";
    location: google.maps.LatLngLiteral = {lat:0, lng:0};

    constructor(firstName: string, lastName: string, location: google.maps.LatLngLiteral){
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
    }
}

let myStudent = new Student(faker.person.firstName(), faker.person.lastName(), {lat: faker.number.int({ min: 49, max: 60 }),lng: faker.number.int({ min: -139, max: -114})});
//console.log(myStudent)
export { myStudent };