import React from 'react'
import { TableOfContents as TOC } from '../table-of-contents'

export const TableOfContents = ({
  showTitle = true,
  title = 'On This Page',
  className = ''
}) => {
  return (
    <div className={className}>
      <TOC 
        showTitle={showTitle}
        title={title}
      />
    </div>
  )
}