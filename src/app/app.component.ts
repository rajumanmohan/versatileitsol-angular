import { Component, AfterViewInit } from '@angular/core';
import { AgmMap } from '@agm/core';
import { NavigationStart, Router, ActivatedRoute, NavigationCancel, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'versatile';

  showHead: boolean = false;
  routeHidden = true;
  loading = false;
  constructor(
    private router: Router, private route: ActivatedRoute, private meta: Meta, private titleService: Title, private spinner: NgxSpinnerService
  ) {
    // this._router.events.subscribe(() => this.router = this._router.url );
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let currentRoute = this.route.root;
        let title = '';
        let description = '';
        let keywords = '';
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
            if (routes.outlet === 'primary') {
              title = routes.snapshot.data[0].title;
              description = routes.snapshot.data[0].description;
              keywords = routes.snapshot.data[0].keywords;
              currentRoute = routes;
            }
          });
        } while (currentRoute);
        this.titleService.setTitle(title);
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ name: 'keywords', content: keywords });

      }
    });

  }

  ngOnInit() {


    window.scroll(0, 0);

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (e.url == "/") {
          this.routeHidden = false;
        } else {
          this.routeHidden = true;
        }
      }
    });
  }
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.spinner.show();
          setTimeout(() => {
            this.spinner.hide()
          }, 3000)
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {

        }
      });
  }
}