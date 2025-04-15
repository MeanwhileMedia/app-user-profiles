export function formEleveateUsersApiUrl(endpoint: string, elevateUsersAPIId: string, elevateUsersAPIKey: string): string {
  return `https://interviews-accounts.elevateapp.com/api/ui/${endpoint}?authentication_user_id=${elevateUsersAPIId}&authentication_token=${elevateUsersAPIKey}`;
}

export async function fetchFromElevateUsersApi(endpoint: string, elevateUsersAPIId: string, elevateUsersAPIKey: string): Promise<any> {
  const elevateUsersApiUrl = formEleveateUsersApiUrl(endpoint, elevateUsersAPIId, elevateUsersAPIKey);
  try {
    const response = await fetch(elevateUsersApiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status} requesting: ${elevateUsersApiUrl}`);
    }
    console.log('Fetched elevate users API data for url:', elevateUsersApiUrl);
    return await response.json();
  } catch (error) {
    console.error('Error fetching elevate users API data:', error);
    throw error;
  }
}