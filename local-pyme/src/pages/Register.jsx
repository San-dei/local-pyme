export const Register = () => {
  return (
    <>
      <div>
        <div>Registrarse</div>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" placeholder="Nombre" id="nombre"/>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" placeholder="Apellido" id="apellido"/>
          <label htmlFor="email">E-mail:</label>
          <input type="text" placeholder="Email" id="email"/>
          <label htmlFor="provincia">Provincia:</label>
          <input type="text" placeholder="Provincia" id="provincia"/>
          <label htmlFor="localidad">localidad:</label>
          <input type="text" placeholder="Localidad" id="localidad"/>
          <label htmlFor="direccion">Direccion:</label>
          <input type="text" placeholder="Direccion"id="direccion" />
          <label htmlFor="piso">Piso:</label>
          <input type="text" placeholder="Piso" id="piso"/>
          <label htmlFor="codigo_postal">Codigo Postal:</label>
          <input type="text" placeholder="Codigo Postal" id="codigo_postal" />
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" placeholder="Contraseña" id="contraseña"/>
          <label htmlFor="verificar_contraseña">Verificar contraseña:</label>
          <input type="password" placeholder="Verificar contraseña" id="verificar_contraseña"/>
        </form>
      </div>
    </>
  );
};
