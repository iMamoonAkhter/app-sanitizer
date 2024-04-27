import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-benefite-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefite-product.component.html',
  styleUrl: './benefite-product.component.css'
})
export class BenefiteProductComponent {
  data = [
    {
      img: "../assets/coffee.png",
      txt: "Start your day with piece of mind"
    },
    {
      img: "../assets/gym.png",
      txt: "Prevents germs from spreading from lifter"
    },
    {
      img: "../assets/laptop.png",
      txt: "Freedom to work without any tension"
    },
    {
      img: "../assets/car.png",
      txt: "Travel from point A to-B with confidence"
    }
  ]
}
