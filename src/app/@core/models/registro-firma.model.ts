export interface IRegistroFirma {

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
