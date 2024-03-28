import clsx from "clsx";
import PropTypes from "prop-types";
import css from "./Profile.module.css";

export default function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.div}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.textUsername}>{username}</p>
        <p className={css.textTag}>@{tag}</p>
        <p className={css.textLocation}>{location}</p>
      </div>

      <ul className={css.ul}>
        <li className={css.li}>
          <span className={css.span}>Followers</span>
          <span className={clsx(css.span, css.guantiti)}>{followers}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Views</span>
          <span className={clsx(css.span, css.guantiti)}>{views}</span>
        </li>
        <li className={css.li}>
          <span className={css.span}>Likes</span>
          <span className={clsx(css.span, css.guantiti)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
