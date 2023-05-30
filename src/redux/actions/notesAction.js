import { ADD_NOTE, FETCH_NOTES, DELETE_NOTE } from "./notesActionTypes";

//InitialState

//actions

//ADD Note action creator
export const addNoteAction = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

//Delete Note action creator

export const deleteNoteAction = (id) => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};

//fetch note action creator

export const fetchNotesAction = () => {
  return {
    type: "FETCH_NOTES",
  };
};

//reducer

//store

//dispatch
