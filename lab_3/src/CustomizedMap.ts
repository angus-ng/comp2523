import { Student } from "./Student";
import { Internship } from "./Internship";

const iconBase = "http://maps.google.com/mapfiles/kml/pushpin/"

export class CustomizedMap {
    googleMap: google.maps.Map;
    
    constructor(map:google.maps.Map){
        this.googleMap = map;
    }

    private createListener(marker: google.maps.Marker) {
        const infoWindow = new google.maps.InfoWindow({
            content: "",
            disableAutoPan: true,
          });
        
          marker.addListener("click", () => {
            infoWindow.setContent(marker.getTitle());
            infoWindow.open(this.googleMap, marker);
          });
    }

    addStudentMarker(student: Student) {
        const markerStudent = new google.maps.Marker({
            position: student.location,
            map: this.googleMap,
            title: `${student.firstName} ${student.lastName}'s Location.`,
            icon: { url: iconBase + "wht-pushpin.png",
            scaledSize: new google.maps.Size(35,35) } ,
          });

          this.createListener(markerStudent);
    }

    addInternshipMarker(internship: Internship) {
        const markerInternship = new google.maps.Marker({
            position: internship.location,
            map: this.googleMap,
            title: `Welcome to ${internship.businessName}'s Internship!`,
            icon: { url: iconBase + "red-pushpin.png",
            scaledSize: new google.maps.Size(35,35) } ,
          });
          this.createListener(markerInternship);
    }
}