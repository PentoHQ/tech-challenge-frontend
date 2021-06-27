function fail(name: string): string {
  throw new Error('can not get env variable: ' + name);
}
const auth0 = {
  clientId: process.env.REACT_APP_CLIENT_ID || fail('CLIENT_ID'),
  domain: process.env.REACT_APP_DOMAIN || fail('DOMAIN'),
};
export default auth0;
