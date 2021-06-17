var Player = "Player 1"
var chance = Player + "'s chance"
var disabledInputs = 0

document.getElementById("chance").innerHTML = chance

function check() {
    
    var input1 = document.getElementById("input1").innerText
    var input2 = document.getElementById("input2").innerText
    var input3 = document.getElementById("input3").innerText
    var input4 = document.getElementById("input4").innerText
    var input5 = document.getElementById("input5").innerText
    var input6 = document.getElementById("input6").innerText
    var input7 = document.getElementById("input7").innerText
    var input8 = document.getElementById("input8").innerText
    var input9 = document.getElementById("input9").innerText
    var result = document.getElementById("result")
    var reset = document.getElementById("reset")

    if(input1 === "x" && input2 === "x" && input3 === "x"){
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }

    else if(input1 === "x" && input4 === "x" && input7 === "x"){
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input1 === "x" && input5 === "x" && input9 === "x"){
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input3 === "x" && input6 === "x" && input9 === "x"){
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input3 === "x" && input5 === "x" && input7 === "x"){
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input2 === "x" && input5 === "x" && input8 === "x"){
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input4 === "x" && input5 === "x" && input6 === "x"){
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input7 === "x" && input8 === "x" && input9 === "x"){
        result.innerHTML = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }

    else if(input1 === "o" && input2 === "o" && input3 === "o"){
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input1 === "o" && input4 === "o" && input7 === "o"){
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input1 === "o" && input5 === "o" && input9 === "o"){
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input3 === "o" && input6 === "o" && input9 === "o"){
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input3 === "o" && input5 === "o" && input7 === "o"){
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input2 === "o" && input5 === "o" && input8 === "o"){
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input4 === "o" && input5 === "o" && input6 === "o"){
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }
    
    else if(input7 === "o" && input8 === "o" && input9 === "o"){
        result.innerHTML = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }

    else if(disabledInputs === 9){
        result.innerHTML = "Match Draw!"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
        disable()
    }

}

function changeText(id = String) {

    if (Player === "Player 1") {

        disabledInputs = disabledInputs + 1
        document.getElementById(id).innerHTML = "x"
        document.getElementById(id).disabled = true
        check()
        Player = "Player 2"
        var chance = Player + "'s chance"
        document.getElementById("chance").innerHTML = chance

    }

    else if (Player === "Player 2") {

        disabledInputs = disabledInputs + 1
        document.getElementById(id).innerHTML = "o"
        document.getElementById(id).disabled = true
        check()
        Player = "Player 1"
        var chance = Player + "'s chance"
        document.getElementById("chance").innerHTML = chance

    }
}

function enable() {
    document.getElementById("input1").disabled = false
    document.getElementById("input2").disabled = false
    document.getElementById("input3").disabled = false
    document.getElementById("input4").disabled = false
    document.getElementById("input5").disabled = false
    document.getElementById("input6").disabled = false
    document.getElementById("input7").disabled = false
    document.getElementById("input8").disabled = false
    document.getElementById("input9").disabled = false
    document.getElementById("input1").innerHTML = ""
    document.getElementById("input2").innerHTML = ""
    document.getElementById("input3").innerHTML = ""
    document.getElementById("input4").innerHTML = ""
    document.getElementById("input5").innerHTML = ""
    document.getElementById("input6").innerHTML = ""
    document.getElementById("input7").innerHTML = ""
    document.getElementById("input8").innerHTML = ""
    document.getElementById("input9").innerHTML = ""
    document.getElementById("result").style.visibility = "hidden"
    document.getElementById("reset").style.visibility = "hidden"
    Player = "Player 1"
    document.getElementById("chance").innerHTML = chance
    disabledInputs = 0
}

function disable() {
    document.getElementById("input1").disabled = true
    document.getElementById("input2").disabled = true
    document.getElementById("input3").disabled = true
    document.getElementById("input4").disabled = true
    document.getElementById("input5").disabled = true
    document.getElementById("input6").disabled = true
    document.getElementById("input7").disabled = true
    document.getElementById("input8").disabled = true
    document.getElementById("input9").disabled = true
}