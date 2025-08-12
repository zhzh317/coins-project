"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner' // Import toast

// 定义用户对象类型
interface User {
  name: string
  email: string
  subscribed?: boolean
}

// 定义 Context 需要提供的值的类型
interface AuthContextType {
  user: User | null
  loading: boolean
  login: (userData: User) => void
  logout: () => void
}

// 创建 Context，并提供一个默认值
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// 创建一个 Provider 组件
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true) // 添加 loading 状态，防止页面闪烁
  const router = useRouter()

  useEffect(() => {
    // 组件加载时，尝试从 localStorage 获取用户信息
    try {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error)
      localStorage.removeItem('user')
    } finally {
      setLoading(false)
    }
  }, [])

  const login = (userData: User) => {
    // 登录时，更新 state 并存入 localStorage
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
    toast.success("Successfully logged in!") // Add login toast
    router.push('/dashboard')
  }

  const logout = () => {
    // 登出时，清空 state 和 localStorage
    localStorage.removeItem('user')
    setUser(null)
    toast.success("You have been successfully logged out.") // Add logout toast
    router.push('/') // 登出后返回首页
  }

  const value = { user, loading, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// 创建一个自定义 Hook，方便其他组件使用
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
