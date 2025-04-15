import { type NextRequest } from 'next/server';
import { fetchFromElevateUsersApi } from '../../../../lib/elevateUsersApi.helper';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {

  const userApiID = process.env.USER_API_ID;
  const userApiKey = process.env.USER_API_KEY;
  if (!userApiID || !userApiKey) {
    const error = 'Missing USER_API environment variables';
    console.error(error);
    return;
  }

  const { id } = await params;
  if (!id) {
    const error = 'Missing required query parameter: id';
    console.error(error);
    return;
  }

  try {
    const userApiData = await fetchFromElevateUsersApi(`users/${id}`, userApiID, userApiKey);
    console.log('Fetched data:', userApiData);
    return new Response(JSON.stringify(userApiData), { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

};
