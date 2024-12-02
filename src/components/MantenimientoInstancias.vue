<template>
  <div>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo de aguas de barcelona" />
      </router-link>
    </div>
    <div class="contenedor_titulo">
      <h1 class="titulo animate__animated animate__fadeInDown animate_faster">
        Instancias
      </h1>
    </div>
    <div class="contenedor_formulario">
      <form class="formulario" @submit.prevent="gurdarDatos">
        <div>
          <input
            v-model="identificador"
            type="text"
            id="identificador"
            name="identificador"
            placeholder="ACTIVO"
          />
        </div>
        <div id="Pestañas">
          <nav class="animate__animated animate__fadeInDown animate_faster">
            <router-link to="/datosgenerales">Datos Grales.</router-link>
            <router-link to="/datostecnicos">Datos Técnicos</router-link>
            <router-link to="/serviceoffering">Service Offerings</router-link>
            <router-link to="/instancias">Instancias</router-link>
            <router-link to="/comunicaciones">Comunicaciones</router-link>
            <router-link to="/seguridad">Seguridad</router-link>
            <router-link to="/micro">Micro</router-link>
            <router-link to="/software">Software</router-link>
          </nav>
        </div>
        <!--Contenedor de nombre-->
        <div>
          <label for="nombre_instancia">Nombre:</label>
          <input
            v-model="nombre_instancia"
            type="text"
            id="nombre_instancia"
            name="nombre_insatncia"
          />
        </div>
        <!--contendro entorno-->
        <div>
          <label for="entorno_instancia">Entorno:</label>
          <input
            v-model="entorno_instancia"
            type="text"
            id="entorno_instancia"
            name="entorno_instancia"
          />
        </div>
        <!--Contendor de citricidad-->
        <div>
          <label for="citricidad_intancia">Citricidad:</label>
          <input
            v-model="citricidad_intancia"
            type="text"
            id="citricidad_intancia"
            name="citricidad_intancia"
          />
        </div>
        <!--Contendor de aplic-->
        <div>
          <label for="aplic_intancia">Aplic:</label>
          <input
            v-model="aplic_intancia"
            type="text"
            id="aplic_intancia"
            name="aplic_intancia"
          />
        </div>
        <div>
          <label for="aplicacion_instancia">Aplicación:</label>
          <select
            v-model="aplicacion_instancia"
            id="aplicacion_instancia"
            name="aplicacion_instancia"
          >
            <option
              v-for="option in aplicacion_instancias"
              :key="option.id"
              value="option.id"
            >
              {{ option.nombre }}
            </option>
          </select>
        </div>
        <!--contenedor de it o ot-->
        <div>
          <label for="it_ot_instancia">ES IT/OT</label>
          <input type="text" name="it_ot_instancia" id="it_ot_instancia" />
        </div>

        <!--contenedor de los checks-->
        <div class="full-width">
          <div class="checkboxes">
            <!--Contenedor de view-->
            <div>
              <label for="esviewnex_instancia">Es Viewnex</label>
              <input
                v-model="esviewnex_instancia"
                type="checkbox"
                name="esviewnex_instancia"
                id="checkbox"
              />
            </div>
            <!--contenedor de es azure-->
            <div>
              <label for="esdeazure_instancia">Es de azure</label>
              <input
                v-model="esdeazure_instancia"
                type="checkbox"
                name="esdeazure_instancia"
                id="esdeazure_instancia"
              />
            </div>
          </div>
        </div>
        <!--Contendor de tarifas mes-->
        <div>
          <label for="tarifames_intancia">Tarifa mes(€)</label>
          <input
            v-model="tarifames_intancia"
            type="text"
            name="tarifames_intancia"
            id="tarifames_intancia"
          />
        </div>
        <!--Contendor de altagestion-->
        <div>
          <label for="altagestion_instancia">Alta Gestion</label>
          <input
            v-model="altagestion_instancia"
            type="text"
            id="altagestion_instancia"
            name="altagestion_instancia"
          />
        </div>
        <!--Contenedor de baja gestion-->
        <div>
          <label for="bajagestion_instancia">Baja Gestión</label>
          <input
            v-model="bajagestion_instancia"
            type="date"
            id="bajagestion_instancia"
            name="bajagestion_instancia"
          />
        </div>
        <!--Contenedor de detalle-->
        <div>
          <label for="detalle_instancia">DETALLE</label>
          <input
            v-model="detalle_instancia"
            type="text"
            id="detalle_instancia"
            name="detalle_instancia"
          />
        </div>
        <!--Contendor de motivo no festion de it-->
        <div>
          <label for="motivo_no_gestion_it">Motivo No gestión IT</label>
          <input
            v-model="motivo_no_gestion_it"
            type="text"
            id="motivo_no_gestion_it"
            name="motivo_no_gestion_it"
          />
        </div>

        <!--Contenedor comentarios-->
        <div class="full-width">
          <label for="comentarios">Comentarios</label>
          <input
            v-model="comentarios"
            type="text"
            name="comentarios"
            id="comentarios"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script></script>
<style scoped>
/* Estilos generales */
body {
  font-family: sans-serif;
  margin: 20px;
  background: #f3ddd3;
}
/* Estilos para el logo */
.logo {
  position: absolute;
  top: 30px;
  left: 40px;
}

.logo img {
  width: 100%;
  height: auto;
}
/* Títulos */
.contenedor_titulo {
  padding: 30px;
  margin-bottom: 1px;
}
.titulo {
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: #1c346c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 50px;
}
/* Formularios */
.identificador {
  padding: 20px;
}
.contenedor_formulario {
  padding: 25px 50px 50px 100px;
}
.formulario {
  background: #fff;
  padding: 45px;
  border-radius: 8p;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.formulario > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
}
/* Etiquetas y campos de entrada */
label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="date"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

/* Navegación */
#Pestañas {
  grid-column: 1 / -1;
  margin-bottom: 20px;
}

nav {
  background: #1c346c;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
}

nav a {
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: #eaf3f3;
  padding: 8px 15px;
  border-radius: 4px;
  transition: background-color 0.3s;
  flex-grow: 1;
  text-align: center;
}
nav a:hover {
  background-color: #fff;
  color: #243c7c;
}
/* Campos de ancho completo */
.full-width {
  grid-column: 1 / -1;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }

  nav a {
    margin-bottom: 5px;
  }

  .formulario {
    grid-template-columns: 1fr;
  }
}
</style>
