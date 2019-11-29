import { Component, OnInit, OnDestroy } from "@angular/core";
import { EpicService } from "./services/epic.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  public subcription: Subscription;
  public epics = [];
  public hello = "hello";
  public epicImages = [];

  constructor(public epicService: EpicService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.subcription = this.epicService.getAllEpics().subscribe(
      data => {
        // console.log(data);
        this.epics = data;
        this.epicImages = this.epicService.getAllImageFromEpic(data);
      },
      error => {
        this.epicService.handleError(error);
      }
    );
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
