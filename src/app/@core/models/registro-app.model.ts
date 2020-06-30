export interface RegistroAppRequest {

    body: {
        canal: string,
        firma: string,
        mac: string,
        so: string,
        version_app: string,
        version_so: string
    };
    header: {
        fecha: string
    };
}

export interface RegistroAppResponse {
    body: {
        firma: string,
        id: string,
        wk: string
    };
    error: {
        codigo: string,
        descripcion: string
    };
    header: {
        fecha: string
    };
}
