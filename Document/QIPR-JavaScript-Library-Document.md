# QIPR文档 {version: 2.0 beta}

## 检验是否安装成功？

### qiprRunning()

用于检测是否安装qipr.js成功。用法：

``````javascript
qiprRunning();
``````

## 改变一个控件的样式

### QiControl_Sm(obj)

这个函数可以在规定的窗口大小范围内使控件变成以百分比显示的模式，随着窗口大小的改变而改变。

使用方法：

``````javascript
//首先，你需要定义一个任意名称的对象——这里面存放着你对这个控件适配性要求的所有信息。
var textObj = {
    controlID:"controlID",//这里面存放着你要改变的控件的ID
    maxWidth:1000,//这是规定屏幕宽度的上限，单位px
    minWidth:300,//这是规定屏幕宽度的下限，单位px
    Percent:70，//这是你要改变的控件在规定屏幕大小范围内所占宽度的百分比，%
    ChangeID:"ChangeID"//方便地改变变化后的样式,使用JavaScript
}
QiControl_Sm(textObj);//运用函数——传入你的textObj！
``````

### QiControl_Ic(obj)

这个函数可以在规定的窗口大小范围内使一个控件变成按钮的形式，方便对界面进行布局，多用于输入框。

使用方法：

``````javascript
var textobj={
    controlID:"controlID",
    maxWidth:500,//px
    minWidth:300,//px
    btIcon:"./Images/TextIcon.png",//在规定屏幕上用以替换控件的按钮上的图片
    btSize:20,//px,20px x 20px//用于替换的按钮的大小
    whereIc:"left",//往哪里浮动？left or right   
    ChangeID:"ChangeID"//方便地改变变化后的样式,使用JavaScript
}
QiControl_Ic(textobj);
``````

### QiImage_Float(obj)

这个函数可以在规定的窗口大小范围内改变图片的位置，例如露左半边或者右半边，使网页更具有艺术感。

使用方法：

``````javascript
var textobj={
    controlID:"controlID",
    maxWidth:500,
    minWidth:300,
    imageAddress:"./images/phone.jpg",
    whereImage:"left",//靠哪一方？left or right
    imageHeight:300,//图片的高度是多少？单位:px
    ChangeID:"ChangeID"//方便地改变变化后的样式,使用JavaScript
}
QiImage_Float(textobj);
``````



### QiImage_Hidden(obj)

这个函数可以在规定的窗口大小范围内直接隐藏图片。不建议使用。

使用方法:

``````javascript
var textobj={
    controlID:"controlID",
    maxWidth:500,
    minWidth:300,
    ChangeID:"ChangeID"//方便地改变变化后的样式,使用JavaScript
}
QiImage_Hidden(textobj);
``````

### QiImage_Show(obj)

这个函数可以在规定的窗口大小范围内显示一张图片。可与QiImage_Hidden(obj)一起使用。

使用方法:

``````javascript
var textobj={
    controlID:"controlID",
    maxWidth:500,
    minWidth:300,
    ChangeID:"ChangeID"//方便地改变变化后的样式,使用JavaScript
}
QiImage_Show(textobj);
``````

### QiToolBar(obj)

这个函数可以在规定的窗口大小范围内将工具栏列表收拢到一个小的Button中，展开则为options。

使用方法：

``````javascript
var textobj={
    controlID:"controlID",
    maxWidth:500,
    minWidth:300,
    List:["Home","Download","About"],//哪些链接要被放在工具栏中？
    whereToolBar:"Left",//工具栏在哪里？left or top or right or bottom
    ChangeID:"ChangeID"//方便地改变变化后的样式,使用JavaScript
    
}//如果您想使List中的"Home""Download""About"变成链接的话，请使用QICC引入自建js。
``````



**最后：QIPR.js中所有函数的定制样式仅对在规定的窗口大小范围内有效！**

## 触发器

利用触发器，您可以非常方便的对您的控件进行交互动画的制作。

### hover:鼠标移上时操作

例如，如果您想当鼠标移动到一个控件上时，使控件的背景发生变化——

