export const fetchApi = async (route, options) => {
  const localUrl = 'http://172.20.10.2:1222'
  const hostedBaseUrl1 = 'https://5rw6zvyjq2.execute-api.us-east-2.amazonaws.com'
  const hostedBaseUrl2 = 'https://yoourhelper.herokuapp.com'

  const apiUrl = localUrl + route;
  try {
    const res = await fetch(apiUrl, options);

    
    return await res.json();
    
  } catch (err) {
    console.log(apiUrl)
    console.log(err);
  }
};
