import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-yuyue',
  templateUrl: './yuyue.component.html',
  styleUrls: ['./yuyue.component.scss']
})
export class YuyueComponent implements OnInit {

validateForm: FormGroup

constructor(@Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder) {
}

submit(): void {
  console.log(this.validateForm.value)
}

reset(): void {
  this.validateForm.reset()
}

ctrl(item: string): AbstractControl {
  return this.validateForm.controls[item]
}

statusCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('status') ? control.errors.status : ''
}

messageCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('message') ? control.errors.message : ''
}


ngOnInit(): void {
  this.validateForm = this.formBuilder.group({
    chekuang: [ '' ],
    description: [ '' ],
    date: ['', [this.dateValidator]],
  })
}

private timeValidator = (control: FormControl): Validators => {
  if (!control.value) {
    return { status: 'error', message: '必须选择配送时间' }
  }
  return { status: 'success' }
}

private dateValidator = (control: FormControl): Validators => {
  if (!control.value) {
    return { status: 'error', message: '必须选择配送日期' }
  }
  return { status: 'success' }
}

private cityValidator = (control: FormControl): Validators => {
  if (!control.value) {
    return { status: 'error', message: '必须填写城市名' }
  }
  if (!/[一-龥]/.test(control.value)) {
    return { status: 'error', message: '城市名必须是中文' }
  }
  return { status: 'success' }
}


/*
ngOnInit(): void {
  this.validateForm = new FormGroup({
    mail: new FormControl([''],[this.emailValidator]),
    password: new FormControl([''],[this.passwordValidator]),
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
*/

tableData: any[] = [{
  name: '水爷',
  date: '2017-08-19',
  id: '123456789',
}, {
  name: '水爷',
  date: '2017-08-20',
  id: '123456789',
}, {
  name: '水爷',
  date: '2017-08-21',
  id: '123456789',
}, {
  name: '水爷',
  date: '2017-08-22',
  id: '123456789',
}]

//斑马纹
rowClassNameFilter(row: any, index: number): string {
  if (index === 1) {
    return 'info-row';
  } else if (index === 3) {
    return 'positive-row';
  }
  return ''
}

//删除
handle(ref: any): void {
  // console.log(ref.index)
  // console.log(ref.rowData)
  // console.log(ref.innerHTML)
  ref.destroy()
}










}
