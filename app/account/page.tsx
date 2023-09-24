'use client'

import useAccountData from '@/lib/useAccountData.hook'

// account management site
export default function AccountPage () {
  // get account data
  const { username, tag, logout, login } = useAccountData()

  return (
    <div>
      {username && tag ? (
        // if account data saved, show account data
        <div>
          <h1>
            {username}#{tag}
          </h1>
          <button
            onClick={() => {
              logout()
              window.location.reload()
            }}
          >
            Logout
          </button>
          <button
            onClick={() => {
              window.location.pathname = '/mate'
            }}
          >
            Mate
          </button>
        </div>
      ) : (
        // login inputs
        <div>
          <input type='text' placeholder='username' id='username' />
          <input type='text' placeholder='tag' id='tag' />
          <button
            onClick={() => {
              const username = document.getElementById(
                'username'
              ) as HTMLInputElement
              const tag = document.getElementById('tag') as HTMLInputElement
              // add account data to localStorage
              login(username.value, tag.value)
              window.location.reload()
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  )
}
