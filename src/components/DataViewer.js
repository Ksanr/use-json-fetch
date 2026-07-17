import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

const DataViewer = ({ url, title }) => {
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div className="data-viewer">
      <h3>{title}</h3>
      {loading && <p className="loading">⏳ Загрузка...</p>}
      {error && <p className="error">❌ {error.message}</p>}
      {data && (
        <pre className="data-result">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default DataViewer;