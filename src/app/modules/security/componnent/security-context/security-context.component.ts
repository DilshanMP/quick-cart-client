import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SecurityHeaderComponent} from '../security-header/security-header.component';
import {SecurityFooterComponent} from '../security-footer/security-footer.component';

@Component({
  selector: 'app-security-context',
  imports: [
    RouterOutlet,
    SecurityHeaderComponent,
    SecurityFooterComponent
  ],
  standalone:true,
  templateUrl: './security-context.component.html',
  styleUrl: './security-context.component.scss'
})
export class SecurityContextComponent {

}
