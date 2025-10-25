import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserOperationService } from 'app/services/userOperationServices/user-operation.service';
import { DialogData } from '../links.component';


@Component({
  selector: 'app-addlink',
  templateUrl: './addlink.component.html',
  styleUrls: ['./addlink.component.scss'],
  imports: [ReactiveFormsModule, MatFormFieldModule, CommonModule, MatInputModule],
  standalone: true
})
export class AddlinkComponent implements OnInit {

  constructor(private service:UserOperationService , private dialogRef: MatDialogRef<AddlinkComponent>,
    @Inject(MAT_DIALOG_DATA)  public data: DialogData) { }

  addlinkForm: FormGroup;
  ngOnInit(): void {
    this.addlinkForm = new FormGroup({
      // Define your form controls here
      url: new FormControl('', [Validators.required, Validators.pattern('https?://.+')]),
      name: new FormControl('', Validators.required),
      

    });

  }

  addLink() {
    if (this.addlinkForm.valid) {
      const linkData = this.addlinkForm.value;
      console.log('Link Data:', linkData);
      this.service.addlink(linkData).subscribe({
        next: (res: any) => {
          console.log('Link added successfully:', res);
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error('Error adding link:', err);
        }
      });
      // Here you can handle the form submission, e.g., send the data to a server
    } else {
      console.log('Form is invalid');
    }
  }

}
