'use client'

import { useEffect, useState } from 'react'
import GroupMember from '@/components/GroupMember/GroupMember'
import useAccountData from '@/lib/useAccountData.hook'

// mate searching site
export default function MatePage () {
  // initialiting data and dataLoading states
  const [data, setData] = useState(null) as any
  const [loading, setLoading] = useState(true)

  // getting username and tag
  const { username, tag, logout } = useAccountData()

  // get valorant data to username and tag
  useEffect(() => {
    if (username && tag) {
      fetch(`/api/valorant/account/${username}/${tag}`)
        .then(response => response.json())
        .then(data => {
          setData(data)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching data:', error)
          setLoading(false)
        })
    }
  }, [username, tag])

  if (loading) return <></>
  // logout if no data
  if (!data || data === null) {
    logout()
    window.location.href = 'localhost:3000/account'
  }

  return (
    <div>
      <GroupMember
        username={data.data.name}
        tag={data.data.tag}
        leader={false}
        avatar={''}
        banner={data.data.card.wide}
        rank={''}
      />
    </div>
  )
}
