import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data: any = [{
    label: '所有模型',
    children: [{
      label: '个人能力模型',
      children: [{
        label: '适应能力模型',
      },
      {
        label: '应变能力模型',
      },
      {
        label: '抗压能力模型',
      }]
    },{
      label: '技术能力模型',
      children: [{
        label: 'JAVA',
      },
      {
        label: 'C++',
      },
      {
        label: 'MySql',
      }]

    }]
  }]

  data2: any = [{
    label: '创造力',
    children: [{
      label: '个人创造力',
      children: [{
        label: '及时创造力',
      },
      {
        label: '长时创造力',
      }]
    },{
      label: '团队创造力',
      children: [{
        label: '多人创造力',
      },
      {
        label: '少人创造力',
      }]
    }]
  }]

  data3: any = [{
    label: '创造力',
    children: [{
      label: '个人创造力',
      children: [{
        label: '及时创造力',
      },
      {
        label: '长时创造力',
      }]
    },{
      label: '团队创造力',
      children: [{
        label: '多人创造力',
      },
      {
        label: '少人创造力',
      }]
    }]
  }]

  lets: any = [{value: '选项1',label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { elDisabled: true, value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' },
    { value: '选项5', label: '北京烤鸭' }]
}
