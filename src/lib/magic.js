import { Magic } from "magic-sdk";
import { OAuthExtension } from '@magic-ext/oauth2';

export const magic = new Magic("pk_live_DFE321B22CBA279E", {
    extensions: [new OAuthExtension()],
});