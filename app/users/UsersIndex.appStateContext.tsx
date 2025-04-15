'use client';
import { createContext, useState } from 'react';
import { AllUsersIdsTypes, UserInfoTypes } from '../../lib/elevateUsersApi.d';

////////
// Define app state and types into a new react context.
export interface AppStateContextTypes {
  allUsersIds: AllUsersIdsTypes | null;
  setAllUsersIds: React.Dispatch<React.SetStateAction<AppStateContextTypes["allUsersIds"]>>;
  allUsersIdsReqPending: boolean;

  allUsersData: Record<number, UserInfoTypes> | null;
  setAllUsersData: React.Dispatch<React.SetStateAction<AppStateContextTypes["allUsersData"]>>;
  allUsersDataReqPending: boolean;

  carouselActiveUserId: number | null;
  setCarouselActiveUserId: React.Dispatch<React.SetStateAction<AppStateContextTypes["carouselActiveUserId"]>>;
}
const AppStateContextInitialState: AppStateContextTypes = {
  allUsersIds: null,
  setAllUsersIds: () => undefined,
  allUsersIdsReqPending: false,
  
  allUsersData: null,
  setAllUsersData: () => undefined,
  allUsersDataReqPending: false,
  
  carouselActiveUserId: null,
  setCarouselActiveUserId: () => undefined,
}
export const AppStateContext = createContext(AppStateContextInitialState);


////////
// Define/export the context provider to be used by the matching top level react component. 
// Make sure all useState for this app are defined now and attached to the global context.
export const AppStateContextProvider = ({children}: React.PropsWithChildren<{}>) => {

  // Response from our api/users endpoint (an object containing array of all user IDs)
  const [allUsersIds, setAllUsersIds] = useState(AppStateContextInitialState.allUsersIds);
  // A flag to indicate if a allUsersIds request is pending.
  const allUsersIdsReqPending = AppStateContextInitialState.allUsersIdsReqPending;
  
  // Response(s) from our api/users/[id] endpoint (an object where key is user id and value is a response from the elevate user/id api).
  const [allUsersData, setAllUsersData] = useState(AppStateContextInitialState.allUsersData);
  // A flag to indicate if a search request is pending.
  const allUsersDataReqPending = AppStateContextInitialState.allUsersDataReqPending;

  // The ID of the user that is currently active in the carousel.
  const [carouselActiveUserId, setCarouselActiveUserId] = useState(AppStateContextInitialState.carouselActiveUserId);

  return (
    <AppStateContext.Provider value={{
      allUsersIds,
      setAllUsersIds,
      allUsersIdsReqPending,

      allUsersData,
      setAllUsersData,
      allUsersDataReqPending,

      carouselActiveUserId,
      setCarouselActiveUserId,
    }}>
      {children}
    </AppStateContext.Provider>
  )
}
