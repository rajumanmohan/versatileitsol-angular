import { NumberOnlyDirective } from './directives/number';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { AmChartsModule } from 'amcharts3-angular2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PortfolioInnerComponent } from './portfolio-inner/portfolio-inner.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { DirectordetailsComponent } from './components/directordetails/directordetails.component';
import { DirectorsComponent } from './components/directors/directors.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ServicesComponent } from './components/services/services.component';
import { UiUxDesignComponent } from './components/ui-ux-design/ui-ux-design.component';
import { AlMasaoodComponent } from './portfolio/al-masaood/al-masaood.component';
import { DhukanComponent } from './portfolio/dhukan/dhukan.component';
import { DineroComponent } from './portfolio/dinero/dinero.component';
import { EvexproComponent } from './portfolio/evexpro/evexpro.component';
import { GatiComponent } from './portfolio/gati/gati.component';
import { GohostelComponent } from './portfolio/gohostel/gohostel.component';
import { GoodtimesComponent } from './portfolio/goodtimes/goodtimes.component';
import { IndiaCmeComponent } from './portfolio/india-cme/india-cme.component';
import { KoachKonnectComponent } from './portfolio/koach-konnect/koach-konnect.component';
import { LohaComponent } from './portfolio/loha/loha.component';
import { MahaliComponent } from './portfolio/mahali/mahali.component';
import { MywayCarComponent } from './portfolio/myway-car/myway-car.component';
import { QuestComponent } from './portfolio/quest/quest.component';
import { SamathaComponent } from './portfolio/samatha/samatha.component';
import { SandalsComponent } from './portfolio/sandals/sandals.component';
import { SeeWheelersComponent } from './portfolio/see-wheelers/see-wheelers.component';
import { SolistaComponent } from './portfolio/solista/solista.component';
import { SuwaahComponent } from './portfolio/suwaah/suwaah.component';
import { TripcareComponent } from './portfolio/tripcare/tripcare.component';
import { UcodComponent } from './portfolio/ucod/ucod.component';
import { MobileAppDevelopmentComponent } from './services/mobile-app-development/mobile-app-development.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import swal from 'sweetalert';
// import swal from 'SweetAlert';
// import swal from 'sweetalert2';
// import {HttpClientModule}
import Swal from 'sweetalert2'
import { NgxSpinnerModule } from 'ngx-spinner';

