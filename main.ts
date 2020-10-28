let random_number = 0
let count_of_passed_students = 0
let count_of_failed_students = 0
let average_grade = 0
input.onButtonPressed(Button.A, function () {
    let grade_of_student = 0
    for (let index = 0; index < 20; index++) {
        random_number = randint(0, 100)
        basic.showNumber(grade_of_student)
        if (grade_of_student >= 90 && grade_of_student <= 100) {
            basic.showString("A")
            count_of_passed_students += 1
        } else if (grade_of_student >= 80 && random_number <= 89) {
            basic.showString("B")
            count_of_passed_students += 1
        } else if (random_number >= 70 && grade_of_student <= 79) {
            basic.showString("C")
            count_of_passed_students += 1
        } else if (grade_of_student >= 60 && grade_of_student <= 69) {
            basic.showString("D")
            count_of_failed_students += 1
        } else if (grade_of_student <= 59) {
            basic.showString("F")
            count_of_failed_students += 1
        }
    }
    average_grade = grade_of_student / 20
    basic.showString("average grade")
    basic.showNumber(average_grade)
    basic.showString("passed students")
    basic.showNumber(count_of_passed_students)
    basic.showString("failed students")
    basic.showNumber(count_of_failed_students)
})
basic.forever(function () {
	
})
