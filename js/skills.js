$(document).ready(function(){
	getSkills();
})
function getSkills(){
	skills_url = "js/skills.json"
	$.get(skills_url,function(data){
		showSkills(data)
	});
}
	


function showSkills(skills) {
	$.each(skills,function(index,skill) {
		console.log(skill)
		var skill_item = "<div><h3><i class='"+skill.cssclass +"'></i>"+skill.name+"</h3>"+"<p>"+skill.description +"</p></div>";
		$("#skills").append(skill_item)

	})

}