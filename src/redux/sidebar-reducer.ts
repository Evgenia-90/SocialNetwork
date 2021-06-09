export type SidebarAction =  SidebarActionType
export type SidebarActionType = ReturnType<typeof sidebarReducer>
const sidebarReducer = () => {
  return {
    type: "EXAMPLE"
  } as const
}

export default sidebarReducer;
