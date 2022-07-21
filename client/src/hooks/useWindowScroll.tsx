import { useState, useEffect } from 'react';

export default function useWindowScroll() {
  const [navHide, setNavHide] = useState<boolean>(false)
  const [yOffset, setYoffset] = useState<number>(
    window.pageYOffset || 0
  );
  const [prevY, setPrevY] = useState<number>(0)

  function scroll() {
    setYoffset(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', scroll);

    function headerChange() {
      if (yOffset > prevY) {
        setNavHide(true)
      } else if (yOffset < prevY) {
        setNavHide(false)
      }
    }
    headerChange();

    return () => {
      console.log(prevY, yOffset)
      setPrevY(yOffset)
    };
  }, [prevY, yOffset]);

  return navHide;
}
