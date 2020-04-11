import './main.css';

function buttonClick()
{
	let color = document.getElementById("input").value;
	document.getElementById("square").style.background = color;
}

describe("Автотесты цветов", function() {
	
	let colors = [{
		color: "#000000",
	},
	{
		color: "#FF0000",
	},
	{
		color: "#B200FF",
	}];
	
	colors.forEach((item)=>{
		it(`${item.color} Colorise square`, function(){
			document.getElementById("input").value = item.color;
			buttonClick();
			assert.equal(item.color, document.getElementById("input").value);
		});
	});
	
});

mocha.run();

document.getElementById("button").onclick = buttonClick;