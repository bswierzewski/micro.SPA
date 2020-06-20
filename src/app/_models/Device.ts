export interface Device {
    id: number;
    created: Date;
    lastActivated: Date;
    macAddress: string;
    name: string;
    kind: string;
    role: string;
    isActive: boolean;
    isArchival: boolean;
    photoUrl: string;
}
