import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonInput, IonItem, IonList } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonContent, IonList, IonItem, IonInput, IonButton],
})
export class LoginComponent  implements OnInit {

  protected showPassword: boolean = false;
  constructor() { }

  ngOnInit() {}

}
