import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/appService';
import { ImageLocationData } from './services/imageLocationData';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { ImagesListComponent } from './images-list/images-list.component';
import { CroppingComponent } from './cropping/cropping.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCropperComponent,
    ImagesListComponent,
    CroppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [AppService, ImageLocationData],
  bootstrap: [AppComponent]
})
export class AppModule { }
