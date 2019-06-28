// 1.导入包
import React from "react";
import ReactDOM from "react-dom";

// 2

let a = 10;
let str = "你好，中国！";
let boo = true;
// 加key属性解决 react 遍历渲染时的warning报错
// react.development.js:188 Warning: Each child in a list should have a unique "key" prop.Check the top-level render call using <div>. See https://fb.me/react-warning-keys for more information.in h2
const arr = [<h2 key="h2">zheshih2</h2>, <h3 key="h3">zheshih3</h3>];
const arrStr = ["tom", "杰瑞", "scoff"];
// 定义一个空数组，将来用来存放 名称 标签 [方案1]
const nameArr = [];
// 注意： React中，需要把 key 添加给 被 forEach 或 map 或 for 循环直接控制的元素
arrStr.forEach((item, i) => {
  const temp = <h5 key={i}>{item}</h5>;
  nameArr.push(temp);
});

// 数组的 map 方法, map 中必须写 return
console.log(
  arrStr.map(item => {
    return item + "====>";
  })
);

let cn = 'myp';


// 3.调用 render 函数渲染
ReactDOM.render(
  <div>
    {a + 2}
    <hr />
    {str}
    <hr />
    {boo ? "真" : "假"}
    <hr />
    {arr}
    <hr />
    {arrStr}
    <hr />
    {nameArr}
    <hr />
    {arrStr.map((item,i) => {
      return <h5 key= {i}>{item + "===>"}</h5>; 
    })}
    <hr/>
    <p className={cn}>its about className of react</p>
    <label htmlFor="">its change about for to htmlFor of label</label>

  </div>,
  document.getElementById("app")
);