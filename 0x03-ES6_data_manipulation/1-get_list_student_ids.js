function getListStudentIds(is_array) {
    if (Array.isArray(is_array)) {
        return is_array.map(student => student.id);
    }
    return [];
}
export default getListStudentIds;
