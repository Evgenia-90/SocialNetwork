import { ActionsTypes, SidebarType } from "./store";

let initialState = {
  data: [
      {name: "Johnatan"},
  ],
}

const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {
  return state;
};

export default sidebarReducer;
