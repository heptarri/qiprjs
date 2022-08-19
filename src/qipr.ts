/**
 * @author qingdkj
 * @version 2.0
 */

/**
 * 存储每个控件的信息
 */
interface controlInformation {
    _type: string,
    _id: string,
    fatherID: string
}


/**
 * 创建的元素类，可为原生HTML+中所有的元素
 */
class Item {
    public controlInfo: controlInformation;
    constructor(controlInfo: controlInformation) {
        this.controlInfo = controlInfo;
    }
    public tmp: any;
    public para: any;

    /**
     * 向document.body中加入元素
     * @return 元素是否成功加入
     */
    public append(): boolean {
        this.tmp = document.getElementById(this.controlInfo.fatherID);
        this.para = document.createElement(this.controlInfo._type);
        this.para.id = this.controlInfo._id;

        if (this.tmp != null) {
            this.tmp.appendChild(this.para);
            return true;
        }
        else {
            console.error(`${this.tmp} is null.`);
            return false;
        }
    }

    /**
     * 删除加入的元素
     * @returns 是否删除成功
     */
    public delete(): boolean {
        if (this.para) {
            document.removeChild(this.para);
            return true;
        } else {
            console.error("Can't fount this element.");
            return false;
        }
    }

    /**
     * 设置元素的颜色
     * @param str 元素的StyleSheet(CSS)样式字符串
     * @returns 是否设置成功
     */
    public setStyle(str: string ): boolean {
        if (this.tmp != null) {
            this.tmp.style = str;
            return true;
        } else {
            console.error("Can't fount this element.");
            return false;
        }
    }
}