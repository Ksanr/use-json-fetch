import React from 'react';
import DataViewer from './components/DataViewer';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Демонстрация хука useJsonFetch</h1>

      <div className="examples">
        {/* Пример 1: Успешный запрос */}
        <DataViewer
          title="✅ Успешный запрос"
          url="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
        />

        {/* Пример 2: Запрос с ошибкой (404) */}
        <DataViewer
          title="❌ Запрос с ошибкой"
          url="https://example.com/wrong-url"
        />

        {/* Пример 3: Демонстрация загрузки (запрос с задержкой) */}
        <DataViewer
          title="⏳ Демонстрация загрузки"
          url="https://reqres.in/api/users?delay=10"
        />
      </div>
    </div>
  );
}

export default App;