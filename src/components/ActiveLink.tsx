import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from '../lib/router'

type ActiveLinkProps = {
  children: React.ReactNode
  href: string
  shallow: boolean
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, ...props }) => {
  const { pathname } = useRouter()
  const active = pathname === props.href

  return (
    <Link {...props}>
      <a className={clsx('block p-2 text-sm hover:underline', active && 'text-green-800')}>
        {children}
      </a>
    </Link>
  )
}

export default ActiveLink
