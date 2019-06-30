# 002_react_创建组建的方法

#### 1.方法1：创建组建的方式

> 使用构造函数来创建组建，如果要接受外界传递的数据，需要在构造函数的参数列表中使用`props`来接收，必须要想外`return`一个合法的JSX创建的虚拟DOM；
>
> 

+ 创建组件

```
function Hello（） {
	// return null
	return <div>Hello 组件</div>
}
```

+ 为组件传递数据：

```
// 使用组件并为组件传递 props 数据
<Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>

// 在构造函数中,使用 props 形参，接收外界传递过来的额数据
function Hello(props) {
	// props.name="xz"
	console.log(props);
	// 结论: 不论 Vue 还是 React ，组件中的 props 永远是只读，不能重复赋值
	
	return <div>这是 Hello 组件 --- {props.name} --- {props.age} --- {props.gender}</div>
}
```



###### 1.父组件向子组件传递数据

2.使用	` {...obj} `	属性扩散传递数据

3.将组建封装到单独的文件中

###### 4.注意：组件的名称必须是大写

#### 2.方法2：创建组件的方式

> 使用	`class`	关键字来创建组件

#### 了解ES6中 `class`	关键字的使用

###### 1.class中 `constructor`	的基本使用

2.实例属性和实例方法

3.静态属性和静态方法

4.使用	`extends`	关键字来实现继承

#### 基于class关键字创建组件

