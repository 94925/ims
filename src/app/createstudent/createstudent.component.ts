import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  public studentForm: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      gender: new FormControl(),
      mobile: new FormControl(),
      email: new FormControl(),
      batch: new FormControl(),
      address: new FormControl(
        {
          city: new FormControl(),
          mandal: new FormControl(),
          district: new FormControl(),
          state: new FormControl(),
          pincode: new FormControl(),
        }
      ),
      cards: new FormArray([])
    }

  )
  
  get cardsFormArray() {
    return this.studentForm.get('cards') as FormArray;
  }

  add(){
    this.cardsFormArray.push(
      new FormGroup(
        {
          qualification: new FormControl(),
          year: new FormControl(),
          percentage: new FormControl()
        }
      )
    )
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.studentForm);
    this.studentForm.markAllAsTouched();
  }

}
