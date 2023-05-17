import type { NextraThemeLayoutProps } from 'nextra'
import React from 'react'
 
export default function Layout({ children }: NextraThemeLayoutProps) {
  return (
    <div>
      <h1>My Theme</h1>
      <div style={{ border: '1px solid' }}>{children}</div>
    </div>
  )
}
