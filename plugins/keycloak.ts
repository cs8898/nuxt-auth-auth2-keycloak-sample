import Oauth2Scheme from '@nuxtjs/auth-next/dist/schemes/oauth2';
import { encodeQuery } from '@nuxtjs/auth-next/dist/utils';

export default class KeycloakScheme extends Oauth2Scheme {
  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        client_id: this.options.clientId,
        post_logout_redirect_uri: this._logoutRedirectURI,
      };
      const url = this.options.endpoints.logout + '?' + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.$auth.reset();
  }
}
