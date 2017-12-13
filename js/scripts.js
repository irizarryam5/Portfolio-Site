function setBindings()
{
	$("li a").click(function(e){
		e.preventDefault();
		var sectionID = e.currentTarget.className + 
			"Sec";
		$("html, body").animate({
			scrollTop: $("#" + sectionID).offset().top - 71
		}, 1000);
		$("div.overlay").slideUp();
	});
}

$(document).ready(function()
{
	setBindings();
	if(window.innerWidth > 768 && parseInt($("#aboutFrame").css("height")) < 325){
		$("#aboutFrame").css("height", function(){
			return $("#aboutWrapper").css("height");
		});
	}
});

(function(){	
	var documentEl = $(document),
		parallaxBg = $('#homeSec');
				
	documentEl.on('scroll', function() {
		var currScrollPos = documentEl.scrollTop();
		parallaxBg.css('background-position', '0 ' + -currScrollPos/4 + 'px');
	});
})();

$("img.hamburger").click(function(){
	$("div.overlay").slideDown();
});
				
$("img.hamburger2").click(function(){
	$("div.overlay").slideUp();
});
				
$(window).resize(function() {
if(window.innerWidth > 768 && parseInt($("#aboutFrame").css("height")) < 325){
	$("#aboutFrame").css("height", "325");
}else if(window.innerWidth <= 768){
	$("#aboutFrame").css("height", "250");
}
});

$("#nameIN").focus(function() {
    $(this).attr('placeholder', 'e.g. Jane Doe');
}).blur(function() {
    $(this).attr('placeholder', 'Name');
});

$("#emailIN").focus(function() {
    $(this).attr('placeholder', 'e.g. user123@example.com');
}).blur(function() {
    $(this).attr('placeholder', 'Email');
});

var app1 = angular.module('app1', []);
var config = {
	apiKey: "AIzaSyCS0DU_ZjA5oEe1a76oQBWbsuFEr0l1000",
	authDomain: "hire-alex.firebaseapp.com",
	databaseURL: "https://hire-alex.firebaseio.com",
	projectId: "hire-alex",
	storageBucket: "hire-alex.appspot.com",
	messagingSenderId: "410248505365"
};
	  
firebase.initializeApp(config);
	
var database = firebase.database();
var auth = firebase.auth();
			
app1.controller('ctrl1', function($scope, $http){
	$scope.jot = {};
	$scope.jot.name;
	$scope.jot.email;
	$scope.jot.message;
	$scope.jot.date;
		
	var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
		
	$scope.updateValue = function(name, email, message){
		var validName = false;
		var validEmail = false;
		var validMessage = false;
		var currTime = new Date().toString();
		
		$scope.jot.name = name;
		$scope.jot.email = email;
		$scope.jot.message = message;
		$scope.jot.date = currTime;
				
		if(!(name ===  undefined || name === "")){
			validName = true;
			if(nameIN.classList.contains("invalid")==true){
				nameIN.classList.remove("invalid");
				$("#nameIN").attr("class", "contInput");
			}
		}else{
			$("#nameIN").attr("class", "invalid");
		}
			
		if(reg.test(email)==true){
			validEmail = true;
			if(emailIN.classList.contains("invalid")==true){
				emailIN.classList.remove("invalid");
				$("#emailIN").attr("class", "contInput");
			}
		}else{
			$("#emailIN").attr("class", "invalid");
		}
			
		if(!(message ===  undefined || message === "")){
			validMessage = true;
			if(messIN.classList.contains("invalid")==true){
				messIN.classList.remove("invalid");
				$("#messIN").attr("class", "contInput");
			}
		}else{
			$("#messIN").attr("class", "invalid");
		}
			
		if(validName===false || validEmail===false || validMessage===false){
			if(window.innerWidth >= 841){
				$('#errorAlertW').show('fade').delay(2000).hide('fade');
			}else if(window.innerWidth < 841){
				$('#errorAlertM').show('fade').delay(2000).hide('fade');
			}
		}
		else if(validName===true && validEmail===true && validMessage===true){
			var ref = database.ref('jots');
			ref.push($scope.jot);
			if(window.innerWidth >= 841){
				$('#successAlertW').show('fade').delay(2000).hide('fade');
			}else if(window.innerWidth < 841){
				$('#successAlertM').show('fade').delay(2000).hide('fade');
			}
		}
			
		$scope.name = "";
		$scope.email = "";
		$scope.message = "";
		
	};
});
	
