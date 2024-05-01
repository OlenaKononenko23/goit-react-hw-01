import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  
    return (

    <div className={css.container}>
        <div className={css.userInfo}>

            <img className={css.img}
                src={image}
                alt="User avatar"
            />
        
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag} </p>
        <p className={css.text}>{location}</p>
    </div>
        <ul className={css.list}>
          
    <li className={css.item}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
          
    <li className={css.item}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
          
    <li className={css.item}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
        </ul>
    </div>

    )
}