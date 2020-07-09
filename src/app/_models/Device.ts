export interface Device {
    id: number;
    created: Date;
    macAddress: string;
    name: string;
    kind: string;
    type: string;
    photoUrl: string;
    versionId?: number;
}