app1.controller('ctrl2', function($scope, $http){
	$scope.canOpener1 = function(){
		var win1 = window.open("https://www.linkedin.com/in/alex-irizarry-166383149/", "_blank");
		if(win1){
			win1.focus();
		}else{
			alert("Please allow pop-ups for this site!");
		}
	}
	$scope.canOpener2 = function(){
		var win1 = window.open("https://github.com/irizarryam5", "_blank");
		if(win1){
			win1.focus();
		}else{
			alert("Please allow pop-ups for this site!");
		}
	}
	$scope.canOpener3 = function(){
		var win1 = window.open("https://stackoverflow.com/users/8805192/alex-i?tab=profile", "_blank");
		if(win1){
			win1.focus();
		}else{
			alert("Please allow pop-ups for this site!");
		}
	}
});

app1.controller('ctrl3', function($scope, $http){
	$scope.bottleOpener = function(idName){
		var resLink = "resume.pdf";
		var idLabel = idName;
		
		if(idLabel == 'resBut'){
			var win1 = window.open(resLink, "_blank");
			if(win1){
				win1.focus();
			}else{
				alert("Please allow pop-ups for this site!");
			}
		}
	}
});
var scalingFunc = function(){
	if(window.innerWidth < 840 && window.innerWidth > 640){
		d3.select("#daMap")
		.attr("style", "width: 600px; height: 300px;");
		d3.select("#gThang")
		.attr("style", "transform: scale(.67) translate(100px, 90px);");
	}else if(window.innerWidth <= 640 && window.innerWidth > 420){
		d3.select("#daMap")
		.attr("style", "width: 400px; height: 200px;");
		d3.select("#gThang")
		.attr("style", "transform: scale(.5) translate(70px, 60px);");
	}else if(window.innerWidth <= 420){
		d3.select("#daMap")
		.attr("style", "width: 300px; height: 150px;");
		d3.select("#gThang")
		.attr("style", "transform: scale(.375) translate(70px, 60px);");
	}else{
		d3.select("#daMap")
		.attr("style", "width: 800px; height: 400px;");
		d3.select("#gThang")
		.attr("style", "transform: scale(1.0) translate(50px, 50px);");
	}
	
	if(window.innerWidth <= 860 && window.innerWidth > 580){
		d3.select("#daPlot")
		.attr("style", "width: 540px; height: 320px;");
		d3.select("#gMang")
		.attr("style", "transform: scale(0.66) translate(48px, 8px);");
		d3.select("#ylab")
		.attr("style", "font-size: 170%; transform: rotate(-90deg) translateX(-15px);");
		d3.select("#xlab")
		.attr("style", "font-size: 170%; transform: translate(650px, 440px);");
		d3.selectAll(".legendWord")
		.attr("style", "font-size: 130%;");
		d3.selectAll(".tooltip")
		.attr("style", "font-size: 124%;");
		d3.select("#legendAL_East")
		.attr("style", "transform: scale(1) translate(-650px, 0px);");
		d3.select("#legendNL_East")
		.attr("style", "transform: scale(1) translate(-650px, 20px);");
		d3.select("#legendAL_Central")
		.attr("style", "transform: scale(1) translate(-650px, 40px);");
		d3.select("#legendNL_Central")
		.attr("style", "transform: scale(1) translate(-650px, 60px);");
		d3.select("#legendAL_West")
		.attr("style", "transform: scale(1) translate(-650px, 80px);");
		d3.select("#legendNL_West")
		.attr("style", "transform: scale(1) translate(-650px, 100px);");
		d3.selectAll(".grid line")
		.attr("style", "stroke-width: 2;");
		d3.selectAll(".tick line")
		.attr("style", "stroke-width: 1.5;");
		d3.selectAll(".tick text")
		.attr("style", "font-size: 100%;");
		d3.selectAll(".dot")
		.style("r", "3.5");
	}else if(window.innerWidth <= 580 && window.innerWidth > 440){
		d3.select("#daPlot")
		.attr("style", "width: 400px; height: 250px;");
		d3.select("#gMang")
		.attr("style", "transform: scale(0.4878) translate(24px, 36px);");
		d3.select("#ylab")
		.attr("style", "font-size: 220%; transform: rotate(-90deg) translateX(-40px);");
		d3.select("#xlab")
		.attr("style", "font-size: 220%; transform: translate(630px, 440px);");
		d3.selectAll(".legendWord")
		.attr("style", "font-size: 130%;");
		d3.selectAll(".tooltip")
		.attr("style", "font-size: 170%; text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff; background-color: red;");
		d3.select("#legendAL_East")
		.attr("style", "transform: scale(1.5) translate(-700px, 0px);");
		d3.select("#legendNL_East")
		.attr("style", "transform: scale(1.5) translate(-700px, 20px);");
		d3.select("#legendAL_Central")
		.attr("style", "transform: scale(1.5) translate(-700px, 40px);");
		d3.select("#legendNL_Central")
		.attr("style", "transform: scale(1.5) translate(-700px, 60px);");
		d3.select("#legendAL_West")
		.attr("style", "transform: scale(1.5) translate(-700px, 80px);");
		d3.select("#legendNL_West")
		.attr("style", "transform: scale(1.5) translate(-700px, 100px);");
		d3.selectAll(".grid line")
		.attr("style", "stroke-width: 2;");
		d3.selectAll(".tick line")
		.attr("style", "stroke-width: 2;");
		d3.selectAll(".tick text")
		.attr("style", "font-size: 150%;");
		d3.selectAll(".dot")
		.style("r", "4.5");
	}else if(window.innerWidth <= 440){
		d3.select("#daPlot")
		.attr("style", "width: 300px; height: 188px;");
		d3.select("#gMang")
		.attr("style", "transform: scale(0.34) translate(45px, 66px);");
		d3.select("#ylab")
		.attr("style", "font-size: 270%; transform: rotate(-90deg) translateX(-50px);");
		d3.select("#xlab")
		.attr("style", "font-size: 270%; transform: translate(630px, 440px);");
		d3.selectAll(".legendWord")
		.attr("style", "font-size: 130%;");
		d3.selectAll(".tooltip")
		.attr("style", "font-size: 250%; text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff; background-color: red;");
		d3.select("#legendAL_East")
		.attr("style", "transform: scale(2) translate(-700px, 0px);");
		d3.select("#legendNL_East")
		.attr("style", "transform: scale(2) translate(-700px, 20px);");
		d3.select("#legendAL_Central")
		.attr("style", "transform: scale(2) translate(-700px, 40px);");
		d3.select("#legendNL_Central")
		.attr("style", "transform: scale(2) translate(-700px, 60px);");
		d3.select("#legendAL_West")
		.attr("style", "transform: scale(2) translate(-700px, 80px);");
		d3.select("#legendNL_West")
		.attr("style", "transform: scale(2) translate(-700px, 100px);");
		d3.selectAll(".grid line")
		.attr("style", "stroke-width: 2.75;");
		d3.selectAll(".tick line")
		.attr("style", "stroke-width: 3;");
		d3.selectAll(".tick text")
		.attr("style", "font-size: 200%;");
		d3.selectAll(".dot")
		.style("r", "6");
	}else{
		d3.select("#daPlot")
		.attr("style", "width: 820px; height: 500px;");
		d3.select("#gMang")
		.attr("style", "transform: scale(1) translate(40px, 20px);");
		d3.select("#ylab")
		.attr("style", "font-size: 120%; transform: rotate(-90deg) translateX(-12.5px);");
		d3.select("#xlab")
		.attr("style", "font-size: 120%; transform: translate(657px, 440px);");
		d3.selectAll(".legendWord")
		.attr("style", "font-size: 100%;");
		d3.selectAll(".tooltip")
		.attr("style", "font-size: 100%;");
		d3.select("#legendAL_East")
		.attr("style", "transform: scale(1) translate(-650px, 0px);");
		d3.select("#legendNL_East")
		.attr("style", "transform: scale(1) translate(-650px, 20px);");
		d3.select("#legendAL_Central")
		.attr("style", "transform: scale(1) translate(-650px, 40px);");
		d3.select("#legendNL_Central")
		.attr("style", "transform: scale(1) translate(-650px, 60px);");
		d3.select("#legendAL_West")
		.attr("style", "transform: scale(1) translate(-650px, 80px);");
		d3.select("#legendNL_West")
		.attr("style", "transform: scale(1) translate(-650px, 100px);");
		d3.selectAll(".grid line")
		.attr("style", "stroke-width: 2;");
		d3.selectAll(".tick line")
		.attr("style", "stroke-width: 1;");
		d3.selectAll(".tick text")
		.attr("style", "font-size: 100%;");
		d3.selectAll(".dot")
		.style("r", "3.5");
	}
};
function drawDataInit(callback){
	var margin = {top: 20, right: 20, bottom: 30, left: 40},
		width = 820 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	var x = d3.scaleLinear()
		.range([0, (width-60)]);

	var y = d3.scaleLinear()
		.range([height, 0]);

	var color = d3.scaleOrdinal(d3.schemeSet1);

	var xAxis = d3.select("x.axis")
		.call(d3.axisBottom(x));

	var yAxis = d3.select("y.axis")
		.call(d3.axisLeft(y));

	var svg = d3.select("#plot").append("svg")
		.attr("id", "daPlot")
		.attr("class", "scatterPlot")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		.attr("id", "gMang");

	d3.tsv("data3.tsv", function(error, data) {
		if (error) throw error;

		data.forEach(function(d) {
			d.wins = +d.wins;
			d.week = +d.week;
		});
	
		x.domain(d3.extent(data, function(d) { return d.week; })).nice();
		y.domain(d3.extent(data, function(d) { return d.wins; })).nice();
		
		function make_x_gridlines() {		
			return d3.axisBottom(x)
				.ticks(5)
		}
	
		function make_y_gridlines() {		
			return d3.axisLeft(y)
				.ticks(5)
		}
	
		svg.append("g")			
			.attr("class", "grid")
			.attr("transform", "translate(0," + height + ")")
			.call(make_x_gridlines()
				.tickSize(-height)
				.tickFormat(""));
	
		svg.append("g")			
			.attr("class", "grid")
			.call(make_y_gridlines()
				.tickSize((-width) + 60)
				.tickFormat(""));
	
		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x))
			.append("text")
			.attr("x", width)
			.attr("y", -6)
			.style("text-anchor", "end");
	
		svg.append("g")
			.attr("class", "y axis")
			.call(d3.axisLeft(y))
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.style("text-anchor", "end");
		
		svg.append("text")             
			.attr("transform",
				"translate(" + (width-80) + " ," + 
				(height + margin.top - 30) + ")")
			.style("text-anchor", "middle")
			.attr("id", "xlab")
			.text("Week");
		
		svg.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 10)
			.attr("x", - 30 )
			.attr("dy", "1em")
			.style("text-anchor", "middle")
			.attr("id", "ylab")
			.text("Wins");
	
		var points = svg.selectAll(".dot")
			.data(data)
			.enter().append("g")
			.attr("class", "point");
		
		points.append("text")
			.attr("class", "tooltip")
			.attr("x", function(d) { return (x(d.week)+10); })
			.attr("y", function(d) { return (y(d.wins)-1); })
			.attr("dy", ".35em")
			.style("text-anchor", "begining")
			.style("z-index", "50")
			.text(function(d) { return d.team + ' ' + d.record; });
			
		
		points.append("circle")
			.attr("class", "dot")
			.attr("r", 3.5)
			.attr("cx", function(d) { return x(d.week); })
			.attr("cy", function(d) { return y(d.wins); })
			.style("fill", function(d) {return color(d.division); })
			.style("z-index", "48")
			.on('mouseover', function(d){
				d3.select(this).classed("selection", true);
			})
			.on('mouseout', function(d){
				d3.select(this).classed("selection", false);
			});
		
		
	
		var legend = svg.selectAll(".legend")
			.data(color.domain())
			.enter().append("g")
			.attr("id", function(d){
				var idName = "legend" + d;
				var nextOne = idName.replace(' ', '_');
				return nextOne; })
			.attr("transform", function(d, i) { return "translate(-650," + i * 20 + ")"; });
	
		legend.append("text")
			.attr("class", "legendWord")
			.attr("x", width+2)
			.attr("y", 9)
			.attr("dy", ".35em")
			.style("text-anchor", "begining")
			.text(function(d) { return d; });
		
		legend.append("rect")
			.attr("x", width - 18)
			.attr("width", 18)
			.attr("height", 18)
			.style("fill", color);
			
		$("circle:first").attr("style", "display: none;");	  
	});
	var countyInfo = {
		county: [
			{name: "Allegany County", pop: 72528, area: 430, density: 169},
			{name: "Anne Arundel County", pop: 564195, area: 588, density: 960},
			{name: "Baltimore County", pop: 831128, area: 682, density: 1219},
			{name: "Baltimore City", pop: 621849, area: 92, density: 7671},
			{name: "Calvert County", pop: 90595, area: 345, density: 425},
			{name: "Caroline County", pop: 32579, area: 326, density: 99},
			{name: "Carroll County", pop: 167627, area: 453, density: 370},
			{name: "Cecil County", pop: 102382, area: 418, density: 245},
			{name: "Charles County", pop: 156118, area: 643, density: 243},
			{name: "Dorchester County", pop: 32384, area: 983, density: 33},
			{name: "Frederick County", pop: 245322, area: 667, density: 368},
			{name: "Garrett County", pop: 30005, area: 656, density: 45},
			{name: "Harford County", pop: 250290, area: 527, density: 475},
			{name: "Howard County", pop: 313414, area: 253, density: 1239},
			{name: "Kent County", pop: 19787, area: 413, density: 48},
			{name: "Montgomery County", pop: 1040116, area: 507, density: 2052},
			{name: "Prince George's County", pop: 909535, area: 499, density: 1823},
			{name: "Queen Anne's County", pop: 48904, area: 511, density: 96},
			{name: "Somerset County", pop: 25768, area: 610, density: 42},
			{name: "Saint Mary's County", pop: 111413, area: 764, density: 146},
			{name: "Talbot County", pop: 37512, area: 477, density: 79},
			{name: "Washington County", pop: 149585, area: 467, density: 320},
			{name: "Wicomico County", pop: 102370, area: 400, density: 256},
			{name: "Worcester County", pop: 51540, area: 695, density: 74}
		]
	};
		
	(function(){
		var margin = {top: 50, left:50, right: 50, bottom: 50},
			height = 400 - margin.top - margin.bottom,
			width = 800 - margin.left - margin.right;
					
		var svg = d3.select("#map")
			.append("svg")
			.attr("class", "choropleth")
			.attr("id", "daMap")
			.attr("height", height + margin.top + margin.bottom)
			.attr("width", width + margin.left + margin.right)
			.append("g")
			.attr("id", "gThang")
			.attr("style", "transform: translate(50px, 50px)");
			
		d3.queue()
			.defer(d3.json, "mdGeo2.json")
			.await(ready);
			
		var projection = d3.geoMercator().translate([12600, 6850]).scale(9100)
		var path = d3.geoPath().projection(projection)
			
		function ready(error, data){
			var counties = topojson.feature(data, data.objects.mdGeo).features
				
			svg.selectAll(".mdGeo")
				.data(counties)
				.enter().append("path")
				.attr("class", "county")
				.attr("id", function(d){return d.id;})
				.attr("d", path)
				.on('mouseover', function(d){
					d3.select(this).classed("selected", true);
					document.getElementById("countyMarquee").innerHTML = countyInfo.county[d.id].name;
					document.getElementById("dataDisplay").innerHTML = 
						"Population: " + countyInfo.county[d.id].pop + " Area: " + countyInfo.county[d.id].area + 
						"mi<sup>2</sup> Density: " + countyInfo.county[d.id].density + "p/mi<sup>2</sup>";
				}).on('mouseout', function(d){
					d3.select(this).classed("selected", false)});		
		}
	})();
	setTimeout(callback, 250);
}

drawDataInit(scalingFunc);	
window.addEventListener("resize", scalingFunc);

$("#reactLink").click(function(){
	var win1 = window.open("http://www.twoeightfour.tk", "_blank");
		if(win1){
			win1.focus();
		}else{
			alert("Please allow pop-ups for this site!");
		}
});
console.log("If you use wix or squarespace then you probably eat pizza with a fork.");