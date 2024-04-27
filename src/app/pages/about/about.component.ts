import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data=[
    {img: '../assets/x1.png', txt: "Fight Disease Worldwide"},
    {img: '../assets/x2.png', txt: "Non-flammable and safe"},
    {img: '../assets/x3.png', txt: "Hydrates The skin"},
    {img: '../assets/x4.png', txt: "safe Skin germ barrier"},
    {img: '../assets/x5.png', txt: "long-lasting protection"},
    {img: '../assets/x6.png', txt: "Kills 99.99% of germs"}
  ]
}
