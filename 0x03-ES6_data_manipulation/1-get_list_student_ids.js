function getListStudentIds(is_array) {
    if (Array.isArray(is-array)) {
        return is_array.map(student => student.id);
    }
    return [];
}
export default getListStudentIds;
