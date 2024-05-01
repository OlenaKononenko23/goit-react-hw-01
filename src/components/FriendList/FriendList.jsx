import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({friends}) {
    return (
        <ul className={css.block}>
            {friends.map((friend) => (
                <li className={css.cards} key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>
            ))}
        </ul>
    );
}