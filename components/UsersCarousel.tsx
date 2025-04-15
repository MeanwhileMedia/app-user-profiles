import { useContext, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { AppStateContext } from '../app/users/UsersIndex.appStateContext';
import UserProfileBio from './UserProfile_bio';
import UserProfileStats from './UserProfile_stats';
import UserProfileAvatar from './UserProfile_avatar';
import styles from './UsersCarousel.module.css';

export default function UsersCarousel() {
  const { 
    allUsersIds,
    allUsersData,
    carouselActiveUserId,
    setCarouselActiveUserId
  } = useContext(AppStateContext);

  useEffect(() => {
    if (carouselActiveUserId === null) {
      // if we don't have a carouselActiveUserId, set the carouselActiveUserId to the first user in the list.
      setCarouselActiveUserId(0); 
    }
    const scrollableEl:HTMLElement|null = document.querySelector('.usersCarousel_outer');
    if (scrollableEl) scrollableEl.focus(); // to also support keyboard arrow controls
  });

  const onCarouselScroll = useDebouncedCallback((el:HTMLDivElement) => {
    if (carouselActiveUserId === null || allUsersIds === null) return;
    if (el.scrollTop === 0.5) return;
    let scrollDirection = 'down';
    if (el.scrollTop <= 0) scrollDirection = 'up';    
    el.scrollTo({top: 0.5, left: 0, behavior: 'instant'});

    let nextUserId:number;
    const allUsersCount = allUsersIds.user_ids.length;
    if (scrollDirection === 'down') {
      nextUserId = carouselActiveUserId + 1;
      if (nextUserId > allUsersCount - 1) nextUserId = allUsersIds.user_ids.length - 1;
    } else {
      nextUserId = carouselActiveUserId - 1;
      if (nextUserId < 1) nextUserId = 0;
    }
    setCarouselActiveUserId(nextUserId);
  }, 200)

  if (!allUsersData || carouselActiveUserId === null) return null; // there isn't yet a search result set available for this query. Render nothing for now.
  
  let activeUserStatsEl = null;
  const UsersProfileEls: JSX.Element[] = [];
  Object.values(allUsersData).forEach((user) => {
    let isActiveUser = false;
    if (allUsersIds && allUsersIds.user_ids[carouselActiveUserId] === user.id) isActiveUser = true;

    let avatarOpacity = 0.4;
    if (isActiveUser) {
      avatarOpacity = 1;
      activeUserStatsEl = (
        <div className={styles.usersCarousel_activeUserInfo}>
          <UserProfileBio {...user} />
          <div className={styles.usersCarousel_activeUserStats}><UserProfileStats {...user} /></div>
        </div>
      )
    }

    UsersProfileEls.push(
      <li key={user.id} className={styles.usersCarousel_item} >
        <div style={{opacity: avatarOpacity}}><UserProfileAvatar {...user} /></div>
      </li>
    );
  });

  if (UsersProfileEls.length === 0) return null;
  
  let avatarsScrollTop = 0;
  avatarsScrollTop = carouselActiveUserId * -17.5 + 10;
  return (
    <div className={`usersCarousel_outer ${styles.usersCarousel_outer}`} onScroll={(e) => { onCarouselScroll(e.target as HTMLDivElement) }}>
      <div className={styles.usersCarousel_inner}></div>
      {activeUserStatsEl}
      <ul style={{top: `${avatarsScrollTop}rem`}} className={styles.usersCarousel}>
        {UsersProfileEls}
      </ul>
    </div>
  );
}
