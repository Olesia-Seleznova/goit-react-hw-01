import clsx from "clsx";
import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusColor = clsx(css.text, isOnline ? css.isOnline : css.isOffline);

  return (
    <div className={css.div}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={statusColor}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
