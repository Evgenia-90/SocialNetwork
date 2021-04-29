import { ActionsTypes } from "./redux-store";

export type SidebarType = {
  data: Array<DataType>
}
export type DataType = {
  name: string
}

let initialState = {
  data: [
      {name: "Johnatan"},
  ],
}

const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {
  return state;
};

export default sidebarReducer;
