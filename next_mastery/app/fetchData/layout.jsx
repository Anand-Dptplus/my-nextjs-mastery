import React from 'react'
import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div>
      <div>
        <ul>
            <li>
                <Link href={'/fetchData/client'}>Fetch Data Using Client Component</Link>               
            </li>
            <li>
                 <Link href={'/fetchData/server'}>Fetch Data Using Server Component</Link>
            </li>
        </ul>
      </div>
      {children}
    </div>
  )
}

export default layout
