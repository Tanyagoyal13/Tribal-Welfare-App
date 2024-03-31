import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchAppComponent } from './search-app/search-app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ImageComponent } from './image-carousel/image-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { DescriptionComponent } from './description/description.component';
@NgModule({
  declarations: [AppComponent, SearchAppComponent, ImageComponent, DescriptionComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
