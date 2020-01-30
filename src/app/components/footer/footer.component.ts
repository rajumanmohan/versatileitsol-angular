import { Component, OnInit, NgModule, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VmServicesService } from './../../api-Services/vm-services.service';
import { AfterContentInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
// import { $ } from 'protractor';
declare var $;


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {

  captchaValue;
  captchaTExt;
  Name;
  Phone;
  Email;
  message;
  Subject;
  showSubscribe: boolean;
  sub_Email;
  alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];

  title = 'ngSlick';


  slides = [
    { img: "assets/images/footer-certificates/mobile_app_developers_2018.png", url: "https://clutch.co/profile/versatile-mobitech-0" },
    { img: "assets/images/footer-certificates/top-app-development-companies.png", url: "https://yourstory.com/mystory/2a1fc85af5-top-5-best-android-app" },
    { img: "assets/images/footer-certificates/appf.png", url: "https://www.appfutura.com/companies/versatile-mobitech-pvt-ltd" },

    { img: "assets/images/footer-certificates/goodfirms-app-development.png", url: "https://www.goodfirms.co/company/versatilemobitech-pvt-ltd" },


  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
  };

  addSlide() {
    // this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  constructor(private vmService: VmServicesService, private http: HttpClient) { }

  ngOnInit() {
    this.showSubscribe = true;

    // captcha
    let emptyArr = [];
    for (let i = 1; i <= 7; i++) {
      emptyArr.push(this.alphaNums[Math.floor(Math.random() * this.alphaNums.length)]);
    }
    this.captchaTExt = emptyArr.join('');
    $('#subscribeModal').modal('show');

  }



  refreshCaptcha() {
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
      refreshArr.push(this.alphaNums[Math.floor(Math.random() * this.alphaNums.length)]);
    }
    this.captchaTExt = refreshArr.join('');
  }

  send() {
    var obj = {
      name: this.Name,
      email: this.Email,
      phone_number: this.Phone,
      subject: this.Subject,
      message: this.message,
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
      Swal.fire("Success", "", "success");
      this.Name = this.Email = this.Phone = this.Subject = this.captchaValue = this.message = '';
      this.vmService.getData(obj).subscribe(res => {
      })
    }

  }
  subscribe() {
    var obj = {

      email: this.sub_Email,

    }

    Swal.fire("Success", "", "success");
    this.Name = this.Email = this.Phone = this.Subject = this.captchaValue = this.message = '';
    this.vmService.subscribe(obj).subscribe(res => {
      alert('hi')
    })
    // }
  }

}

