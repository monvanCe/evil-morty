import React from 'react';

export default function () {
  const [isToggle, setIsToggle] = React.useState(false);

  const open = React.useCallback(() => {
    setIsToggle(true);
  }, []);

  const close = React.useCallback(() => {
    setIsToggle(false);
  }, []);

  const toggle = React.useCallback(() => {
    setIsToggle(prev => !prev);
  }, []);

  return {
    isToggle,
    open,
    close,
    toggle,
  };
}
