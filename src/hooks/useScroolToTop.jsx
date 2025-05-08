import { useEffect } from "react";

const useScroolToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScroolToTop;
