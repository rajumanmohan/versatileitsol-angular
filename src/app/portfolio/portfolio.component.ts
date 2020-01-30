import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-portfolio',
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

	config: any;
	config1;
	config2;
	config3;
	collection = { count: 20, data: [] };

	constructor() {


		this.config = {
			itemsPerPage: 8,
			currentPage: 1,
			// totalItems: this.collection.count
		};
		this.config1 = {
			itemsPerPage: 8,
			currentPage: 1,
			// totalItems: this.collection.count
		};
		this.config2 = {
			itemsPerPage: 8,
			currentPage: 1,
			// totalItems: this.collection.count
		};
		this.config3 = {
			itemsPerPage: 8,
			currentPage: 1,
			// totalItems: this.collection.count
		};
	}

	pageChanged(event) {
		this.config.currentPage = event;
		window.scroll(0, 0);
	}
	pageChanged1(event) {
		this.config1.currentPage = event;
		window.scroll(0, 0);
	}
	pageChanged2(event) {
		this.config2.currentPage = event;
		window.scroll(0, 0);
	}
	pageChanged3(event) {
		this.config3.currentPage = event;
		window.scroll(0, 0);
	}
	resetPage() {
		this.config1.currentPage = 1;
		this.config2.currentPage = 1;
		this.config.currentPage = 1;
		this.config3.currentPage = 1;
		window.scroll(0, 0);
	}

	activeOne = true;
	activeWeb = false;
	activeAndroid = false;
	activeIos = false;
	showWebProjts = false;
	// data2 = [];
	WebData = [];
	AndroidData = [];
	IosData = [];
	showWebProjects = false;
	showAndroidProjects = false;
	showIosProjects = false;
	showOneItems = true;
	showTwoItems = false;
	showThreeItems = false;
	// data2 = []
	data2 = [
		{ id: 1, url: 'assets/images/portfolio/gati-bg.jpg', url1: 'assets/images/portfolio/gati-mobile.png', name: 'Gati', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/logistics-app-gati", playStoteLink: 'https://play.google.com/store/apps/details?id=com.gati.gaticonsumer&hl=en', appStoreLink: 'https://apps.apple.com/in/app/gaticonsumer/id995166307' },

		{ id: 2, url: 'assets/images/portfolio/mywaycar-bg.jpg', url1: 'assets/images/portfolio/mywaycar-mobie.png', name: 'My way car', sm1: 'assets/images/portfolio/playstore.png', rlink: "/car-pooling-app-mywaycar", appStoreLink: '', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.mywaycar&hl=en', webLink: '' },

		{ id: 3, url: 'assets/images/portfolio/dinero-bg.jpg', url1: 'assets/images/portfolio/dinero-dektop.png', name: 'Dinero', sm3: 'assets/images/portfolio/web.png', rlink: "/ecommerce-webapp-dinero", appStoreLink: '', playStoteLink: '', webLink: 'http://versatilemobitech.mobi/dinero/' },

		{ id: 4, url: 'assets/images/portfolio/gohostels-bg.jpg', url1: 'assets/images/portfolio/gohostel-mobie.png', name: 'GoHostel', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', sm3: 'assets/images/portfolio/web.png', rlink: "/hotel-booking-app-gohostel", playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.gohostelsuser', appStoreLink: 'https://apps.apple.com/in/app/go-hostel/id1463035404', webLink: 'https://www.gohostel.in/' },

		{ id: 22, url: 'assets/images/portfolio/dhukan-bg.jpg', url1: 'assets/images/portfolio/dhukan-mobie.png', name: 'Dhukan', rlink: "/ecommerce-grocery-webapp-dhukan", appStoreLink: '', playStoteLink: '', webLink: 'http://fansadda.mobi/dhukan/#/' },

		{ id: 6, url: 'assets/images/portfolio/tripcare-bg.jpg', url1: 'assets/images/portfolio/tripcarei-mobile.png', name: 'Tripcare', rlink: "/trip-management-tripcare", appStoreLink: '', playStoteLink: '', webLink: '' },

		{ id: 7, url: 'assets/images/portfolio/ucog-bg.jpg', url1: 'assets/images/portfolio/ucod-mobile.png', name: 'UCOD', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/driver-booking-app-ucod", appStoreLink: '', playStoteLink: '', webLink: '' },

		{ id: 17, url: 'assets/images/portfolio2/see-wheelers-bg.jpg', url1: 'assets/images/portfolio2/see-wheelers.png', name: 'SEE Wheelers', sm3: 'assets/images/portfolio/web.png', rlink: "/social-media-app-seewheelers", appStoreLink: '', playStoteLink: '', webLink: 'http://seewheelers.com' },

		{
			id: 8, url: 'assets/images/portfolio/goodtimesi-bg.jpg', url1: 'assets/images/portfolio/goodtimes-dektop.png', name: 'Goodtimes', sm3: 'assets/images/portfolio/web.png', rlink: "/movie-booking-app-goodtimes", appStoreLink: '', playStoteLink: '',
			webLink: 'http://fansadda.mobi/goodtimes/#/event/onsale'
		},

		{ id: 9, url: 'assets/images/portfolio2/al-masaood-bg.jpg', url1: 'assets/images/portfolio2/al-masaood.png', name: 'Al-Masaood', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/automotive-experience-app-al-masaood", appStoreLink: 'https://apps.apple.com/us/app/ai-masaood-auto/id1463932663?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.prive&hl=en', webLink: '' },

		{ id: 9, url: 'assets/images/portfolio2/evexpro-bg.jpg', url1: 'assets/images/portfolio2/evexpro.png', name: 'Evexpro', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/event-management-app-evexpro", appStoreLink: 'https://apps.apple.com/us/app/evexpro/id1334638990?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.evexpro&hl=en', webLink: '' },

		{ id: 10, url: 'assets/images/portfolio2/india-cme-bg.jpg', url1: 'assets/images/portfolio2/india-cme.png', name: 'India-CME', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/medical-event-booking-indiacme", appStoreLink: 'https://apps.apple.com/us/app/indiacme-medgini/id1466586584', playStoteLink: 'https://play.google.com/store/apps/details?id=pk.indiacme&hl=en', webLink: '' },

		{ id: 11, url: 'assets/images/portfolio2/koach-konnect-bg.jpg', url1: 'assets/images/portfolio2/koach-konnect.png', name: 'Koach-Konnect', sm3: 'assets/images/portfolio/web.png', rlink: "/educational-app-koach-konnect", appStoreLink: '', playStoteLink: '', webLink: 'http://fansadda.mobi/koachkonnectkarma/#/homeComponent' },

		{ id: 12, url: 'assets/images/portfolio2/loha-bg.jpg', url1: 'assets/images/portfolio2/loha.png', name: 'LOHA', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/online-marketplace-loha", appStoreLink: 'https://apps.apple.com/us/app/loha/id1289196878', playStoteLink: 'https://play.google.com/store/apps/details?id=com.chat.loha&hl=en', webLink: 'https://www.loha.co.in/' },

		{ id: 13, url: 'assets/images/portfolio2/mahali-bg.jpg', url1: 'assets/images/portfolio2/mahali.png', name: 'Mahalli', sm3: 'assets/images/portfolio/web.png', rlink: "/retail-sales-platform-mahalli", appStoreLink: '', playStoteLink: '', webLink: 'https://www.mahalli.com/' },

		{ id: 14, url: 'assets/images/portfolio2/questi-bg.jpg', url1: 'assets/images/portfolio2/questi.png', name: 'Questi', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/social-media-app-questi", appStoreLink: 'https://apps.apple.com/us/app/questi/id1276474060?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.questi&hl=en', webLink: '' },

		{ id: 15, url: 'assets/images/portfolio2/samatha-bg.jpg', url1: 'assets/images/portfolio2/samatha.png', name: 'Samatha', sm1: 'assets/images/portfolio/playstore.png', rlink: "/health-care-app-samatha", appStoreLink: '', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.samatha&hl=en', webLink: '' },

		{ id: 16, url: 'assets/images/portfolio2/sandal-bg.jpg', url1: 'assets/images/portfolio2/sandals.png', name: 'Sandals', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/ecommerce-mobilepp-sandal", appStoreLink: 'https://apps.apple.com/us/app/sandal/id1265904367?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.sandal&hl=en', webLink: '' },

		{ id: 18, url: 'assets/images/portfolio2/solista-bg.jpg', url1: 'assets/images/portfolio2/solista.png', name: 'Solista', sm3: 'assets/images/portfolio/web.png', rlink: "/ecommerce-webapp-solista", appStoreLink: '', playStoteLink: '', webLink: 'http://versatilemobitech.in/solista/index.html' },

		{ id: 19, url: 'assets/images/portfolio2/suwaah-bg.jpg', url1: 'assets/images/portfolio2/suwaah.png', name: 'Suwaah', sm3: 'assets/images/portfolio/web.png', rlink: "/travel-booking-suwaah", appStoreLink: '', playStoteLink: '', webLink: 'http://www.suwaah.com/' },

		{ id: 20, url: 'assets/images/portfolio/inner/vortex/vortex-bg.jpg', url1: 'assets/images/portfolio/inner/vortex/vortex-android.png', name: 'Vortex', sm1: 'assets/images/portfolio/playstore.png', rlink: "/vortex", appStoreLink: '', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.vortex', webLink: '' },

		{ id: 21, url: 'assets/images/portfolio/inner/ucars/ucars-bg.jpg', url1: 'assets/images/portfolio/inner/ucars/ucars-ios.png', name: 'Ucars', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/Ucars", appStoreLink: 'https://apps.apple.com/in/app/ucars/id1241770545', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.ucars', webLink: '' },

		{ id: 5, url: 'assets/images/portfolio/inner/digitak/digitak-bg.jpg', url1: 'assets/images/portfolio/inner/digitak/digitak-web.png', name: 'Digitak', sm3: 'assets/images/portfolio/web.png', rlink: "/Digitak", appStoreLink: '', playStoteLink: '', webLink: 'https://tak.digitak.se' },

		{ id: 21, url: 'assets/images/portfolio/inner/green/green-bg.jpg', url1: 'assets/images/portfolio/inner/green/green-2.png', name: 'Green Connexion', rlink: "/Greenconnexion", appStoreLink: '', playStoteLink: '', webLink: '' },
	
	];
	showAllProjects: boolean = true;
	ngOnInit() {
		this.showAllProjects = true;

		this.showAll();
		window.scroll(0, 0);



		this.WebData = [
			{ id: 3, url: 'assets/images/portfolio/dinero-bg.jpg', url1: 'assets/images/portfolio/dinero-dektop.png', name: 'Dinero', sm1: 'assets/images/portfolio/web.png', rlink: "/ecommerce-webapp-dinero", webLink: 'http://versatilemobitech.mobi/dinero/' },
			{ id: 4, url: 'assets/images/portfolio/gohostels-bg.jpg', url1: 'assets/images/portfolio/gohostel-mobie.png', name: 'GoHostel', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', sm3: 'assets/images/portfolio/web.png', rlink: "/hotel-booking-app-gohostel", playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.gohostelsuser', appStoreLink: 'https://apps.apple.com/in/app/go-hostel/id1463035404', webLink: 'https://www.gohostel.in/' },
			{ id: 5, url: 'assets/images/portfolio/dhukan-bg.jpg', url1: 'assets/images/portfolio/dhukan-mobie.png', name: 'Dhukan', rlink: "/ecommerce-grocery-webapp-dhukan", webLink: 'http://fansadda.mobi/dhukan/#/' },
			{ id: 6, url: 'assets/images/portfolio/tripcare-bg.jpg', url1: 'assets/images/portfolio/tripcarei-mobile.png', name: 'Tripcare', rlink: "/trip-management-tripcare", webLink: '' },
			{ id: 8, url: 'assets/images/portfolio/goodtimesi-bg.jpg', url1: 'assets/images/portfolio/goodtimes-dektop.png', name: 'Goodtimes', sm3: 'assets/images/portfolio/web.png', rlink: "/movie-booking-app-goodtimes", webLink: 'http://fansadda.mobi/goodtimes/#/event/onsale' },
			{ id: 11, url: 'assets/images/portfolio2/koach-konnect-bg.jpg', url1: 'assets/images/portfolio2/koach-konnect.png', name: 'Koach-Konnect', sm3: 'assets/images/portfolio/web.png', rlink: "/educational-app-koach-konnect", webLink: 'http://fansadda.mobi/koachkonnectcoach/#/homeComponent' },

			{ id: 13, url: 'assets/images/portfolio2/mahali-bg.jpg', url1: 'assets/images/portfolio2/mahali.png', name: 'Mahalli', sm3: 'assets/images/portfolio/web.png', rlink: "/retail-sales-platform-mahalli", appStoreLink: '', playStoteLink: '', webLink: 'https://www.mahalli.com/' },

			{ id: 18, url: 'assets/images/portfolio2/solista-bg.jpg', url1: 'assets/images/portfolio2/solista.png', name: 'Solista', sm3: 'assets/images/portfolio/web.png', rlink: "/ecommerce-webapp-solista", webLink: 'http://versatilemobitech.in/solista/index.html' },

			{ id: 19, url: 'assets/images/portfolio2/suwaah-bg.jpg', url1: 'assets/images/portfolio2/suwaah.png', name: 'Suwaah', sm3: 'assets/images/portfolio/web.png', rlink: "/travel-booking-suwaah", webLink: 'http://www.suwaah.com/' },

			{ id: 20, url: 'assets/images/portfolio/inner/digitak/digitak-bg.jpg', url1: 'assets/images/portfolio/inner/digitak/digitak-web.png', name: 'Digitak', sm3: 'assets/images/portfolio/web.png', rlink: "/Digitak", webLink: 'https://tak.digitak.se' },
			{ id: 21, url: 'assets/images/portfolio2/see-wheelers-bg.jpg', url1: 'assets/images/portfolio2/see-wheelers.png', name: 'SEE Wheelers', sm3: 'assets/images/portfolio/web.png', rlink: "/see-weelersocial-media-app-seewheelers", webLink: 'http://seewheelers.com' },
			
		];


		this.AndroidData = [
			{ id: 1, url: 'assets/images/portfolio/gati-bg.jpg', url1: 'assets/images/portfolio/gati-mobile.png', name: 'Gati', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/logistics-app-gati", playStoteLink: 'https://play.google.com/store/apps/details?id=com.gati.gaticonsumer&hl=en', appStoreLink: 'https://apps.apple.com/in/app/gaticonsumer/id995166307' },

			{ id: 2, url: 'assets/images/portfolio/mywaycar-bg.jpg', url1: 'assets/images/portfolio/mywaycar-mobie.png', name: 'My way car', sm1: 'assets/images/portfolio/playstore.png', rlink: "/car-pooling-app-mywaycar", appStoreLink: '', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.mywaycar&hl=en', webLink: '' },

			{ id: 4, url: 'assets/images/portfolio/gohostels-bg.jpg', url1: 'assets/images/portfolio/gohostel-mobie.png', name: 'GoHostel', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', sm3: 'assets/images/portfolio/web.png', rlink: "/hotel-booking-app-gohostel", playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.gohostelsuser', appStoreLink: 'https://apps.apple.com/in/app/go-hostel/id1463035404', webLink: 'https://www.gohostel.in/' },

			{ id: 5, url: 'assets/images/portfolio/dhukan-bg.jpg', url1: 'assets/images/portfolio/dhukan-mobie.png', name: 'Dhukan', rlink: "/ecommerce-grocery-webapp-dhukan", playStoteLink: '' },

			{ id: 6, url: 'assets/images/portfolio/tripcare-bg.jpg', url1: 'assets/images/portfolio/tripcarei-mobile.png', name: 'Tripcare', rlink: "/trip-management-tripcare", playStoteLink: '' },

			{ id: 7, url: 'assets/images/portfolio/ucog-bg.jpg', url1: 'assets/images/portfolio/ucod-mobile.png', name: 'UCOD', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/driver-booking-app-ucod", playStoteLink: '' },

			{ id: 9, url: 'assets/images/portfolio2/al-masaood-bg.jpg', url1: 'assets/images/portfolio2/al-masaood.png', name: 'Al-Masaood', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/automotive-experience-app-al-masaood", appStoreLink: 'https://apps.apple.com/us/app/ai-masaood-auto/id1463932663?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.prive&hl=en', webLink: '' },

			{ id: 9, url: 'assets/images/portfolio2/evexpro-bg.jpg', url1: 'assets/images/portfolio2/evexpro.png', name: 'Evexpro', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/event-management-app-evexpro", appStoreLink: 'https://apps.apple.com/us/app/evexpro/id1334638990?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.evexpro&hl=en', webLink: '' },

			{ id: 10, url: 'assets/images/portfolio2/india-cme-bg.jpg', url1: 'assets/images/portfolio2/india-cme.png', name: 'India-CME', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/medical-event-booking-indiacme", appStoreLink: 'https://apps.apple.com/us/app/indiacme-medgini/id1466586584', playStoteLink: 'https://play.google.com/store/apps/details?id=pk.indiacme&hl=en', webLink: '' },

			{ id: 12, url: 'assets/images/portfolio2/loha-bg.jpg', url1: 'assets/images/portfolio2/loha.png', name: 'LOHA', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/online-marketplace-loha", appStoreLink: 'https://apps.apple.com/us/app/loha/id1289196878', playStoteLink: 'https://play.google.com/store/apps/details?id=com.chat.loha&hl=en', webLink: 'https://www.loha.co.in/' },

			{ id: 13, url: 'assets/images/portfolio2/mahali-bg.jpg', url1: 'assets/images/portfolio2/mahali.png', name: 'Mahalli', sm3: 'assets/images/portfolio/web.png', rlink: "/retail-sales-platform-mahalli", appStoreLink: '', playStoteLink: '', webLink: 'https://www.mahalli.com/' },

			{ id: 14, url: 'assets/images/portfolio2/questi-bg.jpg', url1: 'assets/images/portfolio2/questi.png', name: 'Questi', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/social-media-app-questi", appStoreLink: 'https://apps.apple.com/us/app/questi/id1276474060?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.questi&hl=en', webLink: '' },

			{ id: 15, url: 'assets/images/portfolio2/samatha-bg.jpg', url1: 'assets/images/portfolio2/samatha.png', name: 'Samatha', sm1: 'assets/images/portfolio/playstore.png', rlink: "/health-care-app-samatha", playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.samatha&hl=en' },

			{ id: 16, url: 'assets/images/portfolio2/sandal-bg.jpg', url1: 'assets/images/portfolio2/sandals.png', name: 'Sandals', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/ecommerce-mobilepp-sandal", playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.sandal&hl=en' },

			{ id: 17, url: 'assets/images/portfolio2/see-wheelers-bg.jpg', url1: 'assets/images/portfolio2/see-wheelers.png', name: 'SEE Wheelers', sm3: 'assets/images/portfolio/web.png', rlink: "/see-weelersocial-media-app-seewheelers", playStoteLink: '', webLink: 'http://seewheelers.com' },

			{ id: 18, url: 'assets/images/portfolio/inner/vortex/vortex-bg.jpg', url1: 'assets/images/portfolio/inner/vortex/vortex-android.png', name: 'Vortex', sm1: 'assets/images/portfolio/playstore.png', rlink: "/vortex", playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.vortex' },

			{ id: 19, url: 'assets/images/portfolio/inner/ucars/ucars-bg.jpg', url1: 'assets/images/portfolio/inner/ucars/ucars-ios.png', name: 'Ucars', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/Ucars", appStoreLink: 'https://apps.apple.com/in/app/ucars/id1241770545', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.ucars', webLink: '' },
			


		];

		this.IosData = [
			{ id: 1, url: 'assets/images/portfolio/gati-bg.jpg', url1: 'assets/images/portfolio/gati-mobile.png', name: 'Gati', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/logistics-app-gati", playStoteLink: 'https://play.google.com/store/apps/details?id=com.gati.gaticonsumer&hl=en', appStoreLink: 'https://apps.apple.com/in/app/gaticonsumer/id995166307' },

			{ id: 4, url: 'assets/images/portfolio/gohostels-bg.jpg', url1: 'assets/images/portfolio/gohostel-mobie.png', name: 'GoHostel', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', sm3: 'assets/images/portfolio/web.png', rlink: "/gohostel", playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.gohostelsuser', appStoreLink: 'https://apps.apple.com/in/app/go-hostel/id1463035404', webLink: 'https://www.gohostel.in/' },



			{ id: 6, url: 'assets/images/portfolio/tripcare-bg.jpg', url1: 'assets/images/portfolio/tripcarei-mobile.png', name: 'Tripcare', rlink: "/tripcare", appStoreLink: '' },

			{ id: 7, url: 'assets/images/portfolio/ucog-bg.jpg', url1: 'assets/images/portfolio/ucod-mobile.png', name: 'UCOD', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/driver-booking-app-ucod", appStoreLink: '' },

			{ id: 9, url: 'assets/images/portfolio2/al-masaood-bg.jpg', url1: 'assets/images/portfolio2/al-masaood.png', name: 'Al-Masaood', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/automotive-experience-app-al-masaood", appStoreLink: 'https://apps.apple.com/us/app/ai-masaood-auto/id1463932663?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.prive&hl=en', webLink: '' },

			{ id: 9, url: 'assets/images/portfolio2/evexpro-bg.jpg', url1: 'assets/images/portfolio2/evexpro.png', name: 'Evexpro', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/event-management-app-evexpro", appStoreLink: 'https://apps.apple.com/us/app/evexpro/id1334638990?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.evexpro&hl=en', webLink: '' },

			{ id: 10, url: 'assets/images/portfolio2/india-cme-bg.jpg', url1: 'assets/images/portfolio2/india-cme.png', name: 'India-CME', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/medical-event-booking-indiacme", appStoreLink: 'https://apps.apple.com/us/app/indiacme-medgini/id1466586584', playStoteLink: 'https://play.google.com/store/apps/details?id=pk.indiacme&hl=en', webLink: '' },

			{ id: 12, url: 'assets/images/portfolio2/loha-bg.jpg', url1: 'assets/images/portfolio2/loha.png', name: 'LOHA', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/online-marketplace-loha", appStoreLink: 'https://apps.apple.com/us/app/loha/id1289196878', playStoteLink: 'https://play.google.com/store/apps/details?id=com.chat.loha&hl=en', webLink: 'https://www.loha.co.in/' },

			{ id: 13, url: 'assets/images/portfolio2/mahali-bg.jpg', url1: 'assets/images/portfolio2/mahali.png', name: 'Mahalli', sm3: 'assets/images/portfolio/web.png', rlink: "/retail-sales-platform-mahalli", appStoreLink: '', playStoteLink: '', webLink: 'https://www.mahalli.com/' },

			{ id: 14, url: 'assets/images/portfolio2/questi-bg.jpg', url1: 'assets/images/portfolio2/questi.png', name: 'Questi', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/social-media-app-questi", appStoreLink: 'https://apps.apple.com/us/app/questi/id1276474060?ls=1', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.questi&hl=en', webLink: '' },

			{ id: 16, url: 'assets/images/portfolio2/sandal-bg.jpg', url1: 'assets/images/portfolio2/sandals.png', name: 'Sandals', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/ecommerce-mobilepp-sandal", appStoreLink: 'https://apps.apple.com/us/app/sandal/id1265904367?ls=1' },

			{ id: 17, url: 'assets/images/portfolio2/see-wheelers-bg.jpg', url1: 'assets/images/portfolio2/see-wheelers.png', name: 'SEE Wheelers', sm3: 'assets/images/portfolio/web.png', rlink: "/social-media-app-seewheelers", appStoreLink: '', webLink: 'http://seewheelers.com' },
			{ id: 18, url: 'assets/images/portfolio/inner/ucars/ucars-bg.jpg', url1: 'assets/images/portfolio/inner/ucars/ucars-ios.png', name: 'Ucars', sm1: 'assets/images/portfolio/playstore.png', sm2: 'assets/images/portfolio/appstore.png', rlink: "/Ucars", appStoreLink: 'https://apps.apple.com/in/app/ucars/id1241770545', playStoteLink: 'https://play.google.com/store/apps/details?id=com.versatilemobitech.ucars', webLink: '' },
		

		];




	}
	showAll() {
		// alert('Hi')
		this.resetPage();
		window.scroll(0, 0);
		this.showAllProjects = true;
		this.showWebProjects = false;
		this.showAndroidProjects = false;
		this.showIosProjects = false;
		this.activeOne = true;
		this.activeWeb = false;
		this.activeAndroid = false;
		this.activeIos = false;
	}
	showWeb() {
		this.resetPage();
		window.scroll(0, 0);
		this.showAllProjects = false;
		this.showWebProjects = true;
		this.showAndroidProjects = false;
		this.showIosProjects = false;
		this.activeOne = false;
		this.activeWeb = true;
		this.activeAndroid = false;
		this.activeIos = false;
	}
	showAndroid() {
		this.resetPage();
		window.scroll(0, 0);
		this.showAllProjects = false;
		this.showWebProjects = false;
		this.showAndroidProjects = true;
		this.showIosProjects = false;
		this.activeOne = false;
		this.activeOne = false;
		this.activeWeb = false;
		this.activeAndroid = true;
		this.activeIos = false;
	}
	showIos() {
		this.resetPage();
		window.scroll(0, 0);
		this.showAllProjects = false;
		this.showWebProjects = false;
		this.showAndroidProjects = false;
		this.showIosProjects = true;
		this.activeOne = false;
		this.activeOne = false;
		this.activeWeb = false;
		this.activeAndroid = false;
		this.activeIos = true;
	}




}
