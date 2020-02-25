/*!
    QIPR.js version 1.0 beta
    (c) 2019-2020 QINGDKJ
    Released under the MIT License

    Date:2020/2/24 15:10
*/

function qiprRunning() {
    let IsRunningDiv = document.createElement("h1");
    IsRunningDiv.textContent = "QIPR JS IS WORKS!  VERSION:BETA 1.0  {BY QINGDKJ}";
    IsRunningDiv.style.fontSize = "40px";
    document.body.appendChild(IsRunningDiv);
}


///////////////////////////////QICC////////////////////////////////
function QICCFUNCTION(obj) {
    var controlID = obj.QICC.controlID;
    var styles = obj.QICC.todo;

    //css
    var setStyle = document.getElementById(controlID).style;
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

function CONTROLHOVER(obj){
    var isHover = 
}

//window's width
if (window.innerWidth) {
    var windowWidth = window.innerWidth;
}
else if ((document.body) && (document.body.clientWidth)) {
    var windowWidth = document.body.clientWidth;
}

//search text box
function QiTextBox_Sm(obj) {

    if (windowWidth <= obj.maxWidth && windowWidth >= obj.minWidth) {
        document.getElementById(obj.textBoxID).style.width = `${obj.Percent}%`;
        QICCFUNCTION(obj);
        CONTROLHOVER(obj);
    }
}

function QiTextBox_Ic(obj) {
    if (windowWidth <= obj.maxWidth && windowWidth >= obj.minWidth) {
        //alert("Hello");
        document.getElementById(obj.textBoxID).style.display = "none";
        //alert("Hello!");
        let iconBt = document.createElement("button");
        iconBt.style.border="0";
        iconBt.style.width = `${obj.btSize}px`;
        iconBt.style.height = `${obj.btSize}px`;
        iconBt.style.float = obj.whereIc;
        var bga = "url(" + obj.btIcon + ") no-repeat";
        iconBt.style.background = bga;
        document.body.appendChild(iconBt);

        function textBoxChange() {
            document.getElementById(obj.textBoxID).style.display = "inline";
            document.getElementById(obj.textBoxID).style.width = "80%";
            document.getElementById(obj.textBoxID).style.height = "30px";
            document.getElementById(obj.textBoxID).style.fontSize = "20px";
            document.getElementById(obj.textBoxID).style.position = "relative";
            document.getElementById(obj.textBoxID).style.top = "50px";

        }

        function textBoxClick() {
            iconBt.onclick = function () {
                textBoxChange();
                //iconBt.style.display = "none";
                iconBt.onclick = function () {
                    document.getElementById(obj.textBoxID).style.display = "none";

                    iconBt.onclick = function () {
                        textBoxClick();
                    }
                }
            }
        }
        textBoxClick();
        QICCFUNCTION(obj);

        CONTROLHOVER(obj);
        
    }
    //alert("START");

    
}
