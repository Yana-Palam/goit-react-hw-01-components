import PropTypes from 'prop-types';
import s from './Profile.module.css';
import ProfileList from '../ProfileList/ProfileList';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div key={username} className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} width="100" />
        <p className={s.name}>{username}</p>
        <p className={s.tag}> @{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <ProfileList
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
