import classes from "./UserInfoNav.module.css";
import UserInfoNavItem from "./UserInfoNavItem";
import Link from "next/link";

function UserInfoNav(props) {
  return (
    <aside className={classes.Main}>
      <ul class="list-group">
        <li
          className={["list-group-item active", classes.backToHomeLi].join(" ")}
        >
          <Link href="/">Back to Home</Link>
        </li>
        <UserInfoNavItem>My Account</UserInfoNavItem>
        <UserInfoNavItem active>My Orders</UserInfoNavItem>
        <UserInfoNavItem>Delivery Address</UserInfoNavItem>
        <UserInfoNavItem>Account Info</UserInfoNavItem>
        <UserInfoNavItem>Feedbacks</UserInfoNavItem>
      </ul>
    </aside>
  );
}

export default UserInfoNav;
