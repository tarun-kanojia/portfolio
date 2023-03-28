import { useState, useEffect } from "react";

export default function useDesktopMode(): boolean {
  const [isDesktop, setIsDesktop] =
    useState<boolean>(false);

  useEffect(() => {
    function handleResize(): void {
      setIsDesktop(window.innerWidth >= 1024); // Set breakpoint for desktop mode
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check on mount

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}
