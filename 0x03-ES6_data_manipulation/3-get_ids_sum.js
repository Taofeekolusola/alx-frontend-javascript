function getStudentIdsSum(students) {
	return students.reduce((accumulator, student) => {
		return accumulator + student.id;
    }, 0);
}
export default getStudentIdsSum;
