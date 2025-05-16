export class JwtObject {
  #jwtArray;

  constructor(jwtstring) {
    if (!this.isCorrectFormat(jwtstring)) {
      throw new SyntaxError("Invalid jwt format");
    }

    this.#jwtArray = jwtstring.split(".");
  }

  getJwt() {
    return this.#jwtArray.join(".");
  }

  getHeader() {
    return this.decodeJwtSection(this.#jwtArray[0]);
  }
  getPayload() {
    return this.decodeJwtSection(this.#jwtArray[1]);
  }

  getSignature() {
    return this.decodeJwtSection(this.#jwtArray[2]);
  }

  decodeJwtSection(jwtSection) {
    // Decodificar de Base64Url a Base64 (reemplazando los caracteres)
    const base64 = jwtSection.replace(/-/g, "+").replace(/_/g, "/");

    // Decodificar el Base64 a una cadena UTF-8
    const payloadJson = atob(base64);

    // Convertir la cadena JSON en un objeto JavaScript
    return JSON.parse(payloadJson);
  }

  isCorrectFormat(...jwt) {
    if(jwt.length == 0) {
      return this.#jwtArray.length === 3 ? true : false;
    }
    return jwt[0].split(".").length === 3 ? true : false;
  }
}
