[...]

auth: {
    strategies: {
      keycloak: {
        scheme: '~/plugins/keycloak.ts',
        endpoints: {
          token:
            'https://keycloak.domain.tld/auth/realms/my-realm/protocol/openid-connect/token',
          authorization:
            'https://keycloak.domain.tld/auth/realms/my-realm/protocol/openid-connect/auth',
          userInfo:
            'https://keycloak.domain.tld/auth/realms/my-realm/protocol/openid-connect/userinfo',
          logout:
            'https://keycloak.domain.tld/auth/realms/my-realm/protocol/openid-connect/logout',
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          name: 'Authorization',
        },
        refreshToken: {
          property: 'refresh_token',
        },
        grantType: 'authorization_code',
        responseType: 'code',
        codeChallengeMethod: 'S256',
        clientId: 'my-clientId',
        scope: ['openid', 'profile', 'roles'],
      },
    },
  },

[...]