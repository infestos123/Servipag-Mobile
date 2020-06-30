export interface AppRequest {
  body: {
    id_operacion: number,
    mensaje_request: {
      body: {
        id_operacion: number,
        mensaje_request: {
          body: {},
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

export interface AppResponse {
  body: {
    id_operacion: number,
    mensaje_response: string,
    nombre_operacion: string
  };
  error: {
    codigo: string,
    descripcion: string
  };
  header: {
    dispositivo: string,
    fecha: string,
    nombre_app: string,
    token: string,
    version_app: string
  };
}
