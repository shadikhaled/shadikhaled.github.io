$$(document).ready(function(){
	getSkills();
})
function getSkills(){
	skills_url = “skills.json”
	$.get(skills_url,function(data){
		showSkills(data)
	});
}
	
function getCurrentRepositories(e){
	$('#result').html('')
	$('#result').show();
	$.get(current_url,function(repos){
		showCurrentRepositories(repos)
	})
	 

function showSkills(skills) {
	$.each(sills,function(index,skill) {
		var skill_item = "<div><h3><i class='"+skill.cssclass +"'></i>"+skill.name+"</h3>"+"<p>"+skill.description +"</p></div>";
		$("#skills").append(skill_item)

	})

}