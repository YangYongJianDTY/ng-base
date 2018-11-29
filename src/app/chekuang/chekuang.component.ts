import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-chekuang',
  templateUrl: './chekuang.component.html',
  styleUrls: ['./chekuang.component.scss']
})
export class ChekuangComponent implements OnInit {

chekuangForm: FormGroup

constructor(@Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder) {
}

submit(): void {
  console.log(this.chekuangForm.value)
}

reset(): void {
  this.chekuangForm.reset()
}

ctrl(item: string): AbstractControl {
  return this.chekuangForm.controls[item]
}

statusCtrl(item: string): string {
  if (!this.chekuangForm.controls[item]) return
  const control: AbstractControl = this.chekuangForm.controls[item]
  return control.dirty && control.hasError('status') ? control.errors.status : ''
}

messageCtrl(item: string): string {
  if (!this.chekuangForm.controls[item]) return
  const control: AbstractControl = this.chekuangForm.controls[item]
  return control.dirty && control.hasError('message') ? control.errors.message : ''
}


ngOnInit(): void {
  this.chekuangForm = this.formBuilder.group({
    chexing: [ '' ],
    licheng: [ '' ],
    youliang: [ '' ],
    shuiliang: [ '' ],
    shuiwen: [ '' ],
    qidong: [ '' ],
    wending: [ '' ],
    xiangsheng: [ '' ],
    zhuanxiang: [ '' ],
    shache: [ '' ],
    lihe: [ '' ],
    biansuxiang: [ '' ],
    chedeng: [ [] ],
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


}
