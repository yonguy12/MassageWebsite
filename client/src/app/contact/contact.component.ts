/// <reference types = "@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(47.5423595,-122.6374165),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };


  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  var marker = new google.maps.Marker({ position: mapProp.center });
  marker.setMap(this.map);

  // var infowindow = new google.maps.InfoWindow({
  //   content: ""
  // });
  //  infowindow.open(this.map, marker);
  }
}
