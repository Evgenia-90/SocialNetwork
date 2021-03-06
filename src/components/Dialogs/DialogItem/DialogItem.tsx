import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

export type dialogItemType = {
  id: number;
  name: string;
};
export const DialogItem = (props: dialogItemType) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

