import { Injectable } from '@angular/core';
import { VitalSigns } from './vital-signs';
import { ALLVITALSIGNS } from './mock-vital-signs';

@Injectable({
  providedIn: 'root'
})
export class VitalSignsService {

  constructor() { }

  getVitalSigns(): VitalSigns{

    return ALLVITALSIGNS;
  }

}
