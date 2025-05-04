import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Ensure this runs only on the client
    if (typeof window === 'undefined') {
      return;
    }

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Set initial state
    onChange();

    // Add listener
    mql.addEventListener("change", onChange)

    // Cleanup listener on unmount
    return () => mql.removeEventListener("change", onChange)
  }, []) // Empty dependency array ensures this runs once on mount

  // Return undefined during SSR or initial client render before effect runs
  return isMobile;
}
