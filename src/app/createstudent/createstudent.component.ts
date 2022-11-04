import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  public studentForm: FormGroup = new FormGroup(
    {
      name: new FormControl(),
      gender: new FormControl (),
      mobile: new FormControl(),
      email :  new FormControl (),
      batch: new FormControl()
    
  }

  )
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.studentForm);
    this.studentForm.markAllAsTouched();
  }

}
