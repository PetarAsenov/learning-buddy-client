export const selectSubject = state => state.subject;
export const selectSubjectById = id => state => state.subject.find(subj => subj.id === parseInt(id));
