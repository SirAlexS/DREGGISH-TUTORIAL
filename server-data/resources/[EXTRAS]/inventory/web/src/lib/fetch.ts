export const post = (endpoint: string, data?: any) => {
  return new Promise((resolve, reject) => {
    fetch(`https://inventory/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data ? data : {}),
    })
      .then((res) => res?.json())
      .then((result) => resolve(result))
      .catch(() => {});
  });
};
