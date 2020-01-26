import {IS_VISIBILITY} from "./types";

export const handleChangeVisibility = (isVisibility)=>{
  return {
      type:IS_VISIBILITY,
      payload:isVisibility
  }
};