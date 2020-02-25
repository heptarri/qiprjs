# QIPR文档

## 检验是否安装成功？

### qiprRunning()

用于检测是否安装qipr.js成功。用法：

``````javascript
qiprRunning();
``````

## 改变一个控件的样式

### QiControl_Sm(obj)

这个函数可以在较小屏幕上使控件变成以百分比显示的模式。在规定屏幕的大小范围内随着窗口大小的改变而改变。

使用方法：

``````javascript
//首先，你需要定义一个任意名称的对象——这里面存放着你对这个控件适配性要求的所有信息。
var textObj = {
    controlID:"controlID",//这里面存放着你要改变的控件的ID
    maxWidth:1000,//这是规定屏幕宽度的上限，单位px
    minWidth:300,//这是规定屏幕宽度的下限，单位px
    Percent:70//这是你要改变的控件在规定屏幕大小范围内所占宽度的百分比，%
}
QiControl_Sm(textObj);//运用函数——传入你的textObj！
``````

### QiControl_Ic(obj)

这个函数可以在较小屏幕上可以使一个控件变成按钮的形式，方便对界面进行布局，多用于输入框。

使用方法：

``````javascript
var textobj={
    controlID:"controlID",
    maxWidth:500,//px
    minWidth:300,//px
    btIcon:"./Images/TextIcon.png",//在规定屏幕上用以替换控件的按钮上的图片
    btSize:20,//px,20px x 20px//用于替换的按钮的大小
    whereIc:"left"//往哪里浮动？left or right   
}
QiControl_Ic(textobj);
``````





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