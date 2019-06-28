import React from "react";
import ReactDOM from "react-dom";

// 导入 Hello 组件
import Hello from "./component/Hello.jsx"

const dog = {
  name: "big yellow",
  age: 3,
  gender: "male"
};
// 3.调用 render 函数渲染 jsx XML 比 HTML 严格多了
ReactDOM.render(
  <div>
    123
    {/* 直接把 组件的名称，以标签形式，丢到页面上即可 */}
    {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}/> */}
    <Hello {...dog} />
  </div>,
  document.getElementById("app")
);


var o2 = {
  age: 22,
  address: 'bj',
  phone: '1399'
}

var o1 = {
  oname:'zs',
  age:o2.age,
  address: o2.address,
  phone: o2.phone
}

console.log(o1)