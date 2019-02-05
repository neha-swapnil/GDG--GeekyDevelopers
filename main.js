var items = [];
$.getJSON( "dictionary.json", "application/json", function(data) {
  	for (var i = 0, len = data.commonWords.length; i < len; i++) {
        items.push(data.commonWords[i]);
        //console.log(data.commonWords[i]);
    }
});

function stringToArray(str) {
	var arr = [];
	var s = "";
	for (var i = 0, len = str.length; i < len; i++) {
		var value = str.charCodeAt(i);
 		if((value >= 97 && value <= 122) || (value >= 65 && value <= 90)) {
 			s += str[i];
 		} else {
 			arr.push(s);
 			s = "";
 		}
	}
	return arr;
}

function printArray() {
	var arr = stringToArray("This is a hello world example.");
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function validate() {
	var input = document.forms["userInput"]["sentence"].value;
	var arr = stringToArray(input);
	var div = document.getElementById("result");
	for(var i = 0; i < arr.length; i++) {
		var str1 = arr[i].toLowerCase();
		var flag = 0;
		for(var j = 0; j < items.length; j++) {
			var str2 = items[j];
			if(str1.localeCompare(str2) == 0) {
				var text = document.createTextNode(str1 + " ");
				div.appendChild(text);
				flag = 1;
				break;
			} else {
				continue;
			}
		}
		if(flag == 0) {
			var span = document.createElement('span');
			span.innerHTML = str1 + " ";
			span.style.color = "red";
			div.appendChild(span);
		}
	}
}
