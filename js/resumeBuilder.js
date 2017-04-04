/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Vaibhav Pathak");
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

function locationizer(work_obj) {
    var arry = [];
    for (job in work_obj.jobs) 
    {
    	var loc = work_obj.jobs[job].location;
        arry.push(loc);
    }
    
    return arry
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));



var bio = {
	"name" : "Vaibhav Pathak" ,
	"role" : "DevOps" ,
	"contects" {
		"Mobile" : 9579874742 ,
		"Email" : "vp15591@gmail.com"
		"Location" : "Pune"
	} 
	"pic" : "/home/vaibhav/java-script/images/fry.jpg"
};

var formatted_name = HTMLheaderName.replace("%data%","Vaibhav Pathak");
$("#header").append(bio.name);

var formatted_role = HTMLheaderRole.replace("%data%","DevOps Engineer");
$("#header").append(bio.role);


