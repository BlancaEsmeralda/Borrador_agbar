<template>
  <div>
    <!--Contenedor del logo con la ruta al home-->
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="Logo de aguas de barcelona" />
      </router-link>
    </div>
    <div class="contenedor_global">
      <!--Contenedor del titulo datos generales-->
      <div class="contenedor_titulo">
        <h1
          class="Titulo1 animate__animated animate__fadeInDown animate_faster"
        >
          Datos Generales
        </h1>
      </div>
      <!--Contenedor del formulario-->
      <div class="contenedor_formulario">
        <form class="formulario" @submit.prevent="buscarActivo">
          <div class="identificador">
            <input
              v-model="id_seguridad"
              type="text"
              id="id_seguridad"
              name="id_seguridad"
              placeholder="ACTIVO"
            />
          </div>
          <!--ESTE BUTTON ES PARA HACER PRUEBAS DE CARGAR JSON ATRAVES DE UNA API-->
          <button type="submit">Pruebas conexion api</button>
          <!--Barra del menú de navegación-->
          <div id="Pestañas">
            <nav class="animate__animated animate__fadeInDown">
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
          <!--Contenedor del tipo Activo-->
          <div>
            <label for="tipoActivo">Tipo Activo:</label>
            <select
              v-model="formData.tipoActivo"
              id="tipoActivo"
              name="tipoActivo"
            >
              <option
                v-for="opcion in tipoActivoOpciones"
                :key="opcion.id"
                :value="opcion.id"
              >
                {{ opcion.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor del tipo Activo IT-->
          <div>
            <label for="tipoActivoIt">Tipo Activo It :</label>
            <select
              v-model="formData.tipoActivoIt"
              id="tipoActivoIT"
              name="tipoActivoIT"
            >
              <option
                v-for="opcion in tipoActivoItOpciones"
                :key="opcion.id"
                :value="opcion.id"
              >
                {{ opcion.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor del textarea con la clase largo completo-->
          <div class="full-width">
            <textarea
              v-model="formData.textDescripcion"
              id="textDescripcion"
              name="textDescripcion"
              placeholder="Descripción"
            ></textarea>
          </div>
          <!--Contenedor de es IT/OT-->
          <div>
            <label for="esITesOT">ES IT/ ES OT:</label>
            <select v-model="formData.esITesOT" id="esITesOT" name="esITesOT">
              <option
                v-for="opcion in esITesOTOpciones"
                :key="opcion.id"
                :value="opcion.id"
              >
                {{ opcion.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de Entorno-->
          <div>
            <label for="entorno">Entorno:</label>
            <select v-model="formData.entorno" id="entorno" name="entorno">
              <option
                v-for="opcion in entornoOpciones"
                :key="opcion.id"
                :value="opcion.id"
              >
                {{ opcion.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de Categoria-->
          <div>
            <label for="categoria">Categoria:</label>
            <select
              v-model="formData.categoria"
              id="categoria"
              name="categoria"
            >
              <option
                v-for="opcion in categoriaOpciones"
                :key="opcion.id"
                :value="opcion.id"
              >
                {{ opcion.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de Tarifa Mensual Servicio-->
          <div>
            <label for="tarifaMensual">Tarifa Mensual Servicio:</label>
            <input
              v-model="formData.tarifaMensual"
              type="text"
              id="tarifaMensual"
              name="tarifaMensual"
            />
            <span>€/mes</span>
          </div>
          <!--Contenedor de Ubicacion-->
          <div>
            <label for="ubicacion">Ubicacion:</label>
            <select
              v-model="formData.ubicacion"
              id="ubicacion"
              name="ubicacion"
            >
              <option
                v-for="option in ubicacionOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de Sububicacion-->
          <div>
            <label for="sububicacion">Sububicación:</label>
            <select
              v-model="formData.sububicacion"
              id="sububicacion"
              name="sububicacion"
            >
              <option
                v-for="option in sububicacionOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de comentarios-->
          <div class="full-width">
            <label for="comentarios">Comentarios:</label>
            <textarea
              v-model="formData.comentarios"
              id="comentarios"
              name="comentarios"
            ></textarea>
          </div>
          <!--Contenedor de Rack-->
          <div>
            <label for="rack">Rack:</label>
            <input v-model="formData.rack" type="text" id="rack" name="rack" />
          </div>
          <!--Contenedor de Posicion-->
          <div>
            <label for="posicion">Posicion:</label>
            <input
              v-model="formData.posicion"
              type="text"
              id="posicion"
              name="posicion"
            />
          </div>
          <!--Contenedor de Unidad-->
          <div>
            <label for="unidad">Unidad:</label>
            <input
              v-model="formData.unidad"
              type="text"
              id="unidad"
              name="unidad"
            />
          </div>
          <!--Contenedor de Empres-->
          <div>
            <label for="empresa">Empresa:</label>
            <select v-model="formData.empresa" id="empresa" name="empresa">
              <option
                v-for="option in empresaOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de los checkboxes-->
          <div class="checkbox-container">
            <!--Contenedor del primer checkbox-item con gestionadoProveedorOT-->
            <div class="checkbox-item">
              <input
                v-model="formData.gestionadoProveedorOT"
                type="checkbox"
                id="gestionadoProveedorOT"
                name="gestionadoProveedorOT"
              />
              <label for="gestionadoProveedorOT"
                >Gestionado por Proveedor OT</label
              >
            </div>
            <!--Contenedor del segundo checkbox-item con gestionadoProveedorIT-->
            <div class="checkbox-item">
              <input
                v-model="formData.gestionadoProveedorIT"
                type="checkbox"
                id="gestionadoProveedorIT"
                name="gestionadoProveedorIT"
              />
              <label for="gestionadoProveedorIT"
                >Gestionado por Proveedor IT</label
              >
            </div>
            <!--Contenedor del tercer checkbox-item con esAzure-->
            <div class="checkbox-item">
              <input
                v-model="formData.esAzure"
                type="checkbox"
                id="Esazure"
                name="Esazure"
              />
              <label for="Esazure">Es Azure</label>
            </div>
            <!--Contenedor del tercer checkbox-item con esSeguridad-->
            <div class="checkbox-item">
              <input
                v-model="formData.esSeguridad"
                type="checkbox"
                id="esSeguridad"
                name="esSeguridad"
              />
              <label for="esSeguridad">Es de Seguridad</label>
            </div>
          </div>
          <!--Contenedor del altaActivo-->
          <div>
            <label for="altaActivo">Alta Activo:</label>
            <input
              v-model="formData.altaActivo"
              type="date"
              id="altaActivo"
              name="altaActivo"
            />
          </div>
          <!--Contenedor del altaGestion-->
          <div>
            <label for="altaGestion">Alta Gestión:</label>
            <input
              v-model="formData.altaGestion"
              type="date"
              id="altaGestion"
              name="altaGestion"
            />
          </div>
          <!--Contenedor del mesAltaGestion-->
          <div>
            <label for="mesAltaGestion">Mes alta Gestión:</label>
            <input
              v-model="formData.mesAltaGestion"
              type="text"
              id="mesAltaGestion"
              name="mesAltaGestion"
            />
          </div>
          <!--Contenedor del bajaActivo-->
          <div>
            <label for="bajaActivo">Baja Activo:</label>
            <input
              v-model="formData.bajaActivo"
              type="date"
              id="bajaActivo"
              name="bajaActivo"
            />
          </div>
          <!--Contenedor del bajaGestion-->
          <div>
            <label for="bajaGestion">Baja Gestión:</label>
            <input
              v-model="formData.bajaGestion"
              type="date"
              id="bajaGestion"
              name="bajaGestion"
            />
          </div>
          <!--Contenedor del citricidad-->
          <div>
            <label for="citricidad">Citricidad:</label>
            <select
              v-model="formData.citricidad"
              id="citricidad"
              name="citricidad"
            >
              <option
                v-for="option in citricidadOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor del estado-->
          <div>
            <label for="estado">Estado:</label>
            <select v-model="formData.estado" id="estado" name="estado">
              <option
                v-for="option in estadoOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de anotaciones-->
          <div class="full-width">
            <label for="anotaciones">Anotaciones:</label>
            <textarea
              v-model="formData.anotaciones"
              id="anotaciones"
              name="anotaciones"
            ></textarea>
          </div>
          <!--Contenedor del segundo titulo con la clase largo completo-->
          <div class="full-width">
            <h2 class="Titulo2">Datos Administrativos</h2>
          </div>

          <!--Contenedor del proveedor-->
          <div>
            <label for="proveedor">Proveedor:</label>
            <select
              v-model="formData.proveedor"
              id="proveedor"
              name="proveedor"
            >
              <option
                v-for="option in proveedorOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor del fechaCompra-->
          <div>
            <label for="fechaCompra">Fecha de Compra:</label>
            <input
              v-model="formData.fechaCompra"
              type="date"
              id="fechaCompra"
              name="fechaCompra"
            />
          </div>
          <!--Contenedor del finGarantia-->
          <div>
            <label for="finGarantia">Fin de Garantia (Fabricante):</label>
            <input
              v-model="formData.finGarantia"
              type="date"
              id="finGarantia"
              name="finGarantia"
            />
          </div>
          <!--Contenedor del proveedorMant-->
          <div>
            <label for="proveedorMant">Prov. Mant. Hardware:</label>
            <select
              v-model="formData.proveedorMant"
              id="proveedorMant"
              name="proveedorMant"
            >
              <option
                v-for="option in proveedorMantOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor checkbox-item del pertet-->
          <div class="checkbox-item">
            <input
              v-model="formData.pertet"
              type="checkbox"
              id="pertet"
              name="pertet"
            />
            <label for="pertet">PERTET?</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ActivoGeneral",
  data() {
    return {
      id_seguridad: "",
      formData: {
        tipoActivo: "",
        tipoActivoIt: "",
        textDescripcion: "",
        esITesOTOpciones: "",
        entorno: "",
        categoria: "",
        tarifaMensual: "",
        ubicacion: "",
        sububicacion: "",
        comentarios: "",
        rack: "",
        posicion: "",
        unidad: "",
        empresa: "",
        //checkboxes
        gestionadoProveedorOT: "",
        gestionadoProveedorIT: "",
        esAzure: "",
        esSeguridad: "",
        //Gestion del activo
        altaActivo: "",
        altaGestion: "",
        mesAltaGestion: "",
        bajaActivo: "",
        bajaGestion: "",
        citricidad: "",
        anotaciones: "",
        fechaCompra: "",
        finGarantia: "",
        proveedorMant: "",
      },
      //option de los selects
      tipoActivoOpciones: [],
      tipoActivoItOpciones: [],
      esITesOTOpciones: [],
      entornoOpciones: [],
      categoriaOpciones: [],
      ubicacionOpciones: [],
      sububicacionOpciones: [],
      empresaOpciones: [],
      citricidadOpciones: [],
      estadoOpciones: [],
      proveedorOpciones: [],
      proveedorMantOpciones: [],
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
          this.formData.tipoActivo = data.title;
          this.formData.tipoActivoIt = data.title;
          this.formData.textDescripcion = data.title;
          this.formData.esITesOTOpciones = data.title;
          this.formData.entorno = data.title;
          this.formData.categoria = data.title;
          this.formData.tarifaMensual = data.title;
          this.formData.ubicacion = data.title;
          this.formData.sububicacion = data.title;
          this.formData.comentarios = data.title;
          this.formData.rack = data.title;
          this.formData.posicion = data.title;
          this.formData.unidad = data.title;
          this.formData.empresa = data.title;
          //checkboxes
          this.formData.gestionadoProveedorOT = data.title;
          this.formData.gestionadoProveedorIT = data.title;
          this.formData.esAzure = data.title;
          this.formData.esSeguridad = data.title;

          this.formData.altaActivo = data.title;
          this.formData.altaGestion = data.title;
          this.formData.mesAltaGestion = data.title;
          this.formData.bajaActivo = data.title;
          this.formData.bajaGestion = data.title;
          this.formData.citricidad = data.title;
          this.formData.anotaciones = data.title;
          this.formData.fechaCompra = data.title;
          this.formData.finGarantia = data.title;
          this.formData.proveedorMant = data.title;

          // Llama a la API para llenar los select
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
              // Nota que ahora usamos 'response' en lugar de 'responce'
              this.tipoActivoOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.tipoActivoItOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.esITesOTOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.entornoOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.categoriaOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.ubicacionOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.sububicacionOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.empresaOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.citricidadOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.estadoOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.proveedorOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.proveedorMantOpciones = response.data.map((user) => ({
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
        tipoActivo: "",
        tipoActivoIt: "",
        textDescripcion: "",
        esITesOTOpciones: "",
        entorno: "",
        categoria: "",
        tarifaMensual: "",
        ubicacion: "",
        sububicacion: "",
        comentarios: "",
        rack: "",
        posicion: "",
        unidad: "",
        empresa: "",
        //checkboxes
        gestionadoProveedorOT: "",
        gestionadoProveedorIT: "",
        esAzure: "",
        esSeguridad: "",
        //Gestion del activo
        altaActivo: "",
        altaGestion: "",
        mesAltaGestion: "",
        bajaActivo: "",
        bajaGestion: "",
        citricidad: "",
        anotaciones: "",
        fechaCompra: "",
        finGarantia: "",
        proveedorMant: "",
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
/* Títulos */
.contenedor_titulo {
  padding: 30px;
  margin-bottom: 1px;
}
.Titulo1 {
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: #1c346c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 50px;
}

.Titulo2 {
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
  padding: 10px 50px 50px 100px;
}
.formulario {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
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

textarea {
  width: 100%;
  resize: vertical;
  height: 80px;
  grid-column: 1 / -1;
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

  gap: 60px;
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
