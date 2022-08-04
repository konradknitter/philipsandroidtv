import crypto from 'crypto';

const secret_key = 'JCqdN5AcnAHgJYseUn7ER5k3qgtemfUvMRghQpTfTZq7Cvv8EPQPqfz6dDxPQPSu4gKFPWkJGw32zyASgJkHwCjU';

export function prepareAuthenticationRequestPayload(timestamp: string, pin: string, apiUser: string, apiPass: string, appName: string) {
    const hash = crypto
        .createHmac('sha1', Buffer.from(secret_key, 'base64').toString())
        .update(timestamp + pin)
        .digest('hex');

    return {
        auth: {
            pin: pin,
            auth_timestamp: timestamp,
            auth_signature: hash,
        },
        device: {
            'device_name': 'heliotrope',
            'device_os': 'Android',
            'app_name': appName,
            'type': 'native',
            'app_id': 'app.id',
            'id': apiUser,
            'auth_key': apiPass,
        },
    };
}
