<template>
  <div>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo de aguas de barcelona" />
      </router-link>
    </div>
    <div class="contenedor_titulo">
      <h1 class="titulo animate__animated animate__fadeInDown animate_faster">
        Seguridad
      </h1>
    </div>

    <div class="contenedor_formulario">
      <form class="formulario" @submit.prevent="guardarDatos">
        <div>
          <input
            v-model="id_seguridad"
            type="text"
            id="id_seguridad"
            name="id_seguridad"
          />
        </div>
        <!--contenedor de la barra de navegacion-->
        <div id="Pestañas">
          <nav class="animate__animated animate__fadeInDown animate_faster">
            <!--Enlaces de las diferentes pestañas de la pagina-->
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
        <div class="checkbox">
          <div>
            <input v-model="av_activo" type="checkbox" id="AV_activo" />
            <label for="av_activo">AV Activo</label>
          </div>
        </div>

        <div>
          <label for="antivirus">Antivirus:</label>
          <input v-model="antivirus" type="text" id="antivirus" />
        </div>
        <div>
          <label for="version">Version:</label>
          <input v-model="version" type="text" id="version" name="version" />
        </div>
        <div class="checkbox">
          <div>
            <input
              v-model="DLP_activo"
              type="checkbox"
              id="DLP_activo"
              name="DLP_activo"
            />
            <label for="DLP_activo">DLP Activo</label>
          </div>
        </div>

        <div>
          <label for="version_dlp">Version DLP:</label>
          <input
            v-model="version_dlp"
            type="text"
            id="version_dlp"
            name="version_dlp"
          />
        </div>

        <div>
          <label for="ver_agente_seguridad"> Versión Agente Seguridad:</label>
          <input
            v-model="ver_agente_seguridad"
            type="text"
            id="ver_agente_seguridad"
            name="ver_agente_seguridad"
          />
        </div>
        <!--contenedor del solid activo-->
        <div class="checkbox">
          <div>
            <input
              v-model="solid_activo"
              type="checkbox"
              name="solid_activo"
              id="soliid_activo"
            />
            <label for="solid_activo">SOLID Activo</label>
          </div>
        </div>

        <div class="checkbox">
          <label for="version_solid">Version SOLID:</label>
          <input v-model="version_solid" type="text" />
        </div>
        <!--contenedor de fire eye activo-->
        <div class="chekbox">
          <div>
            <input
              v-model="FireEyeActivo"
              type="checkbox"
              name="FireEyeActivo"
              id="FireEyeActivo"
            />
            <label for="FireEyeActivo">FireEye Activo</label>
          </div>
        </div>

        <div>
          <label for="version_FireEye">Version FireEye:</label>
          <input
            v-model="version_FireEye"
            type="text"
            id="version_FireEye"
            name="version_FireEye"
          />
        </div>
        <!--Checkboxes---->
        <div class="full-width">
          <h2 class="subtitulo">Obsolencias</h2>
        </div>
        <!--Primera fila de checboxes-->
        <div class="checkbox">
          <div>
            <input v-model="samba" type="checkbox" name="samba" id="samba" />
            <label for="samba">SAMBA v1 Activo</label>
          </div>
          <div>
            <input
              v-model="win_fuera_sop"
              type="checkbox"
              name="win_fuera_sop"
              id="win_fuera_sop"
            />
            <label for="win_fuera_sop"> Windows fuera de soporte</label>
          </div>

          <div>
            <input
              v-model="ora_fuera_sop"
              type="checkbox"
              name="ora_fuera_sop"
              id="ora_fuera_sop"
            />
            <label for="ora_fuera_sop">Oracle fuera de sporte</label>
          </div>

          <div>
            <input
              v-model="tls_10_activo"
              type="checkbox"
              id="tls_10_activo"
              name="tls_10_activo"
            />
            <label for="tls_10_activo">TLS 1.0 Activo</label>
          </div>

          <div>
            <input
              v-model="sop_es_activado"
              type="checkbox"
              id="sop_ex_activo"
              name="sop_ex_activo"
            />
            <label for="sop_ex_activo">Soprte extendido activado</label>
          </div>

          <div>
            <input
              v-model="sql_fuera_sop"
              type="checkbox"
              id="sql_fuera_sop"
              name="sql_fuera_sop"
            />
            <label for="sql_fuera_sop">SQL Server fuera de soporte</label>
          </div>

          <div>
            <input
              v-model="tls_11_activo"
              type="checkbox"
              id="tls_11_activo"
              name="tls_11_activo"
            />
            <label for="tls_11_activo" id="tls_11_activo" name="tls_11_activo"
              >TLS 1.1 Activo</label
            >
          </div>
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
.subtitulo {
  font-size: 30px;
  font-weight: bold;
  color: #1c346c;
  margin-top: 30px;
  margin-bottom: 30px;
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
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
