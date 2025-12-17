import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from './ui/button/button.component';
import { InputComponent } from './ui/input/input.component';
import { CardComponent } from './ui/card/card.component';
import { UserDialogComponent } from './shared/components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatDialogModule, ButtonComponent, InputComponent, CardComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(UserDialogComponent, { width: '400px' });
  }
}
