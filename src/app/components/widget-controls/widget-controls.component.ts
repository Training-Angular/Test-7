import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-widget-controls",
  templateUrl: "./widget-controls.component.html",
  styleUrls: ["./widget-controls.component.scss"]
})
export class WidgetControlsComponent implements OnInit {
  @Input() epics: any;
  index1 = 0;

  constructor() {}

  ngOnInit() {}
}
