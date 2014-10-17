var paused_count = 0;
var resumed_count = 0;
var launched_count = 0;
var key = "name";
var value = "bob";
window.localStorage.setItem(key, value);
var key = "job";
var value = "builder";
window.localStorage.setItem(key, value);
var key = "fixit?";
var value = "yes";
window.localStorage.setItem(key, value);
var key = "name";
var value = window.localStorage.getItem(key);
var length = window.localStorage.length;
var key = "chocbar";
var value = [{"Calories": "2270"}, {"Joules":"544"}, {"Protein":"6.6"}, {"Carbohydrates":"56.1"}];
window.localStorage.setItem(key, value);
var key = "bars";
var value = [{"Name":"Galaxy"}, {"Name":"Cadburys"}, {"Name":"Mars"}];
window.localStorage.setItem(key, value);
    
	
	function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
	function bobDisplay()
	{
		alert(window.localStorage.getItem("job") + "\n" + length);
	}
	function chocBar()
	{
		alert("CHOCOLATE!");
		window.localStorage.getItem(key);
		document.getElementById("cal").innerHTML = value[0].Calories;
		document.getElementById("jou").innerHTML = value[1].Joules;
		document.getElementById("pro").innerHTML = value[2].Protein;
		document.getElementById("car").innerHTML = value[3].Carbohydrates;
	}
	function dynDisp()
	{
		window.localStorage.getItem(key);
		var output = "";
		console.log(value.length);
		for (var i=0; i<key.length-1; i++)
		{
			console.log(i + ", " + value[i]);
			output += "<li>" + value[i].Name + "</li>";
			document.getElementById("test").innerHTML = output;
			
		}
		
	}