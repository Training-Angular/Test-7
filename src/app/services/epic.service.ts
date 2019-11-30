import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EpicService {
  private baseAPIUrl = "https://epic.gsfc.nasa.gov/api/";
  private baseAPIUrlImage = "https://epic.gsfc.nasa.gov/archive/";
  private APIKey = "5N1adHBjyo03G3bMiNTcIxNlC0n7wc9bL4VPr64Y";

  constructor(private http: HttpClient) {}

  formatTwoDigits(value: number) {
    if (value < 10) {
      const result = "0" + value;
      return result;
    }
    return value;
  }

  getAllEpics(date: any, option: string): Observable<any> {
    const APIUrl = `${this.baseAPIUrl}${option}/date/${
      date.year
    }-${this.formatTwoDigits(date.month)}-${this.formatTwoDigits(
      date.day
    )}?api_key=${this.APIKey}`;
    console.log(APIUrl);
    return this.http.get(APIUrl);
  }

  handleError(err) {
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.message}`);
    }
  }

  getAllImageFromEpic(epics: any, date: any, option: string) {
    return epics.map(epic => {
      // tslint:disable-next-line: max-line-length
      const imageUrl = `${this.baseAPIUrlImage}${option}/${
        date.year
      }/${this.formatTwoDigits(date.month)}/${this.formatTwoDigits(
        date.day
      )}/png/${epic.image}.png?api_key=${this.APIKey}`;
      return imageUrl;
    });
  }
}
