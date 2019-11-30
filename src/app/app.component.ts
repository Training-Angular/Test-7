import { Component, OnInit, OnDestroy, SimpleChanges } from "@angular/core";
import { EpicService } from "./services/epic.service";
import { Subscription } from "rxjs";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  subcription: Subscription;
  epics = [];
  epicImages = [];
  dateEpic: NgbDateStruct = { year: 2018, month: 11, day: 27 };
  imageryOption = "natural";
  isPlay = false;
  currentIndex = 0;

  constructor(public epicService: EpicService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.subcription = this.epicService
      .getAllEpics(this.dateEpic, this.imageryOption)
      .subscribe(
        data => {
          this.epics = data;
          this.epicImages = this.epicService.getAllImageFromEpic(
            data,
            this.dateEpic,
            this.imageryOption
          );
        },
        error => {
          this.epicService.handleError(error);
        }
      );
  }

  callAPI(event: any) {
    if (typeof event === "string") {
      this.imageryOption = event;
    } else {
      this.dateEpic = event;
    }
    this.loadData();
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
