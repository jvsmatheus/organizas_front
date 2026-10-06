import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { finalize } from 'rxjs';
import { UserProfileService } from '../features/profile/services/user-profile';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, FormsModule],
})
export class HomePage {

  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly shoppingListService = inject(ShoppingListService);
  private readonly userProfileService = inject(UserProfileService);

  title: string = "Organizas";
  isLoading: boolean = false;
  isApiConnect: boolean = false;
  newListName: string = "";
  responseMessage: string = "";

  constructor() {}

  getUserProfile(): void {
    this.isLoading = true;
    this.isApiConnect = false;
    
    this.userProfileService.getUserProfile()
      .pipe(finalize(() => {
        this.isLoading = false;
        this.changeDetector.detectChanges();
      }))
      .subscribe({
        next: res => console.log(res),
        error: error => {
          this.isApiConnect = true;
          if (error.status == 401) {
            this.responseMessage = "Conexão com a API confirmada";
          }
          else {
            this.responseMessage = "Não foi possível confirmar a conexão. Tente novamente."
          }
        }
      });
  }
  // changeTitle(): void {
  //   this.isLoading = true;
    
  //   if (this.title.includes("Organizas"))
  //     this.title = "Teste";
  //   else
  //     this.title = "Organizas";

  //   setTimeout(() => {
  //     this.isLoading = false;
  //     this.changeDetector.markForCheck();
  //   }, 1000);
  // }

  // createList(name: string) {
  //   this.shoppingListService.createList(name);
  //   this.newListName = "";
  // }

  // removeListItem(id: number) {
  //   this.shoppingListService.removeListItem(id);
  // }

  // get shoppingLists(): ShoppingList[] {
  //   return this.shoppingListService.shoppingLists;
  // }
}
