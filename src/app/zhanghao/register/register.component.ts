import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) {}

  submit(): void {
    console.log(this.registerForm.value)
  }

  reset(): void {
    this.registerForm.reset()
  }

  ctrl(item: string): AbstractControl {
    return this.registerForm.controls[item]
  }

  statusCtrl(item: string): string {
    if (!this.registerForm.controls[item]) return
    const control: AbstractControl = this.registerForm.controls[item]
    return control.dirty && control.hasError('status') ? control.errors.status : ''
  }

  messageCtrl(item: string): string {
    if (!this.registerForm.controls[item]) return
    const control: AbstractControl = this.registerForm.controls[item]
    return control.dirty && control.hasError('message') ? control.errors.message : ''
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      password: [ '', [this.passwordValidator] ],
      password2: [ '', [this.passwordValidator2] ],
      mail: [ '', [this.emailValidator] ],
    })
  }

  private emailValidator = (control: FormControl): Validators => {
    const mailReg: RegExp = /^[A-Za-z0-9一-龥]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!mailReg.test(control.value)) {
      return { status: 'error', message: '邮箱格式不正确' }
    }
    return { status: 'success' }
  }

  private passwordValidator = (control: FormControl): Validators => {
    if (!control.value) {
      return { status: 'error', message: '密码是必填的' }
    }
    if (control.value.length < 6) {
      return { status: 'error', message: '密码长度必须大于 6 位' }
    }
    return { status: 'success' }
  }
  private passwordValidator2 = (control: FormControl): Validators => {
    if (!control.value) {
      return { status: 'error', message: '密码是必填的' }
    }
    if (control.value.length < 6) {
      return { status: 'error', message: '密码长度必须大于 6 位' }
    }
    return { status: 'success' }
  }
}
