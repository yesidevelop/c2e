// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class MediaController {
  constructor() {}
  @get('/media')
  media(): string {
    return 'https://dev.currikistudio.org/api/storage/projects/63cfea46927c8.png';
  }
}


