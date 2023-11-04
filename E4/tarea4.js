let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = student1Courses.filter((course) => student2Courses.includes(course));
if (commonCourses.length > 0){
console.log("Common courses are: " + commonCourses.join (','));
} else { console.log("Couldn't find common courses ")}
