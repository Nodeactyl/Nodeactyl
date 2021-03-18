---
description: Creates a user
---

# createUser\(\)

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

Application.createUser("Username", "Password", "Email", "FirstName", "LastName", false, "en").then(user => {
    // Returns a user object (see below)
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

{% hint style="warning" %}
All emails are regex tested before interaction with the panel, ensure that an email follows the standard format of `example@example.com`!
{% endhint %}

```javascript
{
  id: 9,
  external_id: null,
  uuid: 'ae0986de-2db1-4394-aad8-ee8e58b49734',
  username: 'username',
  email: 'Email@SomeEmail.net',
  first_name: 'FirstName',
  last_name: 'LastName',
  language: 'en',
  root_admin: false,
  '2fa': false,
  created_at: '2020-01-03T05:15:38+00:00',
  updated_at: '2020-01-03T05:15:38+00:00'
}
```

