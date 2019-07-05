function animationStop() {
    var h = document.getElementById("hummerpic");
    var l = document.getElementById("chacklistpic");
    var b = document.getElementById("bookpic");
    var s = document.getElementById("scrollpic");

    if (h.className == "shake-bottom")
    {
        h.className = "shake-bottom-stop";
        l.className = "shake-bottom-stop";
        b.className = "shake-bottom-stop";
        s.className = "shake-bottom-stop";
        $("#carouselExampleIndicators").carousel('pause');
        document.getElementById("noneMove").value = "החזר תזוזות";
    }
    else {
        document.getElementById("noneMove").value = "הפסק תזוזות";
        h.className = "shake-bottom";
        l.className = "shake-bottom";
        b.className = "shake-bottom";
        s.className = "shake-bottom";
        $("#carouselExampleIndicators").carousel('cycle');
    }
}

function onclickShow1() {
    var x = document.getElementById("hidden1");
    if (x.className == "hidden") {
        document.getElementById("Button1").style.color = "#EE0000";
        x.className = ""
    } else {
        document.getElementById("Button1").style.color = "#43757A";
        x.className = "hidden"
    }
    
}

function onclickShow2() {
    var x = document.getElementById("hidden2");
    if (x.className == "hidden") {
        document.getElementById("Button2").style.color = "#EE0000";
        x.className = ""
    } else {
        document.getElementById("Button2").style.color = "#43757A";
        x.className = "hidden"
    }
}

function onclickShow3() {
    var x = document.getElementById("hidden3");
    if (x.className == "hidden") {
        document.getElementById("Button3").style.color = "red";
        x.className = ""
    } else {
        document.getElementById("Button3").style.color = "#43757A";
        x.className = "hidden"
    }
}

function onclickShow4() {
    var x = document.getElementById("hidden4");
    if (x.className == "hidden") {
        document.getElementById("Button4").style.color = "red";
        x.className = ""
    } else {
        document.getElementById("Button4").style.color = "#43757A";
        x.className = "hidden"
    }
}


//function onclickCradit() {
//    var x = document.getElementById("craditsId");
//    if (x.className == "hidden") {

//        x.className = ""
//    } else {
//        x.className = "hidden"
//    }
//}
