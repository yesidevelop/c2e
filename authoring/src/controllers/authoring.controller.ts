// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class AuthoringController {
  constructor() {}
  @get('/authoring')
  authoring(): object {
    return {
      src: 'https://currikicdn.s3.us-west-2.amazonaws.com/specifications/authoring.png',
      title: 'Authoring Service'
    }
  }
}

