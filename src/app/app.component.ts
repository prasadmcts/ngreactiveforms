import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private myForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      'name': new FormControl(),
      'birthYear': new FormControl(),
      'location': new FormGroup({
        'country': new FormControl(),
        'city': new FormControl()
      }),
      'phoneNumbers': new FormArray([new FormControl('')])
    });
  }

  remove(i: number) {
    (<FormArray>this.myForm.get('phoneNumbers')).removeAt(i);
  }

  add() {
    (<FormArray>this.myForm.get('phoneNumbers')).push(new FormControl(''));
  }

  printMyForm() {
    console.log(this.myForm);
  }

  register(myForm: NgForm) {
    console.log('Registration successful.');
    console.log(myForm.value);
  }
}


// import { Component, OnInit } from '@angular/core';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

// import { MustMatch } from './_helpers/must-match.validator';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })

// export class AppComponent implements OnInit {
//   registerForm: FormGroup;
//   submitted = false;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//       this.registerForm = this.formBuilder.group({
//           firstName: ['', Validators.required],
//           lastName: ['', Validators.required],
//           email: ['', [Validators.required, Validators.email]],
//           password: ['', [Validators.required, Validators.minLength(6)]],
//           confirmPassword: ['', Validators.required]
//       }, {
//           validator: MustMatch('password', 'confirmPassword')
//       });
//   }

//   // convenience getter for easy access to form fields
//   get f() { return this.registerForm.controls; }

//   onSubmit() {
//       this.submitted = true;

//       // stop here if form is invalid
//       if (this.registerForm.invalid) {
//           return;
//       }

//       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
//   }
// }