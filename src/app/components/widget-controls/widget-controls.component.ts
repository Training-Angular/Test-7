import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { EpicService } from "./../../services/epic.service";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-widget-controls",
  templateUrl: "./widget-controls.component.html",
  styleUrls: ["./widget-controls.component.scss"]
})
export class WidgetControlsComponent implements OnInit {
  @Input() epics: any;
  @Output() callAPI: EventEmitter<any> = new EventEmitter<any>();

  @Input() isPlay: boolean;
  @Output() isPlayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentIndex: number;
  @Output() currentIndexChange: EventEmitter<number> = new EventEmitter<
    number
  >();

  imageryOption = "natural";
  dateEpic: NgbDateStruct = { year: 2018, month: 11, day: 27 };
  isShowDatePicker = false;

  constructor(public epicService: EpicService) {}

  ngOnInit() {}

  onDateSelect(event) {
    this.dateEpic = event;
    this.isShowDatePicker = false;
    this.currentIndexChange.emit(0);
    this.isPlayChange.emit(false);
    this.callAPI.emit(event);
  }

  slidePlayer() {
    this.isPlay = !this.isPlay;
    this.isPlayChange.emit(this.isPlay);
    // if (!this.isPlay) {
    //   this.currentIndexChange.emit(0);
    // }
  }

  onSelectImagery() {
    this.callAPI.emit(this.imageryOption);
  }
}
