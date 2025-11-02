function createAPICache() {
  const cache = new Map();
  const pendingRequests = new Map();

  return async (url) => {
    // Если есть кешированный ответ
    if (cache.has(url)) {
      return cache.get(url);
    }

    // Если запрос уже выполняется
    if (pendingRequests.has(url)) {
      return pendingRequests.get(url);
    }

    try {
      const promise = fetch(url)
        .then((response) => response.json())
        .then((data) => {
          cache.set(url, data);
          pendingRequests.delete(url);
          return data;
        });

      pendingRequests.set(url, promise);
      return await promise;
    } catch (error) {
      pendingRequests.delete(url);
      throw error;
    }
  };
}

// Использование
const cachedFetch = createAPICache();

// В компоненте React
async function UserProfile({ userId }) {
  const user = await cachedFetch(`/api/users/${userId}`);
  return <div>{user.name}</div>;
}
