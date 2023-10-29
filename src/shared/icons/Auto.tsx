import React from 'react'

type AutoIconSvgProps = React.ComponentPropsWithoutRef<'svg'>

const AutoIconSvg = ({ ...props }: AutoIconSvgProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        opacity="0.2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.47714 0 0 4.47714 0 10C0 15.5229 4.47714 20 10 20C15.5229 20 20 15.5229 20 10C20 4.47714 15.5229 0 10 0Z"
        fill="currentColor"
      />
      <path
        d="M6.9201 15H5.62749L9.36612 4.81818H10.6388L14.3775 15H13.0849L10.0423 6.42898H9.96271L6.9201 15ZM7.39737 11.0227H12.6076V12.1165H7.39737V11.0227Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const AutoIcon = React.memo(AutoIconSvg)
