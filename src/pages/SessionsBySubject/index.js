import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSubjectDetails } from '../../store/subject/actions';

export default function SessionsBySubject() {
  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSubjectDetails(id));
  }, [dispatch]);

  return (
    <div>
      
    </div>
  )
}
