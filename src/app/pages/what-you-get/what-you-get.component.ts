import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-what-you-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-you-get.component.html',
  styleUrl: './what-you-get.component.css'
})
export class WhatYouGetComponent {
  data=[
    {
      txt: 'Free Shipping',
      img: "../assets/truck.png",
      width: "7vw"
    },
    {
      txt: "Satisfaction Gauranteed",
      img: "../assets/satification.png",
      width: "10.25vw"
    },
    {
      txt: 'Travel Friendly',
      img: "../assets/plane.png",
      width: "7vw"
    },
    {
      txt: "Made In USA",
      img: "../assets/flag.png",
      width: "10.25vw"
    }
  ]
}
