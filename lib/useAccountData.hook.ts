import { useEffect, useState } from 'react'

type useAccountDataProps = {
  username: string
  setUsername: (defaultUsername: string) => void
  tag: string
  setTag: (defaultTag: string) => void
  logout: () => void
  login: (username: string, tag: string) => void
}

export default function useAccountData (): useAccountDataProps {
  // make useState be string or null
  const [username, setUsername] = useState('')
  const [tag, setTag] = useState('')

  useEffect(() => {
    setUsername(localStorage.getItem('username') || '')
    setTag(localStorage.getItem('tag') || '')
  }, [])

  const logout = () => {
    setUsername('')
    setTag('')
    localStorage.removeItem('username')
    localStorage.removeItem('tag')
  }

  const login = (username: string, tag: string) => {
    setUsername(username)
    setTag(tag)
    localStorage.setItem('username', username)
    localStorage.setItem('tag', tag)
  }

  return {
    username,
    setUsername,
    tag,
    setTag,
    logout,
    login
  }
}
