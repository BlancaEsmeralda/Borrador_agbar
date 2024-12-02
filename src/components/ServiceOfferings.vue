<template>
  <div>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo de aguas de barcelona" />
      </router-link>
    </div>
    <div class="contenedor_titulo">
      <h1 class="titulo animate__animated animate__fadeInDown animate_faster">
        Service Offering
      </h1>
    </div>

    <div class="contenedor_formulario">
      <form class="formulario" @submit.prevent="guardarDatos">
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

        <div>
          <label for="service_offering">Service Offering</label>
          <select
            v-model="service_offering"
            name="service_offering"
            id="service_offering"
          >
            <option
              v-for="option in service_offerings"
              :key="option.id"
              :value="option.id"
            >
              {{ option.nombre }}
            </option>
          </select>
        </div>
        <div>
          <label for="porcentaje_SO"> %S.O:</label>
          <input
            v-model="porcentaje_SO"
            type="text"
            id="porcentaje_SO"
            name="porcentaje_SO"
          />
        </div>
        <!--Contenedor de checboxes-->
        <div class="checkboxes">
          <div>
            <input
              v-model="SO_principal"
              type="checkbox"
              id="SO_principal"
              name="SO_principal"
            /><label for="SO_pricipal">S.O Principal:</label>
          </div>
          <div>
            <input
              v-model="Escritico"
              type="checkbox"
              id="Escritico"
              name="EScritico"
            />
            <label for="EScritico">Es Crítico:</label>
          </div>
        </div>
        <div>
          <label for="responsable1">Responsable:</label>
          <input
            v-model="responsable"
            type="text"
            id="responsable"
            name="responsable"
          />
        </div>
        <div>
          <label for="responsable2">Segundo Responsable:</label>
          <input
            v-model="responsable2"
            type="text"
            id="responsable2"
            name="responsable2"
          />
        </div>
        <div>
          <label for="categoria">Categoria:</label>
          <input
            v-model="categoria"
            type="text"
            id="categoria"
            name="categoria"
          />
        </div>
        <div>
          <label for="subcategoria">Subcategoria:</label>
          <input
            v-model="subcategoria"
            type="text"
            id="subcategoria"
            name="subcategoria"
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

.subtitulos {
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
  padding: 20px 50px 50px 100px;
}
.formulario {
  background-color: #fff;
  padding: 45px;
  border-radius: 8px;
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

/* Checkboxes */
.checkboxes {
  padding: 20px;
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
