import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fiche-produit',
  standalone: true,
  imports: [],
  templateUrl: './fiche-produit.component.html',
  styleUrl: './fiche-produit.component.css'
})

export class FicheProduitComponent {
  @Input() title: string = 'myPlant';
  @Input() price: string = '$0,99';
  @Input() desc: string = 'This is a plant description, hourra'
}
