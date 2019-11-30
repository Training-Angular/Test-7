import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { EpicService } from "./../../services/epic.service";
import { NgbSlideEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-slide-container",
  templateUrl: "./slide-container.component.html",
  styleUrls: ["./slide-container.component.scss"]
})
export class SlideContainerComponent implements OnInit {
  @Input() epicImages: any;
  @Input() isPlay: boolean;

  @Input() currentIndex: number;
  @Output() currentIndexChange: EventEmitter<number> = new EventEmitter<
    number
  >();

  showNavigationIndicators = false;
  interval: any = false;
  position = 0;

  constructor(public epicService: EpicService) {}

  ngOnInit() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(): void {
    if (this.isPlay) {
      this.interval = 600;
    } else {
      this.interval = false;
    }
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (slideEvent.source === "arrowRight" || slideEvent.source === "timer") {
      this.currentIndex =
        this.currentIndex + 1 >= this.epicImages.length
          ? 0
          : this.currentIndex + 1;
    } else {
      this.currentIndex =
        this.currentIndex - 1 < 0
          ? this.epicImages.length - 1
          : this.currentIndex - 1;
    }
    this.currentIndexChange.emit(this.currentIndex);
  }
}
