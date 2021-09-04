# React-ControllableUpdate

Controll if component should be allowed to be updated - a replacement for shouldComponentUpdate for functional components

### Usage

To use, simply import component and define if component should be updated via `shouldUpdate` prop.

Basic logic:

```js
// Component won't be updated regardless state and props changes as long as shouldUpdate is false
<ControllableUpdate shouldUpdate={false}>
  // ...children go here
</ControllableUpdate>
```

Example, do not update component until user was fetched:

```js
import React, { useState, useEffect } from 'react'
import {ControllableUpdate} from 'react-controllable-update'
import {UserComponent, fetchUser} from 'users'

const App () => {
  const [userWasFetched, setUserFetchedState] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetchUser().then((user) => {
      setUserFetchedState(true)
      setUser(user)
    })
  }, [])

  return (
    <ControllableUpdate shouldUpdate={userWasFetched}>
      <UserComponent user={user}/>
    </ControllableUpdate>
  )

}
```

### Component updates

Component will update if

- `shouldUpdate` prop is `true`
- `shouldUpdate` prop was `false` but then changed to `true`

### License

This project is licensed under the MIT License. Copy of license can be found in repository root.
