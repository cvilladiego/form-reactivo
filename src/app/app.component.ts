import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-reactivo';
  public form: FormGroup;
  constructor(){
    this.form = new FormGroup({
      names: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  
    });
  }
  
  isValidField(field: string): boolean | null{
    return this.form.controls[field].errors && this.form.controls[field].touched;

  }

  onSave(): void {
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    } 
     console.info(this.form.value);
     this.form.reset({names: '', email:'', password:''});
  }

}
