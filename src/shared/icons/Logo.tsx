import React from 'react'

type LogoIconSvgProps = React.ComponentPropsWithoutRef<'svg'>

const LogoIconSvg = ({ ...props }: LogoIconSvgProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12.0005 3.66992V20.3299L11.2005 21.2399C10.0905 22.4999 9.1805 22.1599 9.1805 20.4799V13.2799H6.0905C4.6905 13.2799 4.3005 12.4199 5.2305 11.3699L12.0005 3.66992Z"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M18.77 12.6299L12 20.3299V3.6699L12.8 2.7599C13.91 1.4999 14.82 1.8399 14.82 3.5199V10.7199H17.91C19.31 10.7199 19.7 11.5799 18.77 12.6299Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const LogoIcon = React.memo(LogoIconSvg)