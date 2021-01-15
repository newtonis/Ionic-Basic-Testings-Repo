import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  devices : {[code: string] : any} = {};
  device: any;
  msg: string[] = [];
  listDevicesKeys: string[] = [];

  constructor(private bluetoothSerial: BluetoothSerial) {
    
  }
  refreshDevices(){
    console.log(this.bluetoothSerial.showBluetoothSettings());

    this.bluetoothSerial.isConnected().then(
      data => {
        console.log(data);
      }
    );
    this.bluetoothSerial.discoverUnpaired().then(
      devices => {
        console.log("devices detected");
        this.msg.push("devices detected");
        console.log(devices);
        for (let d of devices){
          if (!(d.address in this.devices)){
            this.listDevicesKeys.push(d.address);
          }
          this.devices[d.address] = d;
        }
      }
    ).catch(error => {
      console.log(error);
    });

    this.bluetoothSerial.list().then(
      devices => {
        console.log("devices detected");
        this.msg.push("devices detected");
        console.log(devices);
        for (let d of devices){
          if (!(d.address in this.devices)){
            this.listDevicesKeys.push(d.address);
          }
          this.devices[d.address] = d;
        }
      }
    ).catch(error => {
      console.log(error);
    });
  }
  deviceSelected(device: any){
    console.log("device " + this.devices[device].name + " was selected");
    this.msg.push("device " + this.devices[device].name + " was selected");
    this.device = device;
    this.bluetoothSerial.connect(
      this.devices[device].address).subscribe(
        success => {
          
          console.log("connection successful");
          console.log("sending NewDevice_")
          this.msg.push("connection successful");
          this.msg.push("sending NewDevice_");
          this.bluetoothSerial.write("NewDevice_").then(data =>
            {
              console.log("NewDevice_ was sent");
              this.msg.push("NewDevice_ was sent");
            },
              failureMsg =>
            {
              console.log("failure to send initial message");
              this.msg.push("failure to send initial message");
            }
          );
          this.newDeviceConnected();
        }
      );
  }
  newDeviceConnected(){
    this.bluetoothSerial.subscribe('\n').subscribe(
      data => {
        console.log("Data recived: " +data);
        this.msg.push("Data recived: " + data);
        console.log("Sending device ack");
        this.bluetoothSerial.write("DeviceAck_").then(data => {
          console.log("Device Ack sent");
          this.msg.push("Device Ack sent");
        },
        failureMsg => {
          console.log("failure to send initial message");
          this.msg.push("failure to send initial message");
        });
      }
    );
  }

}
