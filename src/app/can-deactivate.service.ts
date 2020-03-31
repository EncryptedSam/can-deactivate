import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate{
  canNavigate:boolean;
}


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CanComponentDeactivate>{

  constructor() { }

  canDeactivate(component:CanComponentDeactivate){
    if(component.canNavigate == true){
      return true;
    }else{
      if(confirm("Do you want to Discard Changes?")){
        return true;
      }else{
        return false;
      }
    }
  }

}
