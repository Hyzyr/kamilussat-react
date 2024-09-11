import React from 'react';

const isMobile = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

const isAndroid = () => {
  return /Android/i.test(navigator.userAgent);
};

const useAndroidCheck = () => {
  const isAndroidDevice = React.useMemo(() => isMobile() && isAndroid(), []);
  return isAndroidDevice;
};

export default useAndroidCheck;
