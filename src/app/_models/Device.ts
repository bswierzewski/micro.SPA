export interface Device {
    id: number;
    created: Date;
    modified?: Date;
    macAddress: string;
    name: string;
    kind: string;
    type: string;
    photoUrl: string;
    versionId?: number;
    subscribe: boolean;
}
