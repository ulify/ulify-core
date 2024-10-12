
export function isWindows() {
  const userAgent = navigator.userAgent;
  return userAgent.indexOf('Windows')!== -1;
}

export function isMacOS() {
  const userAgent = navigator.userAgent;
  return userAgent.indexOf('Mac')!== -1;
}

export function isLinux() {
  const userAgent = navigator.userAgent;
  return userAgent.indexOf('Linux')!== -1;
}