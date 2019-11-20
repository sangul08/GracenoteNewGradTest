import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { AppService } from '../services/appService';
import { ImageLocationData } from '../services/imageLocationData';
import { ImageDataModel } from '../DataModels/image-data-model';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  title = 'Welcome to NewGradTest';
  images: ImageDataModel[];
  details: {};
  uploadedImage: ImageDataModel = {
    id: '',
    source: '',
    description: '',
    cast: [],
    title: '',
  };
  cropDimension1 = {
    width: 720,
    height: 540
  };
  cropDimension2 = {
    width: 960,
    height: 1440
  };
  data;

  constructor(private service: AppService,
              private Il: ImageLocationData,
              private cdRef: ChangeDetectorRef) {
    this.images = Il.getImages();
  }

  ngOnInit() {
    this.loadImageDetails();
  }

  /**
   * This function utilizes the app service and hits the
   * API using the endpoint provided. Once it gets the data,
   * the response is then stored in images array
   */
  loadImageDetails() {
   // hit the api
    this.images.filter(image => {
      this.service.getDetails(image.id).subscribe(
          data => {
            image.title = data.title;
            image.description = data.longDescription;
            image.cast = data.cast;
          }
        );
    });
  }

  /**
   *  This function assigns the details of the image clicked
   * to the 'uploadedImage' variable
   * @param image the selected image
   */
  displayDetail(image: any) {
    this.uploadedImage = image[0];
  }

}
