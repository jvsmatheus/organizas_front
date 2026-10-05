import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { ShoppingList, ShoppingListService } from './../services/shopping-list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {

  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly shoppingListService = inject(ShoppingListService);

  title: string = "Organizas";
  isLoading: boolean = false;
  newListName: string = "";

  constructor() {}

  changeTitle(): void {
    this.isLoading = true;
    
    if (this.title.includes("Organizas"))
      this.title = "Teste";
    else
      this.title = "Organizas";

    setTimeout(() => {
      this.isLoading = false;
      this.changeDetector.markForCheck();
    }, 1000);
  }

  createList(name: string) {
    this.shoppingListService.createList(name);
    this.newListName = "";
  }

  removeListItem(id: number) {
    this.shoppingListService.removeListItem(id);
  }

  get shoppingLists(): ShoppingList[] {
    return this.shoppingListService.shoppingLists;
  }
}
