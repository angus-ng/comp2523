import { CustomizedMap } from "./CustomizedMap";
import { myInternship } from "./Internship";
import { myStudent } from "./Student";

declare global {
  interface Window {
    initMap: () => void;
  }
}

let map: google.maps.Map;
const center: google.maps.LatLngLiteral = {lat: 49, lng: -123};

window.initMap = function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 4
  });

  const markerMap = new CustomizedMap(map)
  markerMap.addInternshipMarker(myInternship);
  markerMap.addStudentMarker(myStudent);
}
