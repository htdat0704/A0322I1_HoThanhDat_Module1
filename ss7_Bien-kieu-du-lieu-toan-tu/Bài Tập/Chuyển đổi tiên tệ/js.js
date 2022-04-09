var submitelement = document.getElementById("submit");
submitelement.addEventListener("click",Clickconvert);
function Clickconvert() {
    let Amount = parseInt(document.getElementById("Amount").value);
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let convert

    if(From == "VN"){
        if(To == "VN"){
            convert = Amount;
        }else if (To == "CN"){
            convert = Amount/3592;
        }else if (To == "US"){
            convert = Amount/23101;
        }else if (To == "RUS"){
            convert = Amount/282;
        }else if (To == "EU"){
            convert = Amount/25169;
        }
    }
    if(From == "CN"){
        if(To == "VN"){
            convert = Amount*3592;
        }else if (To == "CN"){
            convert = Amount;
        }else if (To == "US"){
            convert = Amount*0.16;
        }else if (To == "RUS"){
            convert = Amount*12;
        }else if (To == "EU"){
            convert = Amount*0.14;
        }
    }
    if(From == "US"){
        if(To == "VN"){
            convert = Amount*23101;
        }else if (To == "CN"){
            convert = Amount;
        }else if (To == "US"){
            convert = Amount;
        }else if (To == "RUS"){
            convert = Amount*6;
        }else if (To == "EU"){
            convert = Amount*0.92;
        }
    }
    if(From == "RUS"){
        if(To == "VN"){
            convert = Amount*295;
        }else if (To == "CN"){
            convert = Amount*0.082;
        }else if (To == "US"){
            convert = Amount*0.014;
        }else if (To == "RUS"){
            convert = Amount;
        }else if (To == "EU"){
            convert = Amount*0.012;
        }
    }
    if(From == "EU"){
        if(To == "VN"){
            convert = Amount*25169;
        }else if (To == "CN"){
            convert = Amount*6.91;
        }else if (To == "US"){
            convert = Amount*1.09;
        }else if (To == "RUS"){
            convert = Amount*86;
        }else if (To == "EU"){
            convert = Amount;
        }
    }

    document.getElementById("result").innerHTML = "Result: "+convert+" "+To;
}