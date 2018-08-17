export interface IUser {
  credits: number;
  devices: IDevices[];
  messages: [string];
  mobiles: IMobiles[];
}

export interface IDevices {
  message_sent: number;
  mobile_no: string;
  name: string;
  status: boolean;
  id?: string;
}

export interface IMobiles {
  mobile_no: string;
  name?: string;
  id?: string;
}
