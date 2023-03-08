// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class MediaController {
  constructor() {}
  @get('/media')
  authoring(): string {
    return 'https://elearningindustry.com/wp-content/uploads/2020/01/authoring-tools-8-questions-to-ask.jpg';
  }
}


