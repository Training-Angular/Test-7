import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-slide-container",
  templateUrl: "./slide-container.component.html",
  styleUrls: ["./slide-container.component.scss"]
})
export class SlideContainerComponent implements OnInit {
  @Input() epicImages: any;

  position = 0;

  constructor() {}

  ngOnInit() {}

  setIndex(extraValue: number) {
    console.log(this.position);
    this.position += extraValue;
    if (this.position >= this.epicImages.length) {
      this.position = 0;
    }
    if (this.position < 0) {
      this.position = this.epicImages.length - 1;
    }
    console.log(this.position);
  }
}
