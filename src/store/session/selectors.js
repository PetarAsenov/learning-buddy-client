import { utcToZonedTime } from "date-fns-tz";

export const selectSession = state => state.session;
export const selectUpcomingSessions = state => state.session.filter((session) => {
  return utcToZonedTime(session.start_date) >= new Date()
})
export const selectPastSessions = state => state.session.filter((session) => {
  return utcToZonedTime(session.start_date) <= new Date()
})

export const selectUpcomingSessionByTeacher = id => state => state.session.filter(session => session.teacher_id === id && utcToZonedTime(session.start_date) >= new Date());
export const selectPastSessionByTeacher = id => state => state.session.filter(session => session.teacher_id === id && utcToZonedTime(session.start_date) <= new Date());
export const selectUpcomingSessionByParticipant = id => state => state.session.filter(session => session.participants.find(participant => participant.participant_id === id) && utcToZonedTime(session.start_date) >= new Date());
export const selectPastSessionByParticipant = id => state => state.session.filter(session => session.participants.find(participant => participant.participant_id === id) && utcToZonedTime(session.start_date) <= new Date());


