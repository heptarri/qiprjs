# qipr.js 帮助文档

## 什么是qipr.js?
qipr.js是一个帮助您利用纯JavaScript而控制HTML页面元素的库，封装了一系列控制函数，轻量，简洁，活力。

## 如何安装？
你可以直接在HTML文档的<head>标签中直接引用qipr.js，由于其轻量而简洁，几乎不会影响页面的加载性能。

## 使用文档

### HTML页面元素控制(Item类)
`Item类`可以提供一组方法，用以在HTML页面上构建元素和设置元素性质。
首先，若创建一个元素，需要创建一个`Item类`：
```javascript
    var item = new Item(obj);
```

obj的一个例子如下:
```javascript
    var obj = {
        Type:       'div',      //创建元素的类型
        ID:         'test',     //赋予元素的ID
        fatherID:   'body_id'   //元素所在的父元素的ID
    }
```

在定义了Item了之后，该类会构建一个元素，但不会显示到页面上。随后，obj所提供的的信息将会被一一对应到元素的属性上。对该Item类可以执行的操作函数有：
- append() 将构建好的元素添加到obj指定父元素的尾部，布尔类型返回值为是否添加成功。
- remove() 将已经`append()`到页面上的元素删除。
- setAttr(att,val) 设置已经`append()`到页面的元素的属性，`att`为属性名称，`val`为属性值，布尔类型返回值为是否设置成功。
- setStyle(str) 设置已经`append()`到页面的元素的css样式，`str`为元素的CSS，例如:
```css
    'border:0; padding:0;'
```
- hide(bol) 将已经`append()`到页面的元素隐藏，bool类型参数`bol`为隐藏后是否占位，布尔类型返回值为是否隐藏成功。
- show() 将已经`append()`到页面且`hide()`的元素显示出来，布尔类型返回值为是否显示成功。
