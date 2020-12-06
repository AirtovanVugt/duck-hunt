
var duckie = document.getElementById("duck");
var achtergrond = document.getElementById("achtergrond")
var raakscore = document.getElementById("raakscore");
var misscore = document.getElementById("misscore");

var raakteller = 0;
var misteller = 0;

duckie.addEventListener("click", function(){
	raakteller++;
	raakscore.innerHTML = raakteller;
	if(raakteller == 20){
		alert("je hebt " + raakteller + " keer geraakt en " + misteller + " keer gemist");
		location.reload();
	}
});

achtergrond.addEventListener("click", function(){
	misteller++;
	misscore.innerHTML = misteller;
	if(misteller == 20){
		alert("je hebt " + raakteller + " keer geraakt en " + misteller + " keer gemist");
		location.reload();
	}
});

var positiey = 350;
var positiex = 700;

setInterval(function(){
	richtingen = ["noord", "noordoost", "oost", "zuidoost", "zuid", "zuidwest", "west", "noordwest"]
	var nummer = Math.floor(Math.random() * richtingen.length);
	var richting = richtingen[nummer]
	console.log(nummer)

	if(richting == "noord"){
		if(positiey < 50){
			positiey = 125;
		}
		else{
			positiey -= 75;
			duckie.style.top = positiey + "px";
		}
	}

	else if(richting == "noordoost"){
		if(positiey < 50){
			positiey = 125;
		}
		else if(positiex > 1361){
 			positiex = 1211;
		}
		else{
			positiey -= 75;
			duckie.style.left = positiex + "px";
			positiex += 75;
			duckie.style.top = positiey + "px";
		}
	}

	else if(richting == "oost"){
		if(positiex > 1261){
			positiex = 1186;
		}
		else{
			positiex += 75;
			duckie.style.left = positiex + "px";
		}
	}

	else if(richting == "zuidoost"){
		if(positiey > 500){
			positiey = 425;
		}
		else if(positiex > 1286){
			positiex = 1211;
		}
		else{
			positiey += 75;
			duckie.style.top = positiey + "px";
			positiex += 75;
			duckie.style.left = positiex + "px";
		}
	}

	else if(richting == "zuid"){
		if(positiey > 500){
			positiey = 425;
		}
		else{
			positiey += 75;
			duckie.style.top = positiey + "px";
		}
	}

	else if(richting == "zuidwest"){
		if(positiey > 500){
			positiey = 425;
		}
		else if(positiex < 50){
			positiex = 125;
		}
		else{
			positiey += 75;
			duckie.style.top = positiey + "px";
			positiex -= 75;
			duckie.style.left = positiex + "px";
		}
	}

	else if(richting == "west"){
		if(positiex < 50){
			positiex = 125;
		}
		else{
			positiex -= 75;
			duckie.style.left = positiex + "px";
		}
	}

	//noordwest
	else{
		if(positiey < 50){
			positiey = 125;
		}
		else if(positiex < 50){
			positiex = 125;
		}
		else{
			positiey -= 75;
			duckie.style.top = positiey + "px";
			positiex -= 75;
			duckie.style.left = positiex + "px";
		}
	}

}, 500);