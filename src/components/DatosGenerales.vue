<template>
  <div>
    <!--Contenedor del logo con la ruta al home-->
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="Logo" />
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
          <div class="id">
            <input
              v-model="id"
              type="text"
              id="id"
              name="id"
              placeholder="ACTIVO"
            />
          </div>
          <!--ESTE BUTTON ES PARA HACER PRUEBAS DE CARGAR JSON ATRAVES DE UNA API-->
          <button type="submit">Pruebas conexion apii</button>
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
            <label for="tipoActivo">Tipo Activo</label>
            <select
              v-model="formData.tipoActivo"
              id="tipoActivo"
              name="tipoActivo"
            >
              <option
                v-for="opcion in tipoActivoOpciones"
                :key="opcion.id"
                :value="opcion.nombre"
              >
                {{ opcion.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor del tipo Activo IT-->
          <div>
            <label for="tipoActivoIt">Tipo Activo It</label>
            <select
              v-model="formData.tipoActivoIt"
              id="tipoActivoIT"
              name="tipoActivoIT"
            >
              <option
                v-for="opcion in tipoActivoItOpciones"
                :key="opcion.id"
                :value="opcion.nombre"
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
            <label for="esITesOT">ES IT/ ES OT</label>
            <select v-model="formData.esITesOT" id="esITesOT" name="esITesOT">
              <option
                v-for="opcion in esITesOTOpciones"
                :key="opcion.id"
                :value="opcion.nombre"
              >
                {{ opcion.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de Entorno-->
          <div>
            <label for="entorno">Entorno</label>
            <select v-model="formData.entorno" id="entorno" name="entorno">
              <option
                v-for="opcion in entornoOpciones"
                :key="opcion.id"
                :value="opcion.nombre"
              >
                {{ opcion.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de Categoria-->
          <div>
            <label for="categoria">Categoria</label>
            <select
              v-model="formData.categoria"
              id="categoria"
              name="categoria"
            >
              <option
                v-for="opcion in categoriaOpciones"
                :key="opcion.id"
                :value="opcion.nombre"
              >
                {{ opcion.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de Tarifa Mensual Servicio
          <div>
            <label for="tarifaMensual">Tarifa Mensual Servicio</label>
            <input
              v-model="formData.tarifaMensual"
              type="text"
              id="tarifaMensual"
              name="tarifaMensual"
            />
            <span>€/mes</span>
          </div>
          -->

          <!--Contenedor de Ubicacion-->
          <div>
            <label for="ubicacion">Ubicacion</label>
            <select
              v-model="formData.ubicacion"
              id="ubicacion"
              name="ubicacion"
            >
              <option
                v-for="option in ubicacionOpciones"
                :key="option.id"
                :value="option.nombre"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de Sububicacion-->
          <div>
            <label for="sububicacion">Sububicación</label>
            <select
              v-model="formData.sububicacion"
              id="sububicacion"
              name="sububicacion"
            >
              <option
                v-for="option in sububicacionOpciones"
                :key="option.id"
                :value="option.nombre"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de comentarios-->
          <div class="full-width">
            <label for="comentarios">Comentarios</label>
            <textarea
              v-model="formData.comentarios"
              id="comentarios"
              name="comentarios"
            ></textarea>
          </div>
          <!--Contenedor de Rack-->
          <div>
            <label for="rack">Rack</label>
            <input v-model="formData.rack" type="text" id="rack" name="rack" />
          </div>
          <!--Contenedor de Posicion-->
          <div>
            <label for="posicion">Posicion</label>
            <input
              v-model="formData.posicion"
              type="text"
              id="posicion"
              name="posicion"
            />
          </div>
          <!--Contenedor de Unidad-->
          <div>
            <label for="unidad">Unidad</label>
            <input
              v-model="formData.unidad"
              type="text"
              id="unidad"
              name="unidad"
            />
          </div>
          <!--Contenedor de Empres-->
          <div>
            <label for="empresa">Empresa</label>
            <select v-model="formData.empresa" id="empresa" name="empresa">
              <option
                v-for="option in empresaOpciones"
                :key="option.id"
                :value="option.nombre"
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
          <!--FECHAS ACTIVO -->
          <!--Contenedor del altaActivo-->
          <div>
            <label for="altaActivo">Alta Activo</label>
            <input
              v-model="formData.altaActivo"
              type="date"
              id="altaActivo"
              name="altaActivo"
            />
          </div>
          <!--Contenedor del altaGestion-->
          <div>
            <label for="altaGestion">Alta Gestión</label>
            <input
              v-model="formData.altaGestion"
              type="date"
              id="altaGestion"
              name="altaGestion"
            />
          </div>
          <!--Contenedor del mesAltaGestion-->
          <div>
            <label for="mesAltaGestion">Mes alta Gestión</label>
            <input
              v-model="formData.mesAltaGestion"
              type="text"
              id="mesAltaGestion"
              name="mesAltaGestion"
            />
          </div>
          <!--Contenedor del bajaActivo-->
          <div>
            <label for="bajaActivo">Baja Activo</label>
            <input
              v-model="formData.bajaActivo"
              type="date"
              id="bajaActivo"
              name="bajaActivo"
            />
          </div>
          <!--Contenedor del bajaGestion-->
          <div>
            <label for="bajaGestion">Baja Gestión</label>
            <input
              v-model="formData.bajaGestion"
              type="date"
              id="bajaGestion"
              name="bajaGestion"
            />
          </div>
          <!--Contenedor del bajaGestion-->
          <div>
            <label for="Mes_Baja_Viewnext">Mes baja Gestion</label>
            <input
              v-model="formData.Mes_Baja_Viewnext"
              type="text"
              id="Mes_Baja_Viewnext"
              name="Mes_Baja_Viewnext"
            />
          </div>
          <!--Contenedor del citricidad-->
          <div>
            <label for="citricidad">Citricidad</label>
            <select
              v-model="formData.citricidad"
              id="citricidad"
              name="citricidad"
            >
              <option
                v-for="option in citricidadOpciones"
                :key="option.id"
                :value="option.nombre"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor del estado-->
          <div>
            <label for="estado">Estado</label>
            <select v-model="formData.estado" id="estado" name="estado">
              <option
                v-for="option in estadoOpciones"
                :key="option.id"
                :value="option.nombre"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de anotaciones-->
          <div class="full-width">
            <label for="anotaciones">Anotaciones</label>
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
            <label for="proveedor">Proveedor</label>
            <select
              v-model="formData.proveedor"
              id="proveedor"
              name="proveedor"
            >
              <option
                v-for="option in proveedorOpciones"
                :key="option.id"
                :value="option.nombre"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor del fechaCompra-->
          <div>
            <label for="fechaCompra">Fecha de Compra</label>
            <input
              v-model="formData.fechaCompra"
              type="date"
              id="fechaCompra"
              name="fechaCompra"
            />
          </div>
          <!--Contenedor del finGarantia-->
          <div>
            <label for="finGarantia">Fin de Garantia (Fabricante)</label>
            <input
              v-model="formData.finGarantia"
              type="date"
              id="finGarantia"
              name="finGarantia"
            />
          </div>
          <!--Contenedor del proveedorMant-->
          <div>
            <label for="proveedorMant">Prov. Mant. Hardware</label>
            <select
              v-model="formData.proveedorMant"
              id="proveedorMant"
              name="proveedorMant"
            >
              <option
                v-for="option in proveedorMantOpciones"
                :key="option.id"
                :value="option.nombre"
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
      id: "",
      formData: {
        tipoActivo: "",
        tipoActivoIt: "",
        textDescripcion: "",
        esITesOT: "",
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
        Mes_Baja_Viewnext: "",
        citricidad: "",
        estado: "",
        anotaciones: "",
        proveedor: "",
        fechaCompra: "",
        finGarantia: "",
        proveedorMant: "",
        pertet: "",
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
      if (!this.id) {
        alert("Por favor, introduce un ID válido.");
        return;
      }
      // Llama a la API para obtener los datos de la api de datos generales
      axios
        .get(`http://localhost:3001/api/datos-generales/${this.id}`)
        .then((response) => {
          //Accede al primer elemento del array
          const data = response.data[0];
          //Muestra por consola la respuesta del backend
          console.log("JSON recibido:", response.data);
          // Convertir fechas al formato YYYY-MM-DD
          const convertirFecha = (fecha) => {
            if (!fecha) return ""; // Si la fecha es nula, devolver un string vacío
            return fecha.split("T")[0]; // Tomar solo la parte de la fecha
          };
          // Datos obtenidos
          this.formData.tipoActivo = data.Tipo || "No especificado";
          this.formData.tipoActivoIt = data.TIPO_it || "No especificado";
          this.formData.textDescripcion = data.Descripción || "No especificado";
          this.formData.esITesOT = data.ITOT || "No especificado";
          this.formData.entorno = data.Entorno || "No especificado";
          this.formData.categoria = data.Categoria || "No especificado";
          this.formData.ubicacion = data.Ubicacion || "No especificado";
          this.formData.sububicacion = data.SubUbicacion || "No especificado";
          this.formData.comentarios = data.Comentarios || "No especificado";
          this.formData.rack = data.RACK || "No especificado";
          this.formData.posicion = data.POSICION || "No especificado";
          this.formData.unidad = data.UNIDAD || "No especificado";
          this.formData.empresa = data.Empresa || "No especificado";
          //checkboxes
          this.formData.gestionadoProveedorOT = Boolean(data.EsConnectis);
          this.formData.gestionadoProveedorIT = Boolean(data.EsViewnext);
          this.formData.esAzure = Boolean(data.EsAzure);
          this.formData.esSeguridad = Boolean(data.EsSeguridad); //
          //fechas
          this.formData.altaActivo =
            convertirFecha(data.Alta_SRV) || "No especificado";
          this.formData.altaGestion =
            convertirFecha(data.Alta_Viewnext) || "No especificado";
          this.formData.mesAltaGestion =
            data.Mes_Alta_Viewnext || "No especificado";
          this.formData.bajaActivo =
            convertirFecha(data.Baja_SRV) || "No especificado";
          this.formData.bajaGestion =
            convertirFecha(data.Baja_Viewnext) || "No especificado";
          this.formData.Mes_Baja_Viewnext =
            data.Mes_Baja_Viewnext || "No especificado";
          this.formData.citricidad = data.T_Criticidad || "No especificado";
          this.formData.estado = data.T_Estado || "No especificado";
          this.formData.anotaciones = data.ANOTACIONES || "No especificado";
          this.formData.proveedor = data.Proveedor || "No especificado";
          this.formData.fechaCompra =
            convertirFecha(data.Fecha_Compra) || "No especificado";
          this.formData.finGarantia =
            convertirFecha(data.FFin_Garantia) || "No especificado";
          this.formData.proveedorMant = data.Proveedor || "No especificado";
          this.formData.pertet = Boolean(data.esPERTE) || "No especificado";
        })
        .catch((error) => {
          console.error("Error al obtener la información:", error);
          alert("No se encontró información para este ID.");
          this.limpiarCampos();
        });
    },
    cargarOpcionesSelects() {
      // Llama a la API para llenar los selects
      Promise.all([
        axios.get("http://localhost:3001/api/selects-general/tipo-activo"),
        axios.get("http://localhost:3001/api/selects-general/tipo-activo-it"),
        axios.get("http://localhost:3001/api/selects-general/itot"),
        axios.get("http://localhost:3001/api/selects-general/entorno"),
        axios.get("http://localhost:3001/api/selects-general/categoria"),
        axios.get("http://localhost:3001/api/selects-general/ubicacion"),
        axios.get("http://localhost:3001/api/selects-general/sububicacion"),
        axios.get("http://localhost:3001/api/selects-general/empresa"),
        axios.get("http://localhost:3001/api/selects-general/criticidad"),
        axios.get("http://localhost:3001/api/selects-general/estado"),
        axios.get("http://localhost:3001/api/selects-general/proveedor"),
      ])
        .then(
          ([
            tipoActivoRes,
            tipoActivoItRes,
            itotRes,
            entornoRes,
            categoriaRes,
            ubicacionRes,
            sububicacionRes,
            empresaRes,
            criticidadRes,
            estadoRes,
            proveedorRes,
          ]) => {
            this.tipoActivoOpciones = tipoActivoRes.data;
            this.tipoActivoItOpciones = tipoActivoItRes.data;
            this.esITesOTOpciones = itotRes.data;
            this.entornoOpciones = entornoRes.data;
            this.categoriaOpciones = categoriaRes.data;
            this.ubicacionOpciones = ubicacionRes.data;
            this.sububicacionOpciones = sububicacionRes.data;
            this.empresaOpciones = empresaRes.data;
            this.citricidadOpciones = criticidadRes.data;
            this.estadoOpciones = estadoRes.data;
            this.proveedorOpciones = proveedorRes.data;
          }
        )
        .catch((error) => {
          console.error("Error al obtener las opciones:", error);
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
  mounted() {
    this.cargarOpcionesSelects(); // Cargar las opciones al montar el componente
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
  color: #ffffff;
  background-color: #1c346c;
  border-radius: 20px;
  padding: 10px 20px;
  display: inline-block;
  margin-top: 50px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.Titulo2 {
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
