// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class MediaController {
  constructor() {}
  @get('/media')
  authoring(): string {
    return 'Media Service!';
  }
}


