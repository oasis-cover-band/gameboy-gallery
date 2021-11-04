import { Pipe, PipeTransform } from '@angular/core';
import * as Bowser from "bowser";

@Pipe({
  name: 'include'
})
export class IncludePipe implements PipeTransform {

  browser = Bowser.getParser(window.navigator.userAgent);
  userAgent = Bowser.parse(window.navigator.userAgent);
  userAgentDetails = JSON.stringify(this.userAgent, null, 4);
  browserDetails: {name: string, version: string} = JSON.parse(JSON.stringify(this.browser.getBrowser(), null, 4));
  constructor(
  ) {

  }
  
  transform(valueToCheck: unknown, searchQuery: unknown): unknown {
    if (String(searchQuery)) {
      const string = String(searchQuery);
      if (this.browserDetails.name !== 'Internet Explorer') {
        if (String(valueToCheck).toLowerCase().includes(string.toLowerCase()) === true) {
          return true;
        } else {
          return false;
        }
      } else {
        if (String(valueToCheck).toLowerCase().indexOf(string.toLowerCase()) !== -1) {
          return true;
        } else {
          return false;
        }
      }
    }
    return null;
  }

}
