import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExampleComponent } from './example/example.component';
import { NgbdModalContent } from './modal/my-modal-content.component';
import { ProductComponent } from './product/product.component';
import { ApiService } from './shared';
import { routing } from './app.routing';
import { ExampleService } from './example/example.service';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
/**
 * Ng2 Module for class
 * @Import all componentes here
 */
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExampleComponent,
    ProductComponent,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent],
  providers: [
    ApiService,
    ExampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) { }
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
