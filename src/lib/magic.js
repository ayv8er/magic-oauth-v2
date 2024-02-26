import { Magic } from "magic-sdk";
import { OAuthExtension } from '@magic-ext/oauth2';

export const magic = new Magic("pk_live_CBE04864892D2CA8", {
    extensions: [new OAuthExtension()],
});