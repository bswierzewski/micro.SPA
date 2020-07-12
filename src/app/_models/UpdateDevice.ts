export interface UpdateDevice {
    deviceId: number;
    name: string;
    kindId: number;
    typeId: number;
    versionId?: number;
    isAutoUpdate?: boolean;
}
