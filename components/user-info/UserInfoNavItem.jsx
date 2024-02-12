import classes from "./UserInfoNavItem.module.css";

function UserInfoNavItem(props) {
  const navItemClasses = ["list-group-item", classes.Main];
  if (props.active) {
    navItemClasses.push(classes.active);
  }

  return <li className={navItemClasses.join(" ")}>{props.children}</li>;
}

export default UserInfoNavItem;
