import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cropping',
  templateUrl: './cropping.component.html',
  styleUrls: ['./cropping.component.css']
})
export class CroppingComponent implements OnInit {
  dimension = {
    width: 720,
    height: 540
  };
  dimension2 = {
    width: 960,
    height: 1440
  };
  public src: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.src = '../assets/' + params.get('id') + '.jpg';
    });
  }

}
