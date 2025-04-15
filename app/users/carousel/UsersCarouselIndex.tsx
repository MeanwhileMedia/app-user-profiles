'use client';
import { useContext, useEffect } from 'react';
import UsersCarousel from '../../../components/UsersCarousel';
import { AppStateContext } from '../UsersIndex.appStateContext';
import { ensureAllUsersIds, ensureAllUsersData } from '../UsersIndex.helpers';

export default function UsersCarouselIndex() {
  const appStateContext = useContext(AppStateContext);
  
  useEffect(() => {
    // This page (carousel) requires that all user ids, and all user info for each id is available before render.
    ensureAllUsersIds(appStateContext);
    ensureAllUsersData(appStateContext);
  });

  return (
    <UsersCarousel />
  )
}
