Magic OAuth v2

- magic-sdk
- @magic-ext/oauth2

- Construct Magic instance with OAuth v2 extension
```
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth2';
```

- Make sure to use the `oauth2` module
- Whitelist the `redirectUri` with your social provider and Magic as allowed Redirect URIs
```
// initiate redirect login
await magicClient.oauth2.loginWithRedirect({
  provider: provider, // i.e 'google', 'facebook', 'discord', etc...
  redirectUri: 'http://your-app.com/your/oauth/callback/uri',
});
```

- Make sure to use the `oauth2` module
```
// finish redirect login
const result = await magicClient.oauth2.getRedirectResult();
```
