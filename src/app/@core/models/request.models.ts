export interface IRequest {

    body: {
        id_operacion: number,
        mensaje_request: {
            body: {
                id_operacion: number,
                mensaje_request: {
                    body: any,
                    header: {
                        dispositivo: string,
                        fecha: string,
                        nombre_app: string,
                        token: string,
                        version_app: string
                    }
                },
                nombre_operacion: string
            },
            header: {
                dispositivo: string,
                fecha: string,
                nombre_app: string,
                token: string,
                version_app: string
            }
        },
        nombre_operacion: string
    };
    header: {
        dispositivo: string,
        fecha: string,
        nombre_app: string,
        token: string,
        version_app: string
    };
}

export interface IServicesRequest {
    body: {
        solicita_token: string
    };
    header: {
        dispositivo: string,
        fecha: string,
        nombre_app: string,
        version_app: string
    };
}
