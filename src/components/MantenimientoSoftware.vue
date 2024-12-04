<template>
  <!--Contenedor de la pagina entera-->
  <div class="page-container">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo " />
      </router-link>
    </div>
    <div class="contenedor_global">
      <div class="contenedor_titulo">
        <h1 class="titulo animate__animated animate__fadeInDown animate_faster">
          Software
        </h1>
      </div>

      <div class="contenedor_formulario">
        <form class="formulario" @submit.prevent="buscarActivo">
          <div>
            <input
              v-model="id_seguridad"
              type="text"
              id="id_seguridad"
              name="id_seguridad"
              placeholder="ACTIVO"
            />
          </div>

          <!--contenedor de la barra de navegacion-->
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

          <div>
            <label for="modelo_software">Modelo de software:</label>
            <input
              v-model="formData.modelo_software"
              type="text"
              id="modelo_software"
              name="modelo_software"
            />
          </div>
          <div>
            <label for="licencia">Licencia:</label>
            <input
              v-model="formData.licencia"
              type="text"
              id="licencia"
              name="licencia"
            />
          </div>
          <div>
            <label for="comentarios">Comentarios:</label>
            <input
              v-model="formData.comentarios"
              type="text"
              id="comentarios"
              name="comentarios"
            />
          </div>
          <button type="submit">Cargar Información</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TaskList",
  data() {
    return {
      id_seguridad: "", // ID ingresado por el usuario
      formData: {
        modelo_software: "",
        licencia: "",
        comentarios: "",
      },
    };
  },
  methods: {
    buscarActivo() {
      if (!this.id_seguridad) {
        alert("Por favor, introduce un ID válido.");
        return;
      }

      // Llama a la API para obtener los datos simulados
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/${this.id_seguridad}`)
        .then((response) => {
          const data = response.data;
          // Actualiza los campos con los datos obtenidos
          this.formData.modelo_software = data.title;
          this.formData.licencia = data.title; // Dato ficticio
          this.formData.comentarios = data.title; // Dato predeterminado
        })
        .catch((error) => {
          console.error("Error al obtener la información:", error);
          alert("No se encontró información para este ID.");
          this.limpiarCampos();
        });
    },
    limpiarCampos() {
      this.formData = {
        modelo_software: "",
        licencia: "",
        comentarios: "",
      };
    },
  },
};
</script>
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
/* Fondo */
.contenedor_global {
  background-color: #ffffff; /* o el color que prefieras */
  background-image: url("../assets/water-splash.png");
  background-repeat: no-repeat;
  background-position: bottom right; /* o la posición que prefieras */
  background-size: 100% auto; /* ajusta el tamaño según sea necesario */
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
  padding: 25px 50px 190px 100px;
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
