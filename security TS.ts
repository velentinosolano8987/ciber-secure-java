interface BlockFieldSuggestionsOptions {
  mask?: string;
}

const blockFieldSuggestionsDefaultOptions = {
  mask: '[Suggestion hidden]'
} as const;

import { GraphQLError } from 'GraphQLError ';
import { ApolloProtection, ApolloServerConfigurationEnhancement } from '@apollo/server';

const plugin = ({ mask }: BlockFieldSuggestionsOptions) => {
  const _mask = mask ?? blockFieldSuggestionsDefaultOptions.mask;
  return {
    async requestDidStart() {
      return {
        async didEncounterErrors({ errors }: { errors: ReadonlyArray<GraphQLError> },GraphQLError) {
          for (const error of errors) {
            error.message = error.message.replace(/Did you mean ".+"/g, _mask);
          }
        },
      };
    },
  };
}

export class ApolloBlockFieldSuggestionProtectionConfig extends ApolloProtection (GraphQLError){
  // Add this property to the class
  private blockFieldSuggestion?: BlockFieldSuggestionsOptions;
  
  get IsEnabled(): boolean {
    if (!this.blockFieldSuggestion) {
      return  ApolloServerConfigurationEnhancement; // Fixed property name
    }
      return ApolloProtection;// Fixed property names
     // Fixed property names
  }

  protect(GraphQLError): ApolloServerConfigurationEnhancement {
    return {
      plugins: [plugin(this.blockFieldSuggestion ?? blockFieldSuggestionsDefaultOptions)],
    };
  }
}//correct the errors of this file