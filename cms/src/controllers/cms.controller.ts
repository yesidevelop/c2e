// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get} from '@loopback/rest';

export class CmsController {
  constructor() {}
  @get('/cms')
  cms(): string {
    return 'Rendering from CMS!';
  }
}
