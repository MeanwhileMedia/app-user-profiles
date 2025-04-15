'use client';
import { useContext, useEffect } from 'react';
import UsersList from '../../components/UsersList';
import { AppStateContext } from './UsersIndex.appStateContext';
import { ensureAllUsersIds, ensureAllUsersData } from './UsersIndex.helpers';

export default function UsersIndex() {
  const appStateContext = useContext(AppStateContext);
  
  useEffect(() => {
    // This page (UsersIndex) requires that all user ids, and all user info for each id is available before render.
    ensureAllUsersIds(appStateContext);
    ensureAllUsersData(appStateContext);
  });

  return (
    <UsersList />
  )
}
