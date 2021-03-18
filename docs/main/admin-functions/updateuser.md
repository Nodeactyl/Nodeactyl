---
description: Update a user using the application api
---

# updateUser\(\)

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

Application.updateUser('UserID', 'username', 'password', 'email@example.com', 'first_name', 'last_name', true, 'en').then(user => {
    // Retuns object of the updated user
}).catch(err => {
    console.log(err);
})
```

{% hint style="info" %}
`Username` Username of the user to create

`Password` Password of the user to create

`Email` Email of the user to create

`FirstName` First name of the user to create

`LastName` Last name of the user to create

`IsAdmin` Boolean, is this user an admin?

`Language` Use en/fr etc
{% endhint %}

{% hint style="info" %}
If you do not wish to change a certain field keep it empty.
{% endhint %}

```javascript
{
  id: 1,
  external_id: null,
  uuid: '7c00ddc5-3785-45f9-a7cb-fe3ae0ecaf08',
  username: 'username',
  email: 'email@example.com',
  first_name: 'first_name',
  last_name: 'last_name',
  language: 'en',
  root_admin: true,
  '2fa': false,
  created_at: '2020-01-24T21:31:35+00:00',
  updated_at: '2020-01-30T16:51:13+00:00'
}
```

