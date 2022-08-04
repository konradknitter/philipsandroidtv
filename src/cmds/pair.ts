function makeDeviceId(length: number) {
    const result : Array<string> = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength : number = characters.length;
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * charactersLength);
        result.push(characters.charAt(random));
    }
    return result.join('');
}

export function createUniquePairRequestPayload(appName: string) {
    const deviceId = makeDeviceId(16);
    const payload = {
        'application_id': 'app.id',
        'device_id': deviceId,
        'scope': ['read', 'write', 'control'],
        'device': {
            'device_name': 'heliotrope',
            'device_os': 'Android',
            'app_name': appName,
            'type': 'native',
            'app_id': 'app.id',
            'id': deviceId,
        },
    };

    return payload;
}

