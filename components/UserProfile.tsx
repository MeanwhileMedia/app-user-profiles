import { UserInfoTypes } from '../lib/elevateUsersApi';
import UserProfileAvatar from './UserProfile_avatar';
import UserProfileBio from './UserProfile_bio';
import styles from './UserProfile.module.css';

export default function UserProfile(props: UserInfoTypes) {
  return (
    <div className={styles.userProfile}>
      <div className={styles.userProfile_avatar}><UserProfileAvatar {...props} /></div>
      <UserProfileBio {...props} />
    </div>
  );
}
