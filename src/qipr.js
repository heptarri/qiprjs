/**
 * @author qingdkj
 * @version 2.0
 */
/**
 * 创建的元素类，可为原生HTML+中所有的元素
 */
var Item = /** @class */ (function () {
    function Item(controlInfo) {
        this.controlInfo = controlInfo;
    }
    /**
     * 向document.body中加入元素并设置好元素的特性
     * @return 元素是否成功加入
     */
    Item.prototype.append = function () {
        this.tmp = document.getElementById(this.controlInfo.fatherID);
        this.para = document.createElement(this.controlInfo._type);
        this.para.id = this.controlInfo._id;
        if (this.tmp != null) {
            this.tmp.appendChild(this.para);
            return true;
        }
        else {
            console.error("".concat(this.tmp, " is null."));
            return false;
        }
    };
    /**
     * 删除加入的元素
     * @returns 是否删除成功
     */
    Item.prototype["delete"] = function () {
        if (this.para) {
            document.removeChild(this.para);
            return true;
        }
        else {
            console.error("Can't fount this element.");
            return false;
        }
    };
    return Item;
}());
