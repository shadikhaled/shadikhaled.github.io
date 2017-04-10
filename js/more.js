// $.ajax({
//     method: "GET",
//     url: "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL9cxyi84wltv5b1rTRIZRt_i-p2uNJfmY&part=snippet&key=AIzaSyDx62xKZE7d4Mz3PPqiscJBWro6F53bwqM",
// 	success: function(response) {
// 		$.each(response.items, function(index, item) {
// 			console.log(item.snippet.title);
//         })
//     }
// })

var musicVideosURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAcrScgzlwyA8u_SwVJ55JTV-HTTMSEHzA&q=Dilshad%20said";
var codingVideosURL = "";

$(document).ready(function(){
	getMusicVideos();
	getCodingVideos();
})
function getMusicVideos(){
	$.get(musicVideosURL,function(data){
		showMusicVideos(data)
	});
}

function getCodingVideos() {
	$.get(codingVideosURL,function(data){
		showCodingVideos(data)
	});
}

function showMusicVideos(data) {
	console.log(data)
	$.each(data.items,function(index,more) {
		console.log(more)
		var more_item = "<div><h3>"+more.snippet.title+"</h3>"+"<iframe width='350' height='200' src='https://www.youtube.com/embed/"+more.id.videoId+"'></iframe></div>";
		
		// if (index % 2 === 0) {
		// 	$("#result").append(more_item)
		// } else {
		// 	$("#result2").append(more_item)
		// }
		$("#result").append(more_item)
	})
}

function showCodingVideos(data) {
	console.log(data)
	$.each(data.items,function(index,more) {
		console.log(more)
		var more_item = "<div><h3>"+more.snippet.title+"</h3>"+"<iframe width='350' height='200' src='https://www.youtube.com/embed/"+more.id.videoId+"'></iframe></div>";
		
		// if (index % 2 === 0) {
		// 	$("#result").append(more_item)
		// } else {
		// 	$("#result2").append(more_item)
		// }
		$("#result2").append(more_item)
	})
}

// var url="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAcrScgzlwyA8u_SwVJ55JTV-HTTMSEHzA&q=Dilshad%20said"
// $(document).ready(function(){
// 	getMore();
// })
// function getMore(){
// 	$.get(url,function(data){
// 		showMore(data)
// 	});
// }

// function showMore(data) {
// 	console.log(data)
// 	$.each(data.items,function(index,more) {
// 		console.log(more)
// 		var more_item = "<div><h3>"+more.snippet.title+"</h3>"+"<iframe width='350' height='200' src='https://www.youtube.com/embed/"+more.id.videoId+"'></iframe></div>";
// 		$("#result").append(more_item)

// 	})

// }