import { WebDevelopmentComponent } from './services/web-development/web-development.component';
import { UiUxComponent } from './services/ui-ux/ui-ux.component';
import { DigitalMarketingComponent } from './services/digital-marketing/digital-marketing.component';
import { EnterpriceSolutionsComponent } from './services/enterprice-solutions/enterprice-solutions.component';
import { IotComponent } from './services/iot/iot.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ItConsultingComponent } from './services/it-consulting/it-consulting.component';
import { TechSupportComponent } from './services/tech-support/tech-support.component';
import { CareersComponent } from './careers/careers.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AiAndMlComponent } from './services/ai-and-ml/ai-and-ml.component';
import { ServicesApiComponent } from './services-api/services-api.component';
import { CommonModule } from '@angular/common';
import { VortexComponent } from './portfolio/vortex/vortex.component';
import { UcarsComponent } from './portfolio/ucars/ucars.component';
import { DigitakComponent } from './portfolio/digitak/digitak.component';
import { GreenconComponent } from './portfolio/greencon/greencon.component';
import { CoFounderComponent } from './components/co-founder/co-founder.component';
import { Giftcode4uComponent } from './portfolio/giftcode4u/giftcode4u.component';
// import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DirectorsComponent,
    ServicesComponent,
    DirectordetailsComponent,
    UiUxDesignComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioInnerComponent,
    IndustriesComponent,
    GatiComponent,
    MywayCarComponent,
    DineroComponent,
    GohostelComponent,
    DhukanComponent,
    TripcareComponent,
    UcodComponent,
    GoodtimesComponent,
    AlMasaoodComponent,
    EvexproComponent,
    IndiaCmeComponent,
    KoachKonnectComponent,
    LohaComponent,
    MahaliComponent,
    QuestComponent,
    SamathaComponent,
    SandalsComponent,
    SeeWheelersComponent,
    SolistaComponent,
    SuwaahComponent,
    MobileAppDevelopmentComponent,
    AboutusComponent,
    WebDevelopmentComponent,
    UiUxComponent,
    DigitalMarketingComponent,
    EnterpriceSolutionsComponent,
    IotComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    ItConsultingComponent,
    TechSupportComponent,
    CareersComponent,
    AiAndMlComponent,
    ServicesApiComponent,
    VortexComponent,
    UcarsComponent,
    DigitakComponent,
    GreenconComponent,
    CoFounderComponent,
    Giftcode4uComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AmChartsModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    HttpClientModule,
    // MatPaginatorModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: [{ page: '', title: "Versatile IT Solutions | Mobile & Web App Development company in Dubai", description: "Versatile IT Solutions - A renowned software development company in Dubai, UAE. We provide full-fledged IT Services across the globe.", keywords: "Best IT Company in Dubai, List of IT Companies in Dubai, Best Software Development Company in Dubai, Software Development Company, Web Design & Development Company, E-Commerce Solution, Website Design, SEO Services in UAE." }] },

      { path: 'board-of-directors', component: DirectorsComponent, data: [{ page: 'board-of-directors', title: "Versatile IT Solutions | Come join us and explore a better future", description: "Versatile IT Solutions, app creator, app builder, android app development, app developer, mobile app development, web design, website builder, ui ux designer.", keywords: "how to make a website, e commerce website, best website design, create a website, how to design a website, web design company, ecommerce website, web developer, web development company, website design company, android app maker." }] },

      { path: 'services', component: ServicesComponent, data: [{ page: 'services', title: "Best Software Solutions and Services for these industries - Versatile IT Solutions", description: "Versatile IT Solutions extends its services to all the major industries. Our motive is to provide you with the best suitable solutions and services without limiting ourselves.", keywords: "Mobile apps, web apps, artificial intelligence, machine learning, deep learning, enterprise app development, android apps, ios apps, IoT apps, digital marketing, hybrid apps, ionic apps, google AdWords, Facebook ads, SMM, SEM, SEO, SMO." }] },

      { path: 'srinivas-mogilipala', component: DirectordetailsComponent, data: [{ page: 'srinivas-mogilipala', title: "About our Founder and Managing Director | Srinivas Mogilipala", description: "Srinivas Mogilipala is the Founder and Managing Director of Versatile Mobitech located in Hyderabad, India. Versatile Mobitech was started in 2012 a vision to be a comprehensive solution for companies of all sizes.", keywords: "Young Entrepreneur, best CEO, Top CEO in India, Best start-up" }] },

      { path: 'ui-ux-design', component: UiUxDesignComponent, data: [{ page: 'ui-ux-design', title: "Best UX and UI Designing company in Dubai | Versatile IT Solutions", description: "We offer unique and world-class designing solutions matching customer’s business strategies and requirements. Focused on a collaborative approach, our team understands the customer's needs to deliver business value.", keywords: "User experience design, user interface design, UX and UI, web design, application design, website design, interactive prototypes, wireframe design, application flow, mockup design, logo design, functionality, workflow" }] },

      { path: 'contact', component: ContactComponent, data: [{ page: 'contact', title: "Versatile IT Solutions | Custom Software development company in UAE", description: "Versatile IT Solutions, Mobile and Web Application Development a range of services including custom UI/UX design, Digital marketing (SEO) and so on.", keywords: "app creator, app builder, android app development, app developer, mobile app development company, web design, website design, website builder, website maker, responsive web design, ux design, ui ux designer, mobile apps, app icons, screen shot app, graphics design app." }] },

      { path: 'portfolio', component: PortfolioComponent, data: [{ page: 'portfolio', title: "Versatile IT Solutions | A glimpse of the projects handled", description: "Versatile IT Solutions assure you to provide the perfect software development services which provides the best solutions among the top of software firms. ", keywords: "Best IT Company in Dubai, List of IT Companies in Dubai, Best Software Development Company in UAE, Software Development Company, Web Design & Development Company, Web Development Company, E-Commerce Solution, SEO and SEM Services Dubai UAE." }] },

      { path: 'portfolio-inner', component: PortfolioInnerComponent, data: [{ page: 'portfolio-inner', title: "", description: "", keywords: "" }] },

      { path: 'industries', component: IndustriesComponent, data: [{ page: 'industries', title: "Versatile IT Solutions | A glimpse of industries we’ve worked with", description: "Versatile IT Solutions extends its services to all the major industries. Our motive is to provide you with the best suitable solutions and services without limiting ourselves.", keywords: "mobile application development in Dubai, website development in Malaysia, online website development, website development , and design, what is website development, WordPress website, web development company, WordPress website development" }] },

      { path: 'logistics-app-gati', component: GatiComponent, data: [{ page: 'logistics-app-gati', title: "Logistics application | Gati | Versatile IT Solutions Portfolio", description: "Mobile Application designed for shipping your goods or bike from college to home or vice versa, moving valuable art pieces, sending gifts to your loved ones or need a logistics partner for all your business requirements.", keywords: "courier delivery tracking, express courier tracking, courier tracking app, gati kwe courier tracking, best package tracking, parcel delivery apps, logistics app, logistics app development, logistics app development company, delivery logistics app, transportation app development" }] },

      { path: 'car-pooling-app-mywaycar', component: MywayCarComponent, data: [{ page: 'car-pooling-app-mywaycar', title: "Carpooling mobile app | MyWaycar |  Versatile IT Solutions portfolio", description: "The Application is to provide services and operate the carpooling facility. In order to use the services, each member must create a user account and provide related information requested by My way car.", keywords: "rideshare application, ride-sharing app development, carpooling app design, ride-sharing app cost, design a ride-sharing application, ride-sharing android app" }] },

      { path: 'ecommerce-webapp-dinero', component: DineroComponent, data: [{ page: 'ecommerce-webapp-dinero', title: "Ecommerce Web application | Dinero | Versatile IT Solutions Portfolio", description: "Dinero Website is based on eCommerce which sells iPhone Cases , Dinero brand specialized in designing, creating, and selling iPhone Cases. The brand provides high-end cases that come in exceptional designs.", keywords: "eCommerce development services, eCommerce web application, eCommerce software development company, best eCommerce apps 2018, online shopping site development, eCommerce mobile app builder Dubai." }] },

      { path: 'hotel-booking-app-gohostel', component: GohostelComponent, data: [{ page: 'hotel-booking-app-gohostel', title: "Hotel Booking Mobile application | Go Hostel | Versatile IT Solutions Portfolio", description: "This App helps you in finding the right choice of stay at your comfort. Either you prefer to stay in a hostel, service apartments, or as a paying guest the security, comfort, as well as affordability matters a lot. ", keywords: "hotel reservation application, hotel booking app development company, how to create a hotel booking website, cab booking application, hotel booking app development company in Dubai" }] },

      { path: 'ecommerce-grocery-webapp-dhukan', component: DhukanComponent, data: [{ page: 'ecommerce-grocery-webapp-dhukan', title: "E-commerce Grocery application | Dhukan | Versatile IT Solutions Portfolio", description: "Dhukan is an E-commerce application to Shop anytime over online, anywhere from a vast range of products including farm-fresh fruits and vegetables, groceries, home & household essentials, etc.,", keywords: "grocery app development cost, grocery app development company UAE, online grocery app developers, local grocery delivery app development, grocery delivery application development,delivery app developers" }] },

      { path: 'trip-management-tripcare', component: TripcareComponent, data: [{ page: 'trip-management-tripcare', title: "End to end transport solutions | Tripcare | Versatile IT Solutions portfolio", description: "TripCare is a mobile application providing end to end solution for daily trips. IT offers products to corporates, schools and individual cab owners.", keywords: "transport app developers, mobile app for transportation, app logistics, logistics app development company" }] },

      { path: 'driver-booking-app-ucod', component: UcodComponent, data: [{ page: 'driver-booking-app-ucod', title: "Driver Booking Application | UCOD | Versatile IT Solutions portfolio", description: "This app is developed to book your driver on an hourly basis anytime and anywhere. We bring you the easiest possible way to book a driver and pay as you use.", keywords: "driver on demand app, on demand driver service app, driver on hire app, Drivers on Demand app, on demand driver app, car driver service app development, drive my car app development, driver hire app development, driver on demand app development, driver on hire app development, driver services app development, Drivers on Demand app development, on demand driver app development, on demand driver services app development, rent a driver app development" }] },

      { path: 'movie-booking-app-goodtimes', component: GoodtimesComponent, data: [{ page: 'movie-booking-app-goodtimes', title: "Movie Booking Application | GoodTimes | Versatile IT Solutions portfolio", description: "Goodtimes application is definitely a one-stop destination for all your ticketing and entertainment shows. Movie shows, plays or comedy shows, music concerts for Malaysia Goodtimes is the best and latest place to check for movies and cinemas around you.", keywords: "online movie ticket booking, booking app design, movie ticket booking wordpress theme, how to make an app like bookmyshow, movie ticket booking script" }] },

      { path: 'automotive-experience-app-al-masaood', component: AlMasaoodComponent, data: [{ page: 'automotive-experience-app-al-masaood', title: "Automotive Info Application | Al Masaood | Versatile IT Solutions portfolio", description: "Al Masaood Auto offers a wide range of facilities to its customers. If you are buying a new car, you can compare different aspects of the particular model of your choice. The customers get to choose color compare specifications, interior, exterior, accessories, and their prices", keywords: "automotive app development, mobile apps for automotive industry, automobile apps in UAE, automotive apps" }] },

      { path: 'event-management-app-evexpro', component: EvexproComponent, data: [{ page: 'event-management-app-evexpro', title: "Event Organising application | EvexPro | Versatile IT Solutions portfolio", description: "Evex Pro, an app from Emm Dee Inc, is an end-to-end solution for the companies and individuals who want to organize, both corporate and public, Events or Exhibitions.", keywords: "event management solutions app, social event planning app, project management software app developers, event management software development company" }] },

      { path: 'medical-event-booking-indiacme', component: IndiaCmeComponent, data: [{ page: 'medical-event-booking-indiacme', title: "Doctor facilitation application  | IndiaCME | Versatile IT Solutions portfolio", description: "India-CME platform facilitates a doctor to save his important records such as registration certificates, participation documents , etc.,", keywords: "Mobile app development, web development, website design, website development company, web design, software development, mobile app development, android mobile app development, ios apps development, Enterprise app development, IoT, Artificial Intelligence, Machine learning" }] },

      { path: 'educational-app-koach-konnect', component: KoachKonnectComponent, data: [{ page: 'educational-app-koach-konnect', title: "Educational application | koach konnect | Versatile IT Solutions portfolio", description: "Koach Konnect is a web application which unites trainers and students under one platform for online courses and training. It facilitates video calling features and slot booking also.", keywords: "on demand tutor app development , tuition app development, tutor app development, tutor finder app development, tutoring app developers" }] },

      { path: 'online-marketplace-loha', component: LohaComponent, data: [{ page: 'online-marketplace-loha', title: "Online marketplace | Loha | Versatile IT Solutions portfolio", description: "Loha App is used to Trade materials like all types of ferrous scrap, TMT, billets & ingots, All types of nonferrous scrap & ingots, Ferroalloys Coal, all types coke, ore and minerals.", keywords: "marketplace mobile app development, online marketplace for services app, olx like app development, quikr like app development company" }] },

      { path: 'retail-sales-platform-mahalli', component: MahaliComponent, data: [{ page: 'retail-sales-platform-mahalli', title: "Retail and wholesale Marketplace | Mahalli | Versatile IT Solutions portfolio", description: "Mahalli connects all retail and wholesale outlets in the Kingdom of Bahrain. bridging the digital gap between customers and shopping outlets of various sectors.", keywords: "grocery app development cost, grocery app development company Dubai, online grocery app developers, local grocery delivery app development, grocery delivery application development,delivery app developers" }] },

      { path: 'social-media-app-questi', component: QuestComponent, data: [{ page: 'social-media-app-questi', title: "Social Media Application | Questi | Versatile IT Solutions portfolio", description: "Questi is a social media application that seeks to deliver authentic and first-person interaction between a user and his/followers.", keywords: "Social media app development, social networking app development company, mobile app development company, web app development company in malaysia" }] },

      { path: 'health-care-app-samatha', component: SamathaComponent, data: [{ page: 'health-care-app-samatha', title: "Health care Application | Samatha | Versatile IT Solutions portfolio", description: "A statewide initiative to empower various stakeholders at all levels to take action in aiding children to lead a healthy and positive future.", keywords: "health app development company, healthcare mobile app development company, medical app development company, healthcare app development services, app development companies, health app design, create a medical app, medical app development company" }] },

      { path: 'ecommerce-mobilepp-sandal', component: SandalsComponent, data: [{ page: 'ecommerce-mobilepp-sandal', title: "Ecommerce Application | Sandal | Versatile IT Solutions portfolio", description: "Sandals is Middle East’s Largest Online Arabic Sandal Destination, All Arabic Sandal Lovers can now shop for the latest Arabic Sandal on the move! Products Available for both men & women", keywords: "eCommerce development services, eCommerce web application, eCommerce software development company, best eCommerce apps 2018, online shopping site development, eCommerce mobile app builder dubai" }] },

      { path: 'social-media-app-seewheelers', component: SeeWheelersComponent, data: [{ page: 'social-media-app-seewheelers', title: "Social Media Application | Seawheelers | Versatile IT Solutions portfolio", description: "SEE stands for ‘Social’, ‘Economical’ and ‘Environmental’ (considered to be the three pillars of sustainability) that together form the basis for this product/service. The objective of creating an online sustainability footprint is to produce and deliver ‘impact’.", keywords: "Social media app development, social networking app development company, mobile app development company, web app development company in Sweden" }] },

      { path: 'ecommerce-webapp-solista', component: SolistaComponent, data: [{ page: 'ecommerce-webapp-solista', title: "Ecommerce web application | Solista | Versatile IT Solutions portfolio", description: "The brand provides high-end caps that come in exceptional designs and special editions which are being manufactured in state of the art factories abroad.", keywords: "eCommerce development services, eCommerce web application, eCommerce software development company, best eCommerce apps 2018, online shopping site development, eCommerce mobile app builder dubai" }] },

      { path: 'travel-booking-suwaah', component: SuwaahComponent, data: [{ page: 'travel-booking-suwaah', title: "Travel Booking Application | Suwaah | Versatile IT Solutions portfolio", description: "Suwaah is set to redefine how people in the Middle East travel, by going beyond the functional and generic services any other online travel agency offers. ", keywords: "travel software development company, bus reservation system project in android, ticket booking app template, travel website development services, travel portal development solution, travel technology company in usa, travel portal development company in delhi" }] },

      { path: 'services/mobile-applications', component: MobileAppDevelopmentComponent, data: [{ page: 'services/mobile-applications', title: "Versatile IT Solutions | Mobile Application Development Company in Dubai", description: "Best Mobile Application Development Company in Dubai offers Creative mobile apps around the World. Get what you need. Email Us: info@versatileitsol.com.", keywords: "Best IT Company in Dubai, List of IT Companies in Dubai, Best Software Development Company in UAE, Software Development Company, Web Design & Development Company, Web Development Company, E-Commerce Solution company in Dubai UAE." }] },

      { path: 'about-us', component: AboutusComponent, data: [{ page: 'about-us', title: "Versatile IT Solutions | Mobile and Web Application Development company", description: "We are one of the top IT services provider in Dubai, UAE. We also have a happy clientele in Dubai and around the world.", keywords: "Best IT Company in Dubai, List of IT Companies in Dubai, Best Software Development Company in UAE, Software Development Company, Web Design & Development Company, Web Development Company, E-Commerce Solution, SEO and SEM Services Dubai UAE." }] },

      { path: 'services/web-development', component: WebDevelopmentComponent, data: [{ page: 'services/web-development', title: "Versatile IT Solutions | Web Design and Development Company in Dubai", description: "Best Web Development Company in Dubai offers Creative Website Designs around the World. Get what you need. Email Us: info@versatileitsol.com.", keywords: "Best IT Company in Dubai, List of IT Companies in Dubai, Best Software Development Company in UAE, Software Development Company, Web Design & Development Company, Web Development Company, E-Commerce Solution company in Dubai UAE." }] },

      { path: 'services/ux-ui-design', component: UiUxComponent, data: [{ page: 'services/ux-ui-design', title: "Versatile IT Solutions | UX and UI Development company in Dubai", description: "We provide best User Experience and User Interface design and development services in Dubai. UX and UI design and development company in Dubai.", keywords: "app creator, app builder, android app development, app developer, mobile app development company, web design, website design, website builder, website maker, responsive web design, ux design, ui ux designer, mobile apps, app icons, graphics design app, ui design, design apps." }] },

      { path: 'services/digital-marketing-and-seo', component: DigitalMarketingComponent, data: [{ page: 'services/digital-marketing-and-seo', title: "Versatile IT Solutions | SEO, SMM, SMO & SEM Company in Dubai", description: "We are one of the top SEO, SEM, SMO, SMM Service provider in Dubai. We also have a happy clientele in Dubai and around the world.", keywords: "seo, digital marketing, what is seo, social media marketing, marketing agency, online advertising, marketing strategies, marketing companies, Best IT Company in Dubai, List of IT Companies in Dubai, Best Software Development Company in UAE, Software Development Company, Web Design & Development Company, Web Development Company, E-Commerce Solution company in Dubai UAE." }] },

      { path: 'terms-and-conditions', component: TermsAndConditionsComponent, data: [{ page: 'terms-and-conditions', title: "Versatile IT Solutions | IT services Provider | Terms and Conditions", description: "By using this website, you agree to be bound by all of the statements set forth along with the terms stated in 'Terms and Conditions'.", keywords: "mobile apps, app icons, graphics design app, UI design, design apps, website design in Dubai, website development company, web design, software development website, software development, mobile app development, android mobile app development." }] },

      { path: 'privacy-policy', component: PrivacyPolicyComponent, data: [{ page: 'privacy-policy', title: "Versatile IT Solutions | Software Company | Privacy Policy", description: "The issue of online privacy is extremely crucial for Versatile IT solutions which is committed to safeguarding the information provided by its members and other visitors logging on to its Web site.", keywords: "mobile apps, app icons, graphics design app, UI design, design apps, website design in Dubai, website development company, web design, software development website, software development, mobile app development, android mobile app development." }] },

      { path: 'services/it-consulting', component: ItConsultingComponent, data: [{ page: 'services/it-consulting', title: "Versatile IT Solutions | IT Consulting services Company in Dubai", description: "Versatile IT Solutions is the Best IT staffing Consultancy in Dubai. Providing best Recruitment Services to  IT industries among all leading consultancies in Dubai.", keywords: "It consulting, it services, job consultancy, List of mobile apps development companies, best mobile apps development companies, top mobile apps development companies, best mobile apps development company, top mobile apps development company." }] },

      { path: 'services/tech-support', component: TechSupportComponent, data: [{ page: 'services/tech-support', title: "Versatile IT Solutions | Tech Support services in Dubai, UAE", description: "Versatile IT Solutions provides 24/7 Call Support on Products Annual Maintenance Contract, Domain and Hosting Maintenance, Play store and App store Maintenance.", keywords: "mobile app development, android app development company, mobile app development services, mobile application development, android app development services, mobile app development company, software development services, custom software development." }] },

      { path: 'career', component: CareersComponent, data: [{ page: 'career', title: "Versatile IT Solutions | Come join us and explore a better future", description: "Versatile IT Solutions is the right platform where you work together with some of the most proficient employees in a friendly and comfortable environment.", keywords: "web application development company,software development company,custom software development services,ios app development company,react native app development company,mobile application development services,angular websites." }] },

      { path: 'services/internet-of-things', component: IotComponent, data: [{ page: 'services/internet-of-things', title: "Internet of Things solutions services provider in Dubai | Versatile IT Solutions", description: "Versatile IT Solutions’s  IoT-as-a-service enables businesses to adopt right IoT strategy and redefine their relationships with customers by delivering innovative solutions.", keywords: "IoT concepts, IoT projects, IoT Development company, IoT application ideas, IoT mobile apps, IoT software development, IoT software companies, IoT applications, IoT development company, IoT web apps, IoT home applications, IoT enterprise apps" }] },

      { path: 'services/enterprise-solutions', component: EnterpriceSolutionsComponent, data: [{ page: 'services/enterprise-solutions', title: "Enterprise application Development company in Dubai | Versatile IT Solutions ", description: "Versatile IT Solutions is one of the top enterprise Mobile and Web app development companies in UAE offers agile development services in your time-zone.", keywords: "Enterprise app development, enterprise software development, school management app, hospital management app, hotel management app, facility management, enterprise mobility, business solutions, enterprise Mobility Consulting Services" }] },

      { path: 'vortex', component: VortexComponent, data: [{ page: 'vortex', title: "", description: "", keywords: "" }] },
      { path: 'Ucars', component: UcarsComponent, data: [{ page: 'Ucars', title: "", description: "", keywords: "" }] },
      { path: 'Digitak', component: DigitakComponent, data: [{ page: 'Digitak', title: "", description: "", keywords: "" }] },
      { path: 'Greenconnexion', component: GreenconComponent, data: [{ page: 'Greenconnexion', title: "", description: "", keywords: "" }] },
      { path: 'rama-mogilipala', component: CoFounderComponent, data: [{ page: 'rama-mogilipala', title: "", description: "", keywords: "" }] },
      { path: 'giftcode4u', component: Giftcode4uComponent, data: [{ page: 'giftcode4u', title: "", description: "", keywords: "" }] },
      { path: 'services/ml-and-ai', component: AiAndMlComponent, data: [{ page: 'services/ml-and-ai', title: "Machine learning & Artificial Intelligence services in Dubai | Versatile IT Solutions", description: "Versatile IT Solutions is the most trusted company, offering cutting-edge development services in Machine learning, Artificial Intelligence, Data Science, and Deep learning.", keywords: "AI in Banking and Finance, AI in Healthcare, AI in Retail, AI in Marketing and Sales, ML in Banking and Finance, ML in Healthcare, ML in Retail, ML in Marketing and Sales, Data  , Big Data, Deep learning." }] }

    ], { useHash: false, scrollPositionRestoration: 'disabled' })

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
