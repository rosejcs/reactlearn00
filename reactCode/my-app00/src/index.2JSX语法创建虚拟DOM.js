// 1.导入包
import React from "react";
import ReactDOM from "react-dom";

// 2.创建虚拟DOM元素
// 参数1：创建的元素的类型，字符串格式，表示元素的标签名称
// 参数2：是一个对象或者null，表示当前这个DOM元素的属性
// 参数3：子节点（包括 其它 虚拟DOM 获取 文本字节点）
// 参数n：其它子节点
// <h1 id="myh1" title="this is a h1">这是一个大大的h1</h1>
// const myh1 = React.createElement('h1',null,'这是一个大大的h1');
// const myh1 = React.createElement('h1',{
//   id:'myh1',
//   title:'this is a h1'
// },'这是一个大大的h1');

let a = 10;
let str = "你好，中国！";
let boo = true;
let pTitle = "hoverTitle for tag-p";
const h1 = <h1>hhhhhhhhhhhh</h1>;
const arr = [<h2>这是h2</h2>, <hr />, <h3>这是h3</h3>];
const arrStr = ["毛利兰", "柯南", "小五郎"];

// 定义一个空数组，将来用来存放 名称 标签
const nameArr = [];
arrStr.forEach(item => {
  const temp = <h5>{item}</h5>;
  nameArr.push(temp);
});

// 3.使用ReactDOM把 虚拟DOM 渲染到页面上
// 参数1：要渲染的那个虚拟DOM元素
// 参数2：指定页面上一个容器
// ReactDOM.render(myh1,document.getElementById('app'))

ReactDOM.render(
  <div>
    {a + 2}
    <hr />
    {str}
    <hr />
    {boo ? "真" : "假"}
    <hr />
    <p title={pTitle}>这是p标签</p>
    <hr />
    {h1}
    <hr />
    {arr}
    <hr />
    {nameArr}
  </div>,
  document.getElementById("app")
);
