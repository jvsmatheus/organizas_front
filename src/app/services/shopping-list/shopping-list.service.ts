import { Service } from '@angular/core';

export interface ShoppingList {
  id: number,
  name: string
}

@Service()
export class ShoppingListService {
  private lastListId: number = 0;

  shoppingLists: ShoppingList[] = [];

  removeListItem(id: number) {
    this.shoppingLists = this.shoppingLists.filter(item => item.id !== id);
  }

  createList(name: string) {
    if (name.trim() == "")
      return;

    this.shoppingLists.push({
      id: this.lastListId++,
      name: name.trim()
    });
  }
}
