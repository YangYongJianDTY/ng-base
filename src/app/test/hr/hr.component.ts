import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tableData: any[] = [{
    rank: '1',
    name: '貂蝉',
    skill1: '71',
    skill2: '82',
  }, {
    rank: '2',
    name: '孙尚香',
    skill1: '73',
    skill2: '86',
  }, {
    rank: '3',
    name: '张飞',
    skill1: '70',
    skill2: '85',
  }, {
    rank: '4',
    name: '诸葛亮',
    skill1: '80',
    skill2: '96',
  }, {
    rank: '5',
    name: '安其拉',
    skill1: '90',
    skill2: '75',
  }, {
    rank: '6',
    name: '亚瑟',
    skill1: '80',
    skill2: '65',
  }, {
    rank: '7',
    name: '露娜',
    skill1: '60',
    skill2: '84',
  }, {
    rank: '8',
    name: '关羽',
    skill1: '76',
    skill2: '80',
  }, {
    rank: '9',
    name: '狄仁杰',
    skill1: '77',
    skill2: '87',
  }, {
    rank: '10',
    name: '常木耀',
    skill1: '92',
    skill2: '85',
  }];




  tableData2: any[] = [{
    rank: '10',
    name: '常木耀',
    skill1: '92',
    skill2: '85',
  }, {
    rank: '5',
    name: '安其拉',
    skill1: '90',
    skill2: '75',
  }, {
    rank: '6',
    name: '亚瑟',
    skill1: '80',
    skill2: '65',
  }, {
    rank: '4',
    name: '诸葛亮',
    skill1: '80',
    skill2: '96',
  }, {
    rank: '8',
    name: '关羽',
    skill1: '76',
    skill2: '80',
  }, {
    rank: '2',
    name: '孙尚香',
    skill1: '73',
    skill2: '86',
  }, {
    rank: '1',
    name: '貂蝉',
    skill1: '71',
    skill2: '82',
  }, {
    rank: '3',
    name: '张飞',
    skill1: '70',
    skill2: '85',
  }, {
    rank: '7',
    name: '露娜',
    skill1: '60',
    skill2: '84',
  }];





  tableData3: any[] = [{
    rank: '4',
    name: '诸葛亮',
    skill1: '80',
    skill2: '96',
  }, {
    rank: '9',
    name: '狄仁杰',
    skill1: '77',
    skill2: '87',
  }, {
    rank: '2',
    name: '孙尚香',
    skill1: '73',
    skill2: '86',
  }, {
    rank: '3',
    name: '张飞',
    skill1: '70',
    skill2: '85',
  }, {
    rank: '10',
    name: '常木耀',
    skill1: '92',
    skill2: '85',
  }, {
    rank: '7',
    name: '露娜',
    skill1: '60',
    skill2: '84',
  }, {
    rank: '1',
    name: '貂蝉',
    skill1: '71',
    skill2: '82',
  }, {
    rank: '8',
    name: '关羽',
    skill1: '76',
    skill2: '80',
  }, {
    rank: '5',
    name: '安其拉',
    skill1: '90',
    skill2: '75',
  }, {
    rank: '6',
    name: '亚瑟',
    skill1: '80',
    skill2: '65',
  }];

  listTitle : string = "初级程序员排名表";

  changeTitle(title) : void {
    this.listTitle = title + "排名表";
  }
}
