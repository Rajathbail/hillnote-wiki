"use client"

import React, { createContext, useContext } from 'react'

const ConfigContext = createContext(null)

export function ConfigProvider({ children, config }) {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  const config = useContext(ConfigContext)
  if (!config) {
    throw new Error('useConfig must be used within a ConfigProvider')
  }
  return config
}