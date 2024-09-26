import clsx from 'clsx';
import profileStyles from './Profile.module.css';
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={profileStyles.wrapper}>
      <div className={profileStyles.userInfo}>
        <img className={profileStyles.img} src={image} alt="User avatar" />
        <p className={profileStyles.name}>{name}</p>
        <p className={profileStyles.tag}>@{tag}</p>
        <p className={profileStyles.location}>{location}</p>
      </div>
      <ul className={profileStyles.activityList}>
        <li className={profileStyles.activityItem}>
          <span className={profileStyles.activityCaption}>Followers</span>
          <span className={profileStyles.activityNumber}>
            {stats.followers}
          </span>
        </li>
        <li className={profileStyles.activityItem}>
          <span className={profileStyles.activityCaption}>Views</span>{' '}
          <span className={profileStyles.activityNumber}>{stats.views}</span>
        </li>
        <li className={profileStyles.activityItem}>
          <span className={profileStyles.activityCaption}>Likes</span>
          <span className={profileStyles.activityNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
