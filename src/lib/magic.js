import { Magic } from "magic-sdk";
import { OAuthExtension } from '@magic-ext/oauth2';

export const magic = new Magic("pk_live_CF97315B86E273CA", {
    extensions: [new OAuthExtension()],
});