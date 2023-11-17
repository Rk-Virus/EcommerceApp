export const fetchApi = async (route, options) => {
  const localUrl = 'http://192.168.43.180:1222'

  const apiUrl = localUrl + route;
  try {
    const res = await fetch(apiUrl, options);
    console.log("Debugging...")

    return await res.json();

  } catch (err) {
    console.log(apiUrl)
    console.log(err);
  }
};
