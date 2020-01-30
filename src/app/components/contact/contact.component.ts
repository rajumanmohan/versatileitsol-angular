import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VmServicesService } from './../../api-Services/vm-services.service';
import { Component, OnInit, AfterContentInit, AfterViewChecked, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common'
// import {VmServicesService}
// constructor(private location: Location) {}
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {HttpClient}
import { AmChartsService } from "amcharts3-angular2";
// import swal from 'sweetalert2';

// import swal from 'sweetalert2';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  load;
  mapDiv;
  loc;
  captchaValue;
  captchaTExt;
  Name;
  Phone;
  Email;
  Subject;
  message;
  alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];
  // this.loc = location.reload()
  //   constructor(private route: ActivatedRoute,private router:Router ,  public location: Location) {
  //     // window.location.reload();
  // if(this.location.path()=='/contact'){

  // }
  //    }
  registerForm: FormGroup;
  submitted = false;
  constructor(private AmCharts: AmChartsService, private vmService: VmServicesService, private http: HttpClient, private formBuilder: FormBuilder) {
    window.scroll(0, 0);

  }

  private chart: any;


  ngOnInit() {
    window.scroll(0, 0);

    // captcha
    let emptyArr = [];
    for (let i = 1; i <= 7; i++) {
      emptyArr.push(this.alphaNums[Math.floor(Math.random() * this.alphaNums.length)]);
    }
    this.captchaTExt = emptyArr.join('');

    // this.chart = this.AmCharts.makeChart("chartdiv", {

    var map = this.AmCharts.makeChart("chartdiv", {

      // var map = AmCharts.makeChart("chartdiv", {
      type: "map",
      // type : 'chart',
      "theme": "light",
      pathToImages: "https://www.amcharts.com/lib/3/images/",

      imagesSettings: {
        rollOverColor: "#919191",
        rollOverScale: 3,
        selectedScale: 3,
        selectedColor: "#919191",
        color: "#919191"//#13564e"
      },

      zoomControl: {
        buttonFillColor: "#919191"
      },

      areasSettings: {
        unlistedAreasColor: "#919191"
      },

      dataProvider: {
        map: "worldLow",
        // chart : 'worldLow',
        images: [
          {
            imageURL: 'assets/images/contact/india.png',
            title: "INDIA <br>Versatile Mobitech Private Limited <br> 3rd Floor, Modern Profound <br> Tech Park, Hyderabad-500032",
            latitude: 17.3626444,
            longitude: 78.3615559,
            width: 30,
            height: 36
          },
          {
            imageURL: 'assets/images/contact/sweden.png',
            title: "Sweden <br>Versatile Mobitech Private Limited",
            latitude: 61.7525806,
            longitude: 8.442219,
            width: 30,
            height: 36
          },
          {
            imageURL: 'assets/images/contact/dubai.png',
            title: "Dubai <br>Versatile Mobitech IT Solutions <br> Office No 1307, Metropolis Tower <br> Burj Khalifa Street, Business Bay, Dubai <br> Phone:+9 71554734707 <br>Email: sales@versatilemobitech.com",
            latitude: 25.0757073,
            longitude: 54.9475612,
            width: 30,
            height: 36
          },
          {
            imageURL: 'assets/images/contact/malesia.png',
            title: "Malesia <br>Versatile Mobitech Private Limited",
            latitude: 4.1389158,
            longitude: 105.1219589,
            width: 30,
            height: 36
          },
          {
            imageURL: 'assets/images/contact/us.png',
            title: "United States <br>Versatile Mobitech Private Limited",
            latitude: 36.2507966,
            longitude: -113.6933438,
            width: 30,
            height: 36
          }
        ]
      }
    });


    map.addListener("positionChanged", updateCustomMarkers);

    // this.chart.addListener("positionChanged", updateCustomMarkers);


    function updateCustomMarkers(event) {
      // get map object
      var map = event.chart;

      //  this.chart = event.chart;

      // go through all of the images
      for (var x in map.dataProvider.images) {
        // get MapImage object
        // var image = this.chart.dataProvider.images[x];

        var image = map.dataProvider.images[x];

        // check if it has corresponding HTML element
        if ('undefined' == typeof image.externalElement)
          image.externalElement = createCustomMarker(image);

        // reposition the element accoridng to coordinates
        image.externalElement.style.top = map.latitudeToY(image.latitude) + 'px';
        image.externalElement.style.left = map.longitudeToX(image.longitude) + 'px';
      }
    }


    function createCustomMarker(image) {
      // create holder
      var holder = document.createElement('div');
      holder.className = 'map-marker';
      holder.title = image.title;
      holder.style.position = 'absolute';

      // maybe add a link to it?
      if (undefined != image.url) {
        holder.onclick = function () {
          window.location.href = image.url;
        };
        holder.className += ' map-clickable';
      }

      // create dot
      var dot = document.createElement('div');
      dot.className = 'dot';
      holder.appendChild(dot);

      // create pulse
      var pulse = document.createElement('div');
      pulse.className = 'pulse-One';
      holder.appendChild(pulse);

      // append the marker to the map container
      image.chart.chartDiv.appendChild(holder);

      return holder;
    }
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.minLength(10)]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      toemail: ['versatilemobitech@gmail.com']
    });

  }
  refreshCaptcha() {
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
      refreshArr.push(this.alphaNums[Math.floor(Math.random() * this.alphaNums.length)]);
    }
    this.captchaTExt = refreshArr.join('');
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else if (this.captchaValue != this.captchaTExt) {
      Swal.fire("Please enter valid capcha", "", "error");
    }
    else {
      this.refreshCaptcha();
      this.vmService.getData(this.registerForm.value).subscribe(res => {
        this.submitted = false;
        this.registerForm.reset();
        Swal.fire("Success", "", "success");
      })
    }
  }
  send() {
    var obj = {
      name: this.Name,
      email: this.Email,
      phone_number: this.Phone,
      subject: this.Subject,
      message: this.message,
      // toemail: "versatilemobitech@gmail.com"
      toemail: "versatilemobitech@gmail.com"
    }
    if (this.Name === undefined || '' || null ||
      this.Email === undefined || '' || null ||
      this.Phone === undefined || '' || null ||
      this.Subject === undefined || '' || null ||
      this.captchaValue === undefined || '' || null ||
      this.message === undefined || '' || null
    ) {
      Swal.fire("Required fields are missing", "", "error");
    } else if (this.captchaValue != this.captchaTExt) {
      Swal.fire("Please enter valid capcha", "", "error");
    } else {
      this.refreshCaptcha();
      Swal.fire("Success", "", "success");
      this.Name = this.Email = this.Phone = this.Subject = this.captchaValue = this.message = '';
      this.vmService.getData(obj).subscribe(res => {
      })
    }
  }
}
