// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get} from '@loopback/rest';
import {People} from '../services';

export class CmsController {
  constructor(
    @inject('services.People')
    protected peopleService: People,
  ) { }
  // @get('/cms')
  // cms(): string {
  //   return 'Rendering from CMS!';
  // }

  @get('/cms')
  async getCharacter(
  ): Promise<string> {
    //Preconditions
    return this.peopleService.getCharacter();
  }
}
