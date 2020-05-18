## rc_upload
#### 文件上传


## report_table
- 通过js操作dom，只要没有被挂载在页面就不会引起渲染，所以不会引起重绘、回流等问题？
- React/d3等库的key标识如何实现
- addEventListen 与直接在dom元素上添加的事件有何异同
- random函数生成随机数相同的机率
- 搭建es6转es5环境
- JS中的(强制)类型转换
- ES5中for...of遍历数组、类数组、对象、Map&Set
- table单元格自适应内容宽高：目前的table无法实现, 通过计算设置colgroup控制列宽
## rc_table
#### (function(){ ... })()，

## task
##### 封装函数库样式表
##### 动态表格
- 参考：调用js函数，myScroll('div_Main',1,1,'tableID')
     　　第一个参数：要锁定的table外面的div的ID，
     　　第二个参数：要锁定的行数（从上面数），可以是0，表示不锁定行。
     　　第三个参数：要锁定的列数（从左面数），可以是0，表示不锁定列。
     　　第四个参数：要锁定的table的ID。
## target
##### 专注原生
- 你不知道的JS
- 原生JS封装组件

## 技能点
#### window.onload()
- onload是指dom的生成和资源完全加载（比如flash、图片）出来后才执行
#### window.onready()
- ready只是dom结构加载完毕，便视为加载完成(此时图片没有加载完毕)
#### innerHTML & innerText
- xzzd
#### appendXXX
- append()
- appendChild()
- appendData()
- appendItem()
- appendMedium()
- appendRule()
- appendBuffer()
- appendWindowEnd
- appendWindowStart
#### DocumentFragment

#### Document.createElementNS()

#### line-height(height)


#### 事件委托
##### 原理
     事件冒泡
##### 优点
     - 减少事件注册，大量减少内存占用---浏览器重绘重排
     - 新增元素实现动态绑定事件
##### 适合用事件委托的事件
     click，mousedown，mouseup，keydown，keyup，keypress
##### 实现对onchange事件代理
     onfocusout 实现 onblur事件， onblur事件不支持冒泡
##### React事件机制