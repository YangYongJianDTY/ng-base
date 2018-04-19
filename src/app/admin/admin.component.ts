import { Component, OnInit } from '@angular/core';
 import { ElMessageService } from 'element-angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private message: ElMessageService) {
   }

  ngOnInit() {
  }

  tagAlert(): void {
      this.message.show('确要定删除这个类别吗？')
  }

  tagAlert2(): void {
      this.message.show('确要定删除这个实例吗？')
  }

  showTemp(): void {
      //this.message.show('确要定删除这个类别吗？')
  }

  options: any[] = [{
    value: 'zhinan',
    label: '指南',
    children: [{
      value: 'shejiyuanze',
      label: '设计原则',
      children: [{
        value: 'yizhi',
        label: '一致',
      }, {
        value: 'fankui',
        label: '反馈',
      }, {
        value: 'xiaolv',
        label: '效率',
      }, {
        value: 'kekong',
        label: '可控',
      }],
    }],
  }, {
    value: 'zujian',
    label: '组件',
    children: [{
      value: 'layout',
      label: 'Layout 布局',
    }, {
      value: 'color',
      label: 'Color 色彩',
    }, {
      value: 'typography',
      label: 'Typography 字体',
    }],
  }, {
    value: 'form',
    label: 'Form',
    children: [{
      value: 'radio',
      label: 'Radio 单选框',
    }, {
      value: 'checkbox',
      label: 'Checkbox 多选框',
    }, {
      value: 'input',
      label: 'Input 输入框',
    }, {
      value: 'input-number',
      label: 'InputNumber 计数器',
    }, {
      value: 'select',
      label: 'Select 选择器',
    }, {
      value: 'cascader',
      label: 'Cascader 级联选择器',
    }],
  }]

  temps: any = [
    { name: '创造力', type: 'success'
    },{ name: '反应能力', type: 'success'
    },{ name: '沟通能力', type: 'success'
    },{ name: '判断力', type: 'success'
    },{ name: '元胜能力', type: 'success'
    },{ name: '员工知识能力', type: 'success'
    },{ name: '员工组织能力', type: 'success'
    },{ name: '自信心', type: 'success'
    },{ name: '阻组织情绪能力', type: 'success'
    },{ name: '情绪能力', type: 'success' }]

  moxingtemps: any = [
    { name: '实例1', type: 'success'
    },{ name: '实例1', type: 'success'
    },{ name: '实例1', type: 'success'
    },{ name: '实例1', type: 'success'
    },{ name: '实例1', type: 'success'
    },{ name: '实例1', type: 'success'
    },{ name: '实例1', type: 'success'
    },{ name: '实例1', type: 'success'
    },{ name: '实例1', type: 'success'
    },{ name: '实例1', type: 'success' }]
}
