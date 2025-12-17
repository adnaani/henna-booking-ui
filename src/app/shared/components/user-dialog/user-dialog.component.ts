import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [MatDialogModule],
  template: `
    <h2 class="text-lg font-semibold mb-4">Confirm action</h2>

    <p class="text-sm text-gray-600 mb-6">
      Are you sure you want to proceed?
    </p>

    <div class="flex justify-end gap-3">
      <button
        class="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        (click)="close()"
      >
        Cancel
      </button>
      <button
        class="px-4 py-2 rounded bg-red-600 text-white shadow hover:bg-red-700 transition"
        (click)="confirm()"
      >
        Confirm
      </button>
    </div>
  `,
})
export class UserDialogComponent {
  private dialogRef = inject(MatDialogRef<UserDialogComponent>);

  close(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
