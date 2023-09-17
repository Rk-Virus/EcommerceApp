export const fetchApi = async (route, options) => {
  const TestBaseUrl = 'http://192.168.0.5:8001'
  const hostedBaseUrl1 = 'https://5rw6zvyjq2.execute-api.us-east-2.amazonaws.com'
  const hostedBaseUrl2 = 'https://yoourhelper.herokuapp.com'

  const apiUrl = hostedBaseUrl1 + route;
  try {
    const res = await fetch(apiUrl, options);

    const result = await res.json();
    if (res.status === 200) {
      return result;
    } else {
      console.log('res', result);
      return result;
    }
  } catch (err) {
    console.log(err);
  }
};
