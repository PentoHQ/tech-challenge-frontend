export function useGetUserProfile() {
  const decodedToken = JSON.parse(localStorage[Object.keys(localStorage)[0]]).body.decodedToken
  return { avatarURL: decodedToken.user.picture }
}
