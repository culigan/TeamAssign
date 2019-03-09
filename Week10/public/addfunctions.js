
function addZones(isRetail) {
    var zones = document.getElementById('zone');
    var zones1 = document.getElementById('zone1');
    var zones2 = document.getElementById('zone2');
    var zones3 = document.getElementById('zone3');
    var zones4 = document.getElementById('zone4');
    var zones5 = document.getElementById('zone5');
    var zones6 = document.getElementById('zone6');
    var zones7 = document.getElementById('zone7');
    var label = document.getElementById('zlab');
    var label1 = document.getElementById('zlab1');
    var label2 = document.getElementById('zlab2');
    var label3 = document.getElementById('zlab3');
    var label4 = document.getElementById('zlab4');
    var label5 = document.getElementById('zlab5');
    var label6 = document.getElementById('zlab6');
    var label7 = document.getElementById('zlab7');

    if (isRetail == "retail") {
        zones.style.visibility = "visible";
        zones1.style.visibility = "visible";
        zones2.style.visibility = "visible";
        zones3.style.visibility = "visible";
        zones4.style.visibility = "visible";
        zones5.style.visibility = "visible";
        zones6.style.visibility = "visible";
        zones7.style.visibility = "visible";
        label.style.visibility = "visible";
        label1.style.visibility = "visible";
        label2.style.visibility = "visible";
        label3.style.visibility = "visible";
        label4.style.visibility = "visible";
        label5.style.visibility = "visible";
        label6.style.visibility = "visible";
        label7.style.visibility = "visible";
    }
    else {
        zones.style.visibility = "hidden";
        zones1.style.visibility = "hidden";
        zones2.style.visibility = "hidden";
        zones3.style.visibility = "hidden";
        zones4.style.visibility = "hidden";
        zones5.style.visibility = "hidden";
        zones6.style.visibility = "hidden";
        zones7.style.visibility = "hidden";
        label.style.visibility = "hidden";
        label1.style.visibility = "hidden";
        label2.style.visibility = "hidden";
        label3.style.visibility = "hidden";
        label4.style.visibility = "hidden";
        label5.style.visibility = "hidden";
        label6.style.visibility = "hidden";
        label7.style.visibility = "hidden";
    }
}

