import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/api.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl :'./home.page.html',
  styleUrl: './home.page.css'
})
export class HomePage implements OnInit {
  private readonly api = inject(ApiService);

  ngOnInit(): void {
    this.api.getHealth().subscribe((response) => {
      console.log('Health check response:', response);
    });
  }
}
