/*******************************************************************************
 * Copyright IBM Corp. 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], filterStr: string): any {
    if (!items) {
      return [];
    }
    if(!filterStr) {
      return items;
    }
	filterStr = filterStr.toLowerCase();
    return items.filter(
      i => i.firstName.toLowerCase().indexOf(filterStr) !== -1 
      || i.lastName.toLowerCase().indexOf(filterStr) !== -1 
      || i.email.toLowerCase().indexOf(filterStr) !== -1 
      || i.phone.toLowerCase().indexOf(filterStr) !== -1 
      || i.birthDate.toLowerCase().indexOf(filterStr) !== -1 
      || i.notes.toLowerCase().indexOf(filterStr) !== -1
    );
  }

}
