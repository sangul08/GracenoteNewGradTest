import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import Cropper from 'cropperjs';
import { saveAs } from 'file-saver';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-image-cropper',
    templateUrl: './image-cropper.component.html',
    styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements AfterViewInit, OnInit {
    @Input() src: string;
    @Input() dimension: {
      width: number,
      height: number
    };
    @ViewChild('image', { static: false }) imageElement: ElementRef;
    public source: string;
    public imageDestination: string;
    public canvas;
    private cropper: Cropper;

    public constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute) {
    }

    public ngOnInit() {
      this.source = this.src;
    }

    public ngAfterViewInit() {
        this.createCropper();
    }
    /**
     * Once the view is set, this function adds the image cropper
     * to the view
     */
    createCropper() {
      this.cropper = new Cropper(this.imageElement.nativeElement, {
        zoomable: false,
        scalable: false,
        initialAspectRatio: (this.dimension.height === 1440) ? 2 / 3 : 4 / 3,
        cropBoxResizable: false,
        crop: () => {
          const canvas = this.cropper.getCroppedCanvas({
            width: this.dimension.width,
            height: this.dimension.height,
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'high',
            maxHeight: this.dimension.height,
            minHeight: this.dimension.height,
            minWidth: this.dimension.width,
            maxWidth: this.dimension.width
          });
          this.imageDestination = canvas.toDataURL('image/jpg');
          this.canvas = canvas;
        }
    });
  }

  public download(num: number) {
    this.canvas.toBlob((blob: any) => {
      saveAs(blob, 'cropped_image.jpg');
    });
  }
}
