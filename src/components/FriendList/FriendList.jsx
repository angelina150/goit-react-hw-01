import friendListStyles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
export default function FriendList({ friends }) {
  return (
    <div className={friendListStyles.wrapper}>
      <ul className={friendListStyles.friendsList}>
        {friends.map(friend => (
          <li className={friendListStyles.friensItem} key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
