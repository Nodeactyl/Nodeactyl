---
description: Gets all users attached to the panel
---

# getAllUsers\(\)

```javascript
const node = require('nodeactyl');
const Application = node.Application;

Application.login('HOST', 'APIKEY', (logged_in, err) => {
    console.log(logged_in);
    /** If you want call the function in here, 
     * But we prefer you do have Application.login() at the top of your
     * project and use the following syntax:
     */
});

Application.getAllUsers().then(users => {
    // Retuns an array of users (see below)
}).catch(err => {
    console.log(err);
})
```

```javascript
[
  {
    object: 'user',
    attributes: {
      id: 1,
      external_id: null,
      uuid: 'bf347424-1c93-428d-8c10-5b3b3f5d076b',
      username: 'admin',
      email: 'email@email.com',
      first_name: 'user',
      last_name: 'name',
      language: 'en',
      root_admin: true,
      '2fa': false,
      created_at: '2019-12-13T08:38:23+00:00',
      updated_at: '2019-12-13T08:38:23+00:00'
    }
  },
  {
    object: 'user',
    attributes: {
      id: 2,
      external_id: null,
      uuid: 'ff9c337b-9d66-41da-b67e-729a8c9da97c',
      username: 'minestar',
      email: 'minestar@minestar.star',
      first_name: 'mine',
      last_name: 'star',
      language: 'en',
      root_admin: true,
      '2fa': false,
      created_at: '2019-12-13T09:02:55+00:00',
      updated_at: '2019-12-13T10:38:47+00:00'
    }
  }
]
```

