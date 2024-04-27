import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  text: string = '';
  initialLoad: boolean = true;
  textClass: string = '';

  ngOnInit() {
    this.textClass = this.getTextClass(); // Assign the initial text class
  }

  getTextClass(): string {
    return this.text.length > 0 ? 'class' : '';
  }

  getText1Class(): string {
    return this.text.toLowerCase().includes('.com') && this.text.includes('@') ? 'class1' : '';
  }
  
    
  
    but(): string {
      if (this.text.toLowerCase().includes('.com') && this.text.length > 8 && this.text.includes('@')) {
        return 'block';
      } else {
        return 'none';
      }
    }
  date = new Date();
  year = this.date.getFullYear();
  footer:string = `© ${this.year} All Rights Reserved`
}