您可以在上面您定义的对象中的"whereIc"之后添加如下语句：

``````javascript
tr:{
    hover:{
    	background:"black"
	}
}
``````

如果您担心您的效果过于生硬，我们默认开启了trasition:all 0.5s的样式。如果您感觉不满意，可以使用后面所说的QICC控件命令来改变。

### active:鼠标点击时操作

同理，如果您想您的控件在点击时发生变化，您可以在同样的地方添加如下语句：

``````javascript
tr:{
    active:{
    	background:"red"
	}
}
``````

目前，触发器可以更改的属性有：

> background
>
> color
>
> border
>
> borderRadius
>
> boxShadow
>
> fontSize
>
> fontFamliy
>
> width
>
> height

当然，我们后续会继续更新

### 自定义动画

如果您想自定义动画，请使用外接js。

## QICC控件命令

一般来说，qipr.js自定的控件样式是不容易被改变的。所以，我们可以借助控件命令来实现改变这些样式。

一般的QICC控件命令一般是下面这样的面孔：

``````javascript
QICC:{
    controlID:"controlID",
    todo:{
        background:"black",
        borderRadius:"10px 10px 10px 10px"
    },
    jsAddress:"js/main.js"
}
``````

**注意，每个被传入的对象中必须有且只有一个QICC控件命令组！**

现在，我们来详细解释一下每一行的含义：

> controlID:"controlID",

这是要操纵的控件的ID,一般情况下与前面的controlID保持一致。

> todo

todo中是要改变的CSS样式，只作用在规定屏幕大小内的页面上。下面就是需要执行的CSS代码，目前支持：

> background
>
> color
>
> border
>
> borderRadius
>
> boxShadow
>
> fontSize
>
> fontFamliy
>
> width
>
> height

我们还会继续更新。

> jsAddress:"js/main.js"

你可以从这里引入你自己书写的js代码——他们会覆盖掉qipr中的样式。



## 我们为您准备的一些CSS模板——QIC

为了广大的网站开发者能够快速的构建页面，我们提供了一些CSS样式用来参考。

模板中所有的控件样式在所有窗口大小下都有效。

以下所有函数的使用方式如下：

``````javascript
qisobj={
    controlID:"controlID",
    mainColor:"green",//主色调
    secondColor:"blue"，//次要的色调
    thirdColor:"yellow",//陪衬用的色调
}
``````

如果您想改变这些按钮固有的样式，您可以：

> 1、直接修改源码。由于qipr遵守MIT License，所以你可以将其再次发布
>
> 2、使用<style></style>标签来改变
>
> 3、在html标签中直接定义

### QIS_Button_LogIn(qisobj)

这个函数提供了一种按钮的样式。他具有扁平化的特点，又充满了灵动的美感

我们建议您将其作为比较重要的按钮的样式，例如：登录/注册/进入 等。



### QIS_Button_Back(qisobj)

这个函数提供了一些不太引人注目的小按钮的样式。他不引人注目，但是足够精致。

我们建议您将其作为一些角落里的按钮的样式，例如： 返回，下一步 等。



### QIS_Button_Text(qisobj)

这个函数就很特别了——它提供了一种文字的按钮，适用于信息较多的情况。

我们建议您可以将其作为页面底部的copyright的样式。



### QIS_Text_Input(qisobj)

这个函数为您的输入框提供了一种简约又不失优雅的样式。

我们建议您将其作为 登录/注册 中的输入框等。



# 一些声明

## 关于作者

QIPR.js的作者是QINGDKJ,中学生一枚。

本JavaScript Library 遵循MIT开源协议。

## 关于改进QIPR.JS

我希望qipr.js能给大家带来一些帮助。同时，我恳切的请求您，如果您在使用qipr的过程中遇到任何不满，哪怕是对js中任何命名规则的不满，请您提出来。我会尽心尽力的将他做到完美，我也将希望寄托给强大的开源社区，我相信它会给予qipr.js生机和前程。

源代码地址:  https://gitee.com/qingdkj/QIPR-JavaScript-Labrary