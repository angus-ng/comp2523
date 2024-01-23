import { faker } from "@faker-js/faker";

export class Internship {
    businessName: string = "";
    location: google.maps.LatLngLiteral = {lat:0, lng:0};

    constructor(businessName: string, location: google.maps.LatLngLiteral) {
        this.businessName = businessName;
        this.location = location;
    }
}

let myInternship = new Internship("Jane Doe Shoe Warehouse", {lat:faker.number.int({ min: 49, max: 60 }),lng: faker.number.int({ min: -139, max: -114 })});

export { myInternship };