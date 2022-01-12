import React from 'react'


const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => {
  return (
    <form onSubmit={handleSubmit}>

        <div>
          username
          <input
          type="text"
          value={username}
          name="username"
          onChange={handleUsernameChange}
          />
        </div>
        <div>
          password
          <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          />
        </div>

        <button type="submit">login</button>

      </form>
  )
}

export default LoginForm