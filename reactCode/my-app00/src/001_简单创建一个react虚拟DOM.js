// 1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 2.创建虚拟DOM元素
// 参数1：创建的元素的类型，字符串格式，表示元素的标签名称
// 参数2：是一个对象或者null，表示当前这个DOM元素的属性
// 参数3：子节点（包括 其它 虚拟DOM 获取 文本字节点）
// 参数n：其它子节点

// <h1 id="myh1" title="this is a h1">这是一个大大的h1</h1>
// const myh1 = React.createElement('h1',null,'这是一个大大的h1');
const myh1 = React.createElement('h1',{
  id:'myh1',
  title:'this is a h1'
},'这是一个大大的h1');

// 创建一个div，存放h1
const mydiv = React.createElement('div',{
  id:'mydiv',
  title:'this is a div'
},myh1);


// 3.使用ReactDOM把 虚拟DOM 渲染到页面上
// 参数1：要渲染的那个虚拟DOM元素
// 参数2：指定页面上一个容器
// ReactDOM.render(myh1,document.getElementById('app'))
ReactDOM.render(mydiv,document.getElementById('app'));