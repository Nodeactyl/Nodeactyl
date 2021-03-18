---
description: Grabs all a user's information available to a API key
---

# getUserInfo\(\)



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

Application.getUserInfo("userID").then(user => {
    // Retuns object of the user (see below)
}).catch(err => {
    console.log(err);
})
```

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

Application.getUserInfo("userID").then(user => {
    // Retuns object of the user (see below)
}).catch(err => {
    console.log(err);
})
```

```javascript
{
  id: 1,
  external_id: null,
  uuid: '7c00ddc5-3785-45f9-a7cb-fe3ae0ecaf08',
  username: 'username',
  email: 'email@example.com',
  first_name: 'firstname',
  last_name: 'lastname',
  language: 'en',
  root_admin: true,
  '2fa': false,
  created_at: '2020-01-24T21:31:35+00:00',
  updated_at: '2020-01-24T21:31:35+00:00'
}
```

