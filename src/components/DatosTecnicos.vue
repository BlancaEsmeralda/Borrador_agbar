<template>
  <div>
    <!--Contenedor del logo-->
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo " />
      </router-link>
    </div>
    <div class="contenedor_global">
      <!--Contenedor del titulo-->
      <div class="contenedor_titulo">
        <h1 class="titulo animate__animated animate__fadeInDown animate_faster">
          Datos Técnicos
        </h1>
      </div>
      <!--Contenedor del formulario externo-->
      <div class="contenedor_formulario_dTecnicos">
        <!--Contenedor del formulario-->
        <form class="formulario_dTecnicos" @submit.prevent="buscarActivo">
          <!--Input del nombre del activo-->
          <input
            v-model="id_seguridad"
            type="text"
            id="id_seguridad"
            name="id_seguridad"
            placeholder="ACTIVO"
          />
          <button type="submit">Prueba con la api</button>
          <!--contenedor de la barra de navegación-->
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
          <!--Contenedor de modelo-->
          <div>
            <label for="modelo">Modelo</label>
            <select v-model="formData.modelo" id="opcionesModelo" name="modelo">
              <option
                v-for="option in opcionesModelo"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de fabricante-->
          <div>
            <label for="fabricante">Fabricante</label>
            <input
              v-model="formData.fabricante"
              type="text"
              id="fabricante"
              name="fabricante"
            />
          </div>
          <!--Contenedor de numero de serie-->
          <div>
            <label for="numserie"> Número de serie</label>
            <input
              v-model="formData.numserie"
              type="text"
              id="numserie"
              name="numserie"
            />
          </div>
          <!--Contenedor de modelo antiguo-->
          <div class="modelo_antiguo">
            <label for="modelo_antiguo">Modelo(campo antiguo)</label>
            <input
              v-model="formData.modelo_antiguo"
              type="text"
              id="modeloantiguo"
              name="modeloantiguo"
            />
          </div>
          <!--Contenedor de RAM-->
          <div class="ram-sockets">
            <label for="ram">RAM(GB)</label>
            <input v-model="formData.ram" type="text" id="ram" name="ram" />
          </div>
          <!--Contenedor de Sockets-->
          <div>
            <label for="core-sockets">Sockets</label>
            <input
              v-model="formData.sockets"
              type="text"
              id="sockets"
              name="sockets"
            />
          </div>
          <!--Contenedor de cores por socket-->
          <div>
            <label for="coresocket">Cores por Socket</label>
            <input
              v-model="formData.coresocket"
              type="text"
              id="coresocket"
              name="coresocket"
            />
          </div>

          <!--Seccion del sistema operativo-->
          <div class="full-width">
            <h2 class="subtitulos">Sistema operativo</h2>
          </div>
          <div>
            <label for="sis_operativo">Sistema_operativo(Versión)</label>
            <select
              v-model="formData.sis_operativo"
              id="sis_operativo"
              name="sis_operativo"
            >
              <option
                v-for="option in opciones_sis_operativo"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <div>
            <label for="generacion_so">Generación S.O</label>
            <input
              v-model="formData.generacion_so"
              type="text"
              id="generacion_so"
              name="generacion_so"
            />
          </div>

          <div>
            <label for="sis_Operativo_pla">Sistema Operativo(Plataforma)</label>
            <select
              v-model="formData.sis_Operativo_pla"
              name="sis_Operativo_pla"
              id="sis_Operativo_pla"
            >
              <option
                v-for="option in opciones_sis_Operativo_pla"
                :key="option.id"
                value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>

          <div>
            <label for="servicePack">Service Pack</label>
            <input
              v-model="formData.servicePack"
              type="text"
              id="servicePack"
              name="servicePack"
            />
          </div>
          <div class="full-width">
            <h2 class="subtitulos">Identificación de la red</h2>
          </div>

          <!--Nombre de del dominio y el nombre del dns-->
          <div>
            <label for="dominio">Dominio</label>
            <select v-model="formData.dominio" name="dominio" id="dominio">
              <option
                v-for="option in opcionDominio"
                :key="option.id"
                value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <div>
            <label for="nombre_dns_NetBios">Nombre DNS/NetBIOS</label>
            <input
              v-model="formData.nombre_dns_NetBios"
              type="text"
              id="nombre_dns_NetBios"
              name="nombre_dns_NetBios"
            />
          </div>

          <!--IP-->
          <div>
            <label for="ip_principal">IP Principal</label>
            <input
              v-model="formData.ip_principal"
              type="text"
              id="ip_principal"
              name="ip_principal"
            />
            <label for="ip_nat">IP NAT</label>
            <input
              v-model="formData.ip_nat"
              type="text"
              id="ip_nat"
              name="ip_nat"
            />
            <label for="ip_backup">IP Backup</label>
            <input
              v-model="formData.ip_backup"
              type="text"
              id="ip_backup"
              name="ip_backup"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TecnicosDatos",
  data() {
    return {
      id_seguridad: "",
      formData: {
        //select
        modelo: "",
        fabricante: "",
        numserie: "",
        modelo_antiguo: "",
        ram: "",
        sockets: "",
        coresocket: "",
        //select
        sis_operativo: "",
        generacion_so: "",
        //select
        sis_Operativo_pla: "",
        servicePack: "",
        dominio: "",
        nombre_dns_NetBios: "",
        ip_principal: "",
        ip_nat: "",
        ip_backup: "",
      },
      opcionesModelo: [],
      opciones_sis_operativo: [],
      opciones_sis_Operativo_pla: [],
      opcionDominio: [],
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
          this.formData.modelo = data.name;
          this.formData.fabricante = data.title;
          this.formData.numserie = data.title;
          this.formData.modelo_antiguo = data.title;
          this.formData.ram = data.title;
          this.formData.sockets = data.title;
          this.formData.coresocket = data.title;
          this.formData.sis_operativo = data.title;
          this.formData.generacion_so = data.title;
          this.formData.sis_Operativo_pla = data.title;
          this.formData.servicePack = data.title;
          this.formData.dominio = data.title;
          this.formData.nombre_dns_NetBios = data.title;
          this.formData.ip_principal = data.title;
          this.formData.ip_nat = data.title;
          this.formData.ip_backup = data.title;

          // Llama a la API para llenar los select
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
              // Nota que ahora usamos 'response' en lugar de 'responce'
              this.opcionesModelo = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.opciones_sis_operativo = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.opciones_sis_Operativo_pla = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.opcionDominio = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
            })
            .catch((error) => {
              console.error("Error al obtener las opciones:", error);
            });
        })
        .catch((error) => {
          console.error("Error al obtener la información:", error);
          alert("No se encontró información para este ID.");
          this.limpiarCampos();
        });
    },
    limpiarCampos() {
      this.formData = {
        modelo: "",
        fabricante: "",
        numserie: "",
        modelo_antiguo: "",
        ram: "",
        sockets: "",
        coresocket: "",
        sis_operativo: "",
        generacion_so: "",
        sis_Operativo_pla: "",
        servicePack: "",
        dominio: "",
        nombre_dns_NetBios: "",
        ip_principal: "",
        ip_nat: "",
        ip_backup: "",
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
  background-color: #ffffff;
  background-image: url("../assets/water-splash.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 100% auto;
}
/* Títulos y Subtitulos*/
.contenedor_titulo {
  padding: 30px;
  margin-bottom: 1px;
}
.titulo {
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: #1c346c;
  border-radius: 20px;
  padding: 10px 20px;
  display: inline-block;
  margin-top: 50px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.subtitulos {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  background-color: #1c346c;
  border-radius: 20px;
  padding: 10px 20px;
  display: inline-block;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
}

label {
  font-size: 16px;
  font-weight: bold;
  color: #09090a;
  background-color: #e0f1ff;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: inline-block;
}
/* Formularios */
.identificador {
  padding: 20px;
}
.contenedor_formulario_dTecnicos {
  padding: 25px 50px 50px 100px;
}
.formulario_dTecnicos {
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
.checkbox-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-column: 1 / -1;
}

.checkbox-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox-item input[type="checkbox"] {
  margin-right: 10px;
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
