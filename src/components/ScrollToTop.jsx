import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const {pathname} = useLocation();
  // useEffect(() => {
  //   // it's called after the component renders, so the user may momentarily see the scroll at the bottom, then it jumps to top — especially if you have fast rendering or transitions
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  useLayoutEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])

  return null;
}
