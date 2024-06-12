const BASE_URL = process.env.REACT_APP_API_TRANSCRIPT_URL;

export const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
