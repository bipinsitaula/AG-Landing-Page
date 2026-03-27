const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'API request failed');
  }
  return await response.json();
};

export const GetRequest = async (url) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('GET Request Error:', error);
    throw error;
  }
};

export const PostRequest = async (url, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('POST Request Error:', error);
    throw error;
  }
};

export const PatchRequest = async (url, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('PATCH Request Error:', error);
    throw error;
  }
};
