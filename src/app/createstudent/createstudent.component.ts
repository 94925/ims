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
      company: new FormControl(
        {
          name: new FormControl(),
          location: new FormControl(),
          package: new FormControl(),
          offerDate: new FormControl(),
        }
      ),
      educations: new FormArray([]),
      sourceType: new FormControl(),
      sourceFrom: new FormControl(),
      referalName: new FormControl()
    }

  )
  
  get educationsFormArray() {
    return this.studentForm.get('educations') as FormArray;
  }

  add(){
    this.educationsFormArray.push(
      new FormGroup(
        {
          qualification: new FormControl(),
          year: new FormControl(),
          percentage: new FormControl()
        }
      )
    )
  }
  delete(i: number){
    this.educationsFormArray.removeAt(i);
  }
  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.studentForm);
    this.studentForm.markAllAsTouched();
  }

}
