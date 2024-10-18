import { Component } from '@angular/core';
import { FicheProduitComponent } from './components/fiche-produit/fiche-produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FicheProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

