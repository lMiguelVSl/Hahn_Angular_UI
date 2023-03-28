import { Component } from '@angular/core';

class Item {
  constructor(public isComplete: boolean, public Name: string) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newItemName: string = '';
  items: Item[] = [
    new Item(true, 'Test Item')
  ];

  addItem() {

  }

  updateItem(item: Item) {

  }

  deleteItem(item: Item) {

  }
}
