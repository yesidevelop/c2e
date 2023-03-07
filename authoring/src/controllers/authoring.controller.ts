// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class AuthoringController {
  constructor() {}
  @get('/authoring')
  authoring(): string {
    return 'Authoring Service!';
  }
}

