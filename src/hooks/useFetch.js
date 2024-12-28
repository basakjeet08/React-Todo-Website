import { useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url, options);

      if (!response.ok) {
        const errorResponse = await response.json();
        const error = errorResponse.message || "Unknown Error Occured";
        throw new Error(error);
      }

      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

export default useFetch;
