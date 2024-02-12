import classes from "./UserInfoLayout.module.css";

function UserInfoLayout(props) {
  return <main className={classes.Main}>{props.children}</main>;
}

export default UserInfoLayout;
