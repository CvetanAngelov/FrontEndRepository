var tableBody = $('tbody');

$.ajax({
	method: "GET",
	url: "data/data.json",
	dataType: "json"
}).done(function(data){

	var dataColorsArr = data.colorsArray;

	 dataColorsArr .forEach(function(product){
		var tr = $("<tr><td>" + data.colorName + "</td>" + "<td>" + data.hexValue + "</td></tr>");

		tableBody.append(tr);

		$('td').css({border: '1px solid purple'});

		$('tr').css({'backgroundColor': data.hexValue});
	});

}).fail(function(error){
	alert("No data found")
	console.log(error);
});
