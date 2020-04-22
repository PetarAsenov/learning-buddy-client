export const selectTeacher = state => state.teacher;
export const selectTeacherById = id => state => state.teacher.find(teacher => teacher.id === parseInt(id));
