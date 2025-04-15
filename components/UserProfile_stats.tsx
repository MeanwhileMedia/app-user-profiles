import Typography from '@mui/material/Typography';
import { UserInfoTypes } from '../lib/elevateUsersApi';
import styles from './UserProfile_stats.module.css';

export default function UserProfileStats(props: UserInfoTypes) {

  let skillsStatsBars: JSX.Element[] = [];
  const barColorPallette = ['#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', '#E76F51'];
  Object.keys(props.stats.skills).forEach((skillsKey:string, index) => {
    const barFillWidth:number = props.stats.skills[skillsKey].current / props.stats.skills[skillsKey].max * 100;
    const barFillStyles = {
      backgroundColor: barColorPallette[index],
      width: `${barFillWidth}%`,
    }
    skillsStatsBars.push(
      <div className={styles.userProfile_stats_bar} key={skillsKey}>
        <div className={styles.userProfile_stats_bar_label}>{skillsKey}</div>
        <div className={styles.userProfile_stats_bar_fill} style={barFillStyles}></div>
      </div>
    );
  });

  return (
    <div className={`userProfile_stats ${styles.userProfile_stats}`}>
      {skillsStatsBars}
    </div>
  );
}
