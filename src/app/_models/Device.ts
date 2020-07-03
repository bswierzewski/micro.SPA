export interface Device {
    id: number;
    created: Date;
    lastActivated: Date; 
    kind: string;
    role: string;
    isActive:boolean;
    isArchival: boolean;
    photoUrl: string;
    name: string;
    macAddress: string;
    subscribe: boolean;
}
