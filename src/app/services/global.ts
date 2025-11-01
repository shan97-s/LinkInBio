export let userName: string | null = null;

export function setUserName(name: string | null) {
  userName = name;
}
export function getUserName() {
  return userName;
}