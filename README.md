Magic OAuth v2

Deps
- magic-sdk
- @magic-ext/oauth2

-----
- Construct Magic instance with OAuth v2 extension
```js

import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth2';

const magicClient = new Magic(<PUBLISHABLE_API_KEY>, {
  extensions: [new OAuthExtension()],
});
```

-----
- Make sure to use the `oauth2` module
- Whitelist the `redirectUri` with your social provider and Magic as allowed Redirect URIs
```js
// initiate redirect login
await magicClient.oauth2.loginWithRedirect({
  provider: provider, // i.e 'google', 'facebook', 'discord', etc...
  redirectUri: 'http://your-app.com/your/oauth/callback/uri', // <== whitelist this value!
});
```

-----
- Make sure to use the `oauth2` module
```js
// finish redirect login
const result = await magicClient.oauth2.getRedirectResult();
```
