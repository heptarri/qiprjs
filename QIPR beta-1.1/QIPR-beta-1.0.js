/*!
    QIPR.js version 1.0 beta
    (c) 2019-2020 QINGDKJ
    Released under the MIT License

    Date:2020/2/24 15:10
*/

console.log("By qipr.js , it works.");




//检测qipr.js是否安装成功
function qiprRunning() {
    let qiprRunningControl = document.createElement("h1");
    qiprRunningControl.textContent = "QIPR.js is works.Enjoy it!  {By QINGDKJ , beta 1.1}  latest update:2020/2/24";
    qiprRunningControl.style.fontSize = "40px";
    document.body.appendChild(qiprRunningControl);
}


function QICCFUNCTION(obj) {
    var controlID = obj.QICC.QcontrolID;
    var styles = obj.QICC.todo;

    //css
    var setStyle = document.getElementById(obj.controlID).style;
    try {
        setStyle.background = styles.background;
        setStyle.color = styles.color;
        setStyle.fontSize = styles.fontSize;
        setStyle.display = styles.display;
        setStyle.fontFamily = styles.fontFamily;
        setStyle.fontWeight = styles.fontWeight;
        setStyle.width = styles.width;
        setStyle.height = styles.height;
        setStyle.borderRadius = styles.borderRadius;
        setStyle.boxShadow = styles.boxShadow;
        setStyle.border = styles.border;
    } finally {
        console.log("END.");
    }

    //js
    let ImportJS = document.createElement("script");
    try {
        ImportJS.src = obj.QICC.jsAddress;
    } finally {
        console.log("js end.");
    }

}


function hover(obj) {
    try {
        var controlStyle = document.getElementById(obj.controlID).style;
        var TraStyle = obj.tr.hover;

        controlStyle.background = TraStyle.background;
        controlStyle.color = TraStyle.color;
        controlStyle.border = TraStyle.border;
        controlStyle.borderRadius = TraStyle.borderRadius;
        controlStyle.boxShadow = TraStyle.boxShadow;
        controlStyle.fontSize = TraStyle.fontSize;
        controlStyle.fontFamily = TraStyle.fontFamily;
        controlStyle.width = TraStyle.width;
        controlStyle.height = TraStyle.height;
    } finally {
        console.log("HOVER TRIGGER IS END.");
    }


}
function active(obj) {
    try {
        var controlStyle = document.getElementById(obj.controlID).style;
        var TraStyle = obj.tr.active;

        controlStyle.background = TraStyle.background;
        controlStyle.color = TraStyle.color;
        controlStyle.border = TraStyle.border;
        controlStyle.borderRadius = TraStyle.borderRadius;
        controlStyle.boxShadow = TraStyle.boxShadow;
        controlStyle.fontSize = TraStyle.fontSize;
        controlStyle.fontFamily = TraStyle.fontFamily;
        controlStyle.width = TraStyle.width;
        controlStyle.height = TraStyle.height;
    } finally {
        console.log("ACTIVE TRIGGER IS END.");
    }
}

//qipr control (small)
function QiControl_Sm(obj) {
    var control = document.getElementById(obj.controlID);
    if (window.innerWidth < obj.maxWidth && window.innerWidth > obj.minWidth) {
        control.style.width = `${obj.Percent}%`;
        try{
            QICCFUNCTION(obj);
            hover(obj);
            active(obj);
        }finally{
            console.log("QICCFUNCTION  HOVER  ACTIVE  LOAD SUCCESSED!");
        }
    }
}

function QiControl_Ic(obj) {

    var control = document.getElementById(obj.controlID);
    if (window.innerWidth < obj.maxWidth && window.innerWidth > obj.minWidth) {

        control.style.display = "none";
        let ControlButton = document.createElement("button");

        ControlButton.style.background = "url(" + obj.btIcon + ") no-repeat";
        ControlButton.style.width = `${obj.btSize}px`;
        ControlButton.style.height = `${obj.btSize}px`;
        ControlButton.style.float = obj.whereIc;
        ControlButton.style.border = "0";

        document.body.appendChild(ControlButton);//添加替换的按钮
        function ControlClick() {
            ControlButton.onclick = function () {
                control.style.display = "inline";
                ControlButton.onclick = function () {
                    control.style.display = "none";

                    ControlButton.onclick = function () {
                        ControlClick();//多次点击的反复
                    }
                }
            }
        }
        ControlClick();
        try{
            QICCFUNCTION(obj);
            hover(obj);
            active(obj);
        }finally{
            console.log("QICCFUNCTION  HOVER  ACTIVE  LOAD SUCCESSED!");
        }
    }
}



