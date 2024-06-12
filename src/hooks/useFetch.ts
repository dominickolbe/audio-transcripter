import { useState, useEffect } from "react";
import { fetchData } from "../services/apiService";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T>(endpoint: string) => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData<T>(endpoint);
        setState({ data: result, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error as Error });
      }
    };

    getData();
  }, [endpoint]);

  return state;
};

export default useFetch;
