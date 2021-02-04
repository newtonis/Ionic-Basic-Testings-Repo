import { Component, OnInit } from '@angular/core';
import { VitalSigns } from '../vital-signs';
import { VitalSignsService } from '../vital-signs.service';

@Component({
  selector: 'app-vital-signs-bar',
  templateUrl: './vital-signs-bar.component.html',
  styleUrls: ['./vital-signs-bar.component.scss'],
})
export class VitalSignsBarComponent implements OnInit {

  // currvitalSigns = ALLVITALSIGNS;
  currVitalSigns : VitalSigns = {heartRate : 0, temperature:0, oxygenSaturation:0};

  constructor(private vitalSignService: VitalSignsService) { }

  ngOnInit() {
    this.getVitalSigns();
  }

  getVitalSigns(): void {
    this.currVitalSigns = this.vitalSignService.getVitalSigns();    
  }

}
