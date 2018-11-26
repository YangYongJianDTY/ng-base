import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-modifymm',
  templateUrl: './modifymm.component.html',
  styleUrls: ['./modifymm.component.scss']
})
export class ModifymmComponent implements OnInit {

  modifymmForm: FormGroup

  constructor(
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
  ) {}

  submit(): void {
    console.log(this.modifymmForm.value)
  }

  reset(): void {
    this.modifymmForm.reset()
  }

  ctrl(item: string): AbstractControl {
    return this.modifymmForm.controls[item]
  }

  statusCtrl(item: string): string {
    if (!this.modifymmForm.controls[item]) return
    const control: AbstractControl = this.modifymmForm.controls[item]
    return control.dirty && control.hasError('status') ? control.errors.status : ''
  }

  messageCtrl(item: string): string {
    if (!this.modifymmForm.controls[item]) return
    const control: AbstractControl = this.modifymmForm.controls[item]
    return control.dirty && control.hasError('message') ? control.errors.message : ''
  }

  ngOnInit(): void {
    this.modifymmForm = this.formBuilder.group({
      password: [ '', [this.passwordValidator] ],
      mailPW: [ '', [this.mailPWValidator] ],
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
  private mailPWValidator = (control: FormControl): Validators => {
    if (!control.value) {
      return { status: 'error', message: '验证密码是必填的' }
    }
    if (control.value.length != 6) {
      return { status: 'error', message: '密码长度必须为 6 位' }
    }
    return { status: 'success' }
  }
}
