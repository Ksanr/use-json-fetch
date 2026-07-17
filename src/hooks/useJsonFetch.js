import { useState, useEffect } from 'react';

/**
 * Хук для выполнения GET-запросов с обработкой состояний загрузки и ошибок.
 *
 * @param {string} url - адрес для запроса
 * @returns {[any, boolean, object|null]} - [data, loading, error]
 */
function useJsonFetch(url = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return [data, loading, error];
}

export default useJsonFetch;