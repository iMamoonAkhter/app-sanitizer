import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { BenefiteProductComponent } from '../benefite-product/benefite-product.component';
import { CasesComponent } from '../cases/cases.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { WhatYouGetComponent } from '../what-you-get/what-you-get.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent, AboutComponent, BenefiteProductComponent, CasesComponent, TestimonialsComponent, WhatYouGetComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
