import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../core/api.service';

@Component({
  standalone: true,
  selector: 'app-public-home',
  imports: [CommonModule],
  templateUrl :'./public-home.component.html',
  styleUrl: './public-home.component.css'
})
export class PublicHomeComponent implements OnInit {
  private readonly api = inject(ApiService);

  ngOnInit(): void {
    this.api.getHealth().subscribe((response) => {
      console.log('Health check response:', response);
    });
  }
}
