# Modern Javascript

## Basic Knowledge

### Hello world

1. script 标签
2. script 标签的属性
   - type：HTML4 标准
   - language：脚本使用的语言
3. script 外部脚本
   - 通过 `src` 属性添加路径

### 代码结构

- 最好使用分号结束一条语句
- 注释
  ```javascript
  // 注释
  /*注释*/
  // 注意！ 不能嵌套注释
  ```

### 现代模式，"use strict"

为了保证旧的功能能够使用，大部分的修改是默认不生效的。你需要一个特殊的指令 —— `"use strict"` 来明确地激活这些特性。

`use strict` 需要放在脚本的最顶部

> 当使用 class 和 module 时，会自动启用 use strict 。我们欢迎启用 use strict.

### 变量

使用`let`关键字创建<mark>变量</mark>

**变量命名**：

1. 变量名必须仅包含字母、数字、$、\_
2. 首字母不能是数字

使用`const`创建<mark>常量</mark>

### 数据类型

动态类型: 变量被定义后，类型可以改变

- String --> 字符串
  - 双引号和单引号是简单引用
  - 反引号可以把变量和表达式包装在`${...}`中
- Number --> 代表整数和浮点数
  - Number 中的特殊数值
    - Infinity 无穷大
    - -Infinity
    - NaN 计算错误
- BigInt --> Number 类型在表示`正负(2^53 - 1)`时精度会出现问题
  - 数字后有 `n` 标识
- Boolean --> true and false
- Object and Symbol
  - Object： 对象
  - Symbol： 创建对象唯一标识符

特殊值：

- null
  - 不属于上述任何一种类型
  - 无、空、值未知
- undefined
  - 不属于上述任何一种类型
  - 未被赋值

typeof 运算符：
返回参数的类型

### 交互：alert、prompt、confirm

alert  
弹窗信息

prompt  
交互的弹窗,返回用户输入的值或default值
- 两个参数
    - title                 --> 显示给用户的文本
    - default(可选参数)      --> 指定input框的初始值

confirm  
有确认和取消两个按钮的弹窗