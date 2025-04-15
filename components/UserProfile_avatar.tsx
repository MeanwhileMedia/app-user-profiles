import { Person } from '@mui/icons-material';
import { UserInfoTypes } from '../lib/elevateUsersApi';
import styles from './UserProfile_avatar.module.css';

export default function UserProfileAvatar(props: UserInfoTypes) {
  let userAvatar = <Person fontSize='inherit' />;
  if (props.image) userAvatar = <img src={`data:image/png;base64,${props.image}`} alt={`Avatar for ${props.first_name} ${props.last_name}`} />
  
  return (
    <div className={styles.userProfile_bio_avatar}>
      {userAvatar}
    </div>
  );
}
