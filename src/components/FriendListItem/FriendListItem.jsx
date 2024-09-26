import friendListItemStyles from './FriendListItem.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={friendListItemStyles.wrapper}>
      <img
        className={friendListItemStyles.img}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={friendListItemStyles.name}>{name}</p>
      {isOnline ? (
        <p className={friendListItemStyles.online}>Online </p>
      ) : (
        <p className={friendListItemStyles.offline}> Offline </p>
      )}
    </div>
  );
}
