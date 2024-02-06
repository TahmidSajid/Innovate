import React from 'react'

const List = ({href,children,className}) => {
  return (
    <>
    <li><a href={href} className={className}>{children}</a></li>
    </>
  )
}

export default List