import { Component, NgModule, Input, OnInit, OnChanges } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ApiService } from "./ApiService";

@Component({
  selector: "[header]",
  template: `
    <th>№</th>
    <th>Name</th>
    <th>Score</th>
    <th>Note</th>
  `
})
export class HeaderComponent {}

@Component({
  selector: "[item-detail]",
  template: `
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.score }}</td>
    <td><input size="7" (input)="saveValue($event)" [value]="note" /></td>
  `
})
export class RowComponent implements OnChanges {
  @Input("item-detail") item;

  // my solution goes here ---
  note = "";

  ngOnChanges() {
    this.note = this.isValueSet() ? localStorage.getItem(this.itemName()) : "";
  }

  saveValue({ target }) {
    this.note = target.value;
    localStorage.setItem(this.itemName(), this.note);
  }

  isValueSet() {
    return localStorage.getItem(this.itemName());
  }

  itemName() {
    return `item-${this.item.id}`;
  }
  // my solution ends here ---
}

@Component({
  selector: "app-root",
  providers: [ApiService],
  template: `
    <table border="2" cellpadding="5">
      <thead>
        <tr header></tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items; let i = index" [item-detail]="item"></tr>
      </tbody>
    </table>
  `
})
export class AppComponent implements OnInit {
  items;

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.handleChanges(changes => {
      this.items = this.calcScore(changes);
    });
  }
  calcScore(items) {
    return items.map(item => ({
      ...item,
      score: Math.round((item.rate / 100) * 5)
    }));
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, RowComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
