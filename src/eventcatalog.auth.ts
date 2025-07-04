// types/auth.ts
import type { OAuthUserConfig } from '@auth/core/providers';
import type { GitHubProfile } from '@auth/core/providers/github';
import type { OktaProfile } from '@auth/core/providers/okta';
import type { Auth0Profile } from '@auth/core/providers/auth0';
import type { MicrosoftEntraIDProfile } from '@auth/core/providers/microsoft-entra-id';
import type { GoogleProfile } from '@auth/core/providers/google';

export interface EventCatalogAuthConfig {
  providers?: {
    github?: OAuthUserConfig<GitHubProfile>;
    google?: OAuthUserConfig<GoogleProfile>;
    okta?: OAuthUserConfig<OktaProfile>;
    auth0?: OAuthUserConfig<Auth0Profile>;
    entra?: OAuthUserConfig<MicrosoftEntraIDProfile>;
  };
  // Enterprise only features
  customAuthConfig?: string;
  customMiddleware?: string;
  // Session configuration
  session?: {
    maxAge?: number;
    updateAge?: number;
  };
}
