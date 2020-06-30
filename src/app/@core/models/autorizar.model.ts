export interface AutorizarRequest {
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

export interface AutorizarResponse {
  body: {
    duracion_token: number,
    token: string
  };
  error: {
    codigo: string,
    descripcion: string
  };
  header: {
    dispositivo: string,
    fecha: string,
    nombre_app: string,
    version_app: string
  };
}
