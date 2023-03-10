// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class MediaController {
  constructor() {}
  @get('/media')
  media(): object {
    return {
      src: 'https://currikicdn.s3.us-west-2.amazonaws.com/specifications/spec_media.png',
      title: 'Media Service'
    }
    
  }
}


