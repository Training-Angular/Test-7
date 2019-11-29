import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EpicService {
  public API = "https://epic.gsfc.nasa.gov/api/natural/date/2015-10-31 ";
  public APIKey = "5N1adHBjyo03G3bMiNTcIxNlC0n7wc9bL4VPr64Y";
  constructor(public http: HttpClient) {}

  getAllEpics(): Observable<any> {
    return this.http.get(this.API);
  }

  handleError(err) {
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.message}`);
    }
  }

  getAllImageFromEpic(epics: any) {
    return epics.map(epic => {
      const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/${epic.image}.png`;
      return imageUrl;
    });
  }
}
