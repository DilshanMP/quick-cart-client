import { Component } from '@angular/core';
import {HeaderComponent} from '../compponets/header/header.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from '../compponets/footer/footer.component';

@Component({
  selector: 'app-context',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
  ],
  standalone:true,
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss'
})
export class ContextComponent {

}
