let StudentFirst = new Student("Мария", "женский", 37);
let StudentSecond = new Student("Анна", "женский", 36);
let StudentThird = new Student("Алексей", "мужской", 34);

function Student(name, gender, age) {

	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}



Student.prototype.addMarks = function(...marks) {
	if (this.marks !== undefined) {
		this.marks.push(...marks);
	}

}


Student.prototype.getAverage = function(...marks) {
	if (this.marks === undefined || this.marks === []) {
		return 0;
	} else {
		return this.marks.reduce((acc, item, index, marks) => acc + item / marks.length, 0);
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;

	this.excluded = reason;
}