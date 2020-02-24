# QIPR 使用文档
## 让我们开始吧！

### qiprRunning()

用来测试qipr.js是否被引用或者安装到位。

#### 使用方法

``````javascript
qiprRunning();
``````



## 关于输入框

### QiTextBox_Sm(obj)

#### 使用方法

``````javascript
var textobj={
    textBoxID:"textBoxID",
    maxWidth:500,//px
    minWidth:300,//px
    Percent:70//%
}
QiTextBox_Sm(textobj);
``````

##### 关于定制的说明：

textobj中的QICC，只控制当宽度在指定范围内时的样式。正常的PC端下，请使用<style></style>>标签或新建.CSS文件或在控件上定义样式。



### QiTextBox_Ic(obj)

#### 使用方法

``````javascript
var textobj={
    textBoxID:"textBoxID",
    maxWidth:500,//px
    minWidth:300,//px
    btIcon:"./Images/TextIcon.png",
    btSize:20,//px,20px x 20px
    whereIc:"left"//or "right"   
}
QiTextBox_Ic(textobj);
``````

##### 关于定制的说明：

textobj中的QICC，只控制当宽度在指定范围内时的样式。正常的PC端下，请使用<style></style>>标签或新建.CSS文件或在控件上定义样式。



# 控件命令使用方法：

控件命令可以用来改变在qipr.js中原本固定的、不可改变的特性。

使用方法：

原本函数传入对象+QiCC:some thing.

## example:

``````javascript
//example:QiTextBox_Ic
var textobj={
    textBoxID:"textBoxID",
    maxWidth:500,//px
    minWidth:300,//px
    btIcon:"./Images/TextIcon.png",
    btSize:20,//px,20px x 20px
    whereIc:"left",//or "right"  
    
    QICC:{//there
    	controlID:"controlID",
    	todo:{
    		background:"black",
            border-radius:"1px 1px 1px 1px；"
		},
    	jsAddress:"js/main.js"
	}
}
QiTextBox_Ic(textobj);
``````

#### 注意：每一个QIPR块必须有一个且只有一个QICC !

#### todo中可以更改的属性：

1.background		background

2.color		color

3.font-size		fontSize

4.display		display

5.font-family		fontFamily

6.font-weight		fontWeight

7.width		width

8.height		height

9.border-radius		borderRadius

10.box-shadow		boxShadow

11.border		border