/**
 * @author qingdkj
 * @version 2.0
 */

/**
 * 存储每个控件的信息
 */
interface controlInformation {
    Type: string,
    ID: string,
    fatherID: string
}


/**
 * 创建的元素类，可为原生HTML+中所有的元素
 */
class Item {
    public controlInfo: controlInformation;
    public fa: any;
    public para: any;

    /**
     * 构造，用以初始化
     * @param controlInfo 传入的元素信息
     */
    constructor(controlInfo: controlInformation) {
        this.controlInfo = controlInfo;
    }

    /**
     * 向document.body中加入元素
     * @returns 元素是否成功加入
     */
    public append(): boolean {
        this.fa = document.getElementById(this.controlInfo.fatherID);
        this.para = document.createElement(this.controlInfo.Type);
        this.para.id = this.controlInfo.ID;

        if (this.fa != null) {
            this.fa.appendChild(this.para);
            return true;
        }
        else {
            console.error(`${this.fa} is null.`);
            return false;
        }
    }

    /**
     * 删除加入的元素
     * @returns 是否删除成功
     */
    public remove(): boolean {
        var obj = document.getElementById(this.controlInfo.ID);
        if (obj != null) {
            document.removeChild(this.para);
            return true;
        } else {
            console.error("Can't fount this element.");
            return false;
        }
    }

    /**
     * 向已添加到页面中的元素添加属性
     * @param att 所添加的属性
     * @param val 添加的属性值 
     * @returns 是否添加成功
     */
    public setAttr(att: string, val: string): boolean {
        var obj = document.getElementById(this.controlInfo.ID);
        if (obj != null) {
            obj.setAttribute(att, val);
            return true;
        } else {
            console.error("Can't fount this element.");
            return false;
        }
    }

    /**
     * 向已添加到页面中的元素设置元素样式
     * @param str 元素的StyleSheet(CSS)样式字符串
     * @returns 是否设置成功
     */
    public setStyle(str: string): boolean {
        var obj = document.getElementById(this.controlInfo.ID);
        if (obj != null) {
            this.setAttr('style', str);
            return true;
        } else {
            console.error("Can;t fount this element.");
            return false;
        }
    }
}

