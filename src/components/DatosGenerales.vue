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
          <button @click="actualizarActivo">Actualizar Activo</button>
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
              v-model="formData.tipoActivoId"
              id="tipoActivo"
              name="tipoActivo"
            >
              <option
                v-for="opcion in tipoActivoOpciones"
                :key="opcion.IdTipo"
                :value="opcion.IdTipo"
              >
                {{ opcion.Tipo }}
              </option>
            </select>
          </div>
          <!--Contenedor del tipo Activo IT-->
          <div>
            <label for="tipoActivoIt">Tipo Activo It</label>
            <select
              v-model="formData.tipoActivoItId"
              id="tipoActivoIT"
              name="tipoActivoIT"
            >
              <option
                v-for="opcion in tipoActivoItOpciones"
                :key="opcion.IdTipo_it"
                :value="opcion.IdTipo_it"
              >
                {{ opcion.TIPO_it }}
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
            <select v-model="formData.esITesOTId" id="esITesOT" name="esITesOT">
              <option
                v-for="opcion in esITesOTOpciones"
                :key="opcion.IdITOT"
                :value="opcion.IdITOT"
              >
                {{ opcion.ITOT }}
              </option>
            </select>
          </div>
          <!--Contenedor de Entorno-->
          <div>
            <label for="entorno">Entorno</label>
            <select v-model="formData.entornoId" id="entorno" name="entorno">
              <option
                v-for="opcion in entornoOpciones"
                :key="opcion.IdEntorno"
                :value="opcion.IdEntorno"
              >
                {{ opcion.Entorno }}
              </option>
            </select>
          </div>
          <!--Contenedor de Categoria-->
          <div>
            <label for="categoria">Categoria</label>
            <select
              v-model="formData.categoriaId"
              id="categoria"
              name="categoria"
            >
              <option
                v-for="opcion in categoriaOpciones"
                :key="opcion.IdCategoria"
                :value="opcion.IdCategoria"
              >
                {{ opcion.Categoria }}
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
              v-model="formData.ubicacionId"
              id="ubicacion"
              name="ubicacion"
            >
              <option
                v-for="option in ubicacionOpciones"
                :key="option.IdUbicacion"
                :value="option.IdUbicacion"
              >
                {{ option.Ubicacion }}
              </option>
            </select>
          </div>
          <!--Contenedor de Sububicacion-->
          <div>
            <label for="sububicacion">Sububicación</label>
            <select
              v-model="formData.sububicacionId"
              id="sububicacion"
              name="sububicacion"
            >
              <option
                v-for="option in sububicacionOpciones"
                :key="option.IdSubUbicacion"
                :value="option.IdSubUbicacion"
              >
                {{ option.SubUbicacion }}
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
            <select v-model="formData.empresaId" id="empresa" name="empresa">
              <option
                v-for="option in empresaOpciones"
                :key="option.idEmpresa"
                :value="option.idEmpresa"
              >
                {{ option.Empresa }}
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
              v-model="formData.citricidadId"
              id="citricidad"
              name="citricidad"
            >
              <option
                v-for="option in citricidadOpciones"
                :key="option.IdTCriticidad"
                :value="option.IdTCriticidad"
              >
                {{ option.T_Criticidad }}
              </option>
            </select>
          </div>
          <!--Contenedor del estado-->
          <div>
            <label for="estado">Estado</label>
            <select v-model="formData.estadoId" id="estado" name="estado">
              <option
                v-for="option in estadoOpciones"
                :key="option.IdTEstado"
                :value="option.IdTEstado"
              >
                {{ option.T_Estado }}
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
              v-model="formData.proveedorId"
              id="proveedor"
              name="proveedor"
            >
              <option
                v-for="option in proveedorOpciones"
                :key="option.IdProv"
                :value="option.IdProv"
              >
                {{ option.Proveedor }}
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
          <!--Contenedor del proveedorMant
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
          
          
          -->

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
//import de la libreria de axios
import axios from "axios";

export default {
  name: "ActivoGeneral",
  data() {
    return {
      id: "",
      formData: {
        tipoActivoId: null, //id de activo
        tipoActivo: "",
        tipoActivoItId: null, //id de activo_it
        tipoActivoIt: "",
        textDescripcion: "",
        esITesOTId: null, //id de it o ot
        esITesOT: "",
        entornoId: null, //id de entorno
        entorno: "",
        categoriaId: null, //id de categoria
        categoria: "",
        tarifaMensual: "",
        ubicacionId: null, //id de ubicacion
        ubicacion: "",
        sububicacionId: null, //id de sububicacion
        sububicacion: "",
        comentarios: "",
        rack: "",
        posicion: "",
        unidad: "",
        empresaId: null, //id de empresa
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
        citricidadId: null, //id de citricidad
        citricidad: "",
        estadoId: null,
        estado: "",
        anotaciones: "",
        proveedorId: null, //id proveedor
        proveedor: "",
        fechaCompra: "",
        finGarantia: "",
        proveedorMantId: null, //id prov mant
        //proveedorMant: "",
        pertet: "",
      },
      //option de los selects
      tipoActivoOpciones: [], //array de tipoActivo
      tipoActivoItOpciones: [], // array de TIPO_it
      esITesOTOpciones: [], // array de ITOT
      entornoOpciones: [], //array de Entorno
      categoriaOpciones: [], // array de Categoria
      ubicacionOpciones: [], // array de Ubicacion
      sububicacionOpciones: [], // array de sububicacion
      empresaOpciones: [], // array de empresa
      citricidadOpciones: [], // array de citricidad
      estadoOpciones: [], // array de estado
      proveedorOpciones: [], // array de proveedor
      //proveedorMantOpciones: [], // array de ..
    };
  },

  methods: {
    //--- Método para buscar un activo (GET) ---

    buscarActivo() {
      if (!this.id) {
        alert("Por favor, introduce un ID válido.");
        return;
      }
      axios
        //Peticion a la api con el endpoint
        .get(`http://localhost:3001/api/datos-generales/${this.id}`)
        .then((response) => {
          //La respuesta viene en forma de array.
          const data = response.data[0];
          console.log("JSON recibido:", response.data);

          //funcion fecha que transforma la fecha al formato dd/mm/yy
          const convertirFecha = (fecha) => {
            if (!fecha) return "";
            return fecha.split("T")[0];
          };

          // Asignar los datos al formulario(variable vue.js) con la pripiedad que coincide con json.
          this.formData.tipoActivoId = data.IdTipo; //id
          this.formData.tipoActivo = data.Tipo || "";
          this.formData.tipoActivoItId = data.IdTipo_it; //id
          this.formData.tipoActivoIt = data.TIPO_it || "";
          this.formData.textDescripcion = data.Descripción || "";
          this.formData.esITesOTId = data.IdITOT; //id
          this.formData.esITesOT = data.ITOT || "";
          this.formData.entornoId = data.IdEntorno; //id
          this.formData.entorno = data.Entorno || "";
          this.formData.categoriaId = data.IdCategoria; //id
          this.formData.categoria = data.Categoria || "";
          this.formData.ubicacionId = data.IdUbicacion; //id
          this.formData.ubicacion = data.Ubicacion || "";
          this.formData.sububicacionId = data.IdSubUbicacion; //id
          this.formData.sububicacion = data.SubUbicacion || "";
          this.formData.comentarios = data.Comentarios || "";
          this.formData.rack = data.RACK || "";
          this.formData.posicion = data.POSICION || "";
          this.formData.unidad = data.UNIDAD || "";
          this.formData.empresaId = data.idEmpresa; //id de la empresa
          this.formData.empresa = data.Empresa || "";
          this.formData.gestionadoProveedorOT = Boolean(data.EsConnectis);
          this.formData.gestionadoProveedorIT = Boolean(data.EsViewnext);
          this.formData.esAzure = Boolean(data.EsAzure);
          this.formData.esSeguridad = Boolean(data.EsSeguridad);
          this.formData.altaActivo = convertirFecha(data.Alta_SRV) || "";
          this.formData.altaGestion = convertirFecha(data.Alta_Viewnext) || "";
          this.formData.mesAltaGestion = data.Mes_Alta_Viewnext || "";
          this.formData.bajaActivo = convertirFecha(data.Baja_SRV) || "";
          this.formData.bajaGestion = convertirFecha(data.Baja_Viewnext) || "";
          this.formData.Mes_Baja_Viewnext = data.Mes_Baja_Viewnext || "";
          this.formData.citricidadId = data.IdTCriticidad; //id
          this.formData.citricidad = data.T_Criticidad || "";
          this.formData.estadoId = data.IdTEstado; //id
          this.formData.estado = data.T_Estado || "";
          this.formData.anotaciones = data.ANOTACIONES || "";
          this.formData.proveedorId = data.IdProv; //id
          this.formData.proveedor = data.Proveedor || "";
          this.formData.fechaCompra = convertirFecha(data.Fecha_Compra) || "";
          this.formData.finGarantia = convertirFecha(data.FFin_Garantia) || "";
          //aqui iria el proveedor.
          this.formData.pertet = Boolean(data.esPERTE);
        })
        .catch((error) => {
          console.error("Error al obtener la información:", error);
          alert("No se encontró información para este ID.");
          this.limpiarCampos();
        });
    },

    actualizarActivo() {
      console.log("Valores del formulario:", this.formData);
      if (!this.id) {
        alert("Por favor, introduce un ID válido.");
        return;
      }
      // Validación de IDs
      const camposRequeridos = {
        tipoActivoId: "Tipo Activo",
        tipoActivoItId: "Tipo Activo IT",
        esITesOTId: "IT/OT",
        entornoId: "Entorno",
        categoriaId: "Categoría",
        ubicacionId: "Ubicación",
        sububicacionId: "Sububicación",
        //empresaId: "Empresa",
        citricidadId: "Criticidad",
        estadoId: "Estado",
        proveedorId: "Proveedor",
      };

      const camposFaltantes = Object.entries(camposRequeridos)
        .filter(([key]) => !this.formData[key])
        .map(([, label]) => label);

      if (camposFaltantes.length > 0) {
        alert(
          `Los siguientes campos son requeridos: ${camposFaltantes.join(", ")}`
        );
        return;
      }
      //Se asigna json al vue.js
      const datosActualizados = {
        IdTipo: this.formData.tipoActivoId, //
        IdTipo_it: this.formData.tipoActivoItId, //
        Descripción: this.formData.textDescripcion,
        IdITOT: this.formData.esITesOTId, //id
        IdEntorno: this.formData.entornoId, //id
        IdCategoria: this.formData.categoriaId, //id
        IdUbicacion: this.formData.ubicacionId, //id
        IdSubUbicacion: this.formData.sububicacionId, //id
        RACK: this.formData.rack ? Number(this.formData.rack) : null,
        POSICION: this.formData.posicion
          ? Number(this.formData.posicion)
          : null,
        UNIDAD: this.formData.unidad ? Number(this.formData.unidad) : null,
        idEmpresa: this.formData.empresaId,
        Comentarios: this.formData.comentarios,
        EsConnectis: this.formData.gestionadoProveedorOT
          ? Boolean(this.formData.gestionadoProveedorOT)
          : null,
        EsViewnext: this.formData.gestionadoProveedorIT
          ? Boolean(this.formData.gestionadoProveedorIT)
          : null,
        EsAzure: this.formData.esAzure ? Boolean(this.formData.esAzure) : null,
        EsSeguridad: this.formData.esSeguridad
          ? Boolean(this.formData.esSeguridad)
          : null,
        Alta_SRV: this.formData.altaActivo,
        Alta_Viewnext: this.formData.altaGestion,
        Mes_Alta_Viewnext: this.formData.mesAltaGestion,
        Baja_SRV: this.formData.bajaActivo,
        Baja_Viewnext: this.formData.bajaGestion,
        Mes_Baja_Viewnext: this.formData.Mes_Baja_Viewnext,
        IdTCriticidad: this.formData.citricidadId,
        IdTEstado: this.formData.estadoId, //id
        ANOTACIONES: this.formData.anotaciones,
        IdProv: this.formData.proveedorId, //id
        Fecha_Compra: this.formData.fechaCompra,
        FFin_Garantia: this.formData.finGarantia,
        esPERTE: this.formData.pertet ? Boolean(this.formData.pertet) : null,
      };

      console.log("Datos enviados:", datosActualizados);
      axios
        .put(
          `http://localhost:3001/api/datos-generales/activos/${this.id}`,
          datosActualizados,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        //La respuesta del servidor
        .then((response) => {
          console.log("Respuesta del servidor:", response.data);
          if (response.data.success) {
            alert("Datos actualizados correctamente");
          } else {
            alert("La actualización no se completó correctamente");
          }
        })
        .catch((error) => {
          console.error("Error detallado:", error);
          alert(
            `Error al actualizar: ${
              error.response?.data?.message || error.message
            }`
          );
        });
    },

    //FUNCION CARGA LOS SELECTS
    cargarOpcionesSelects() {
      //nos permite manejar de manera concurrente las solicitudes
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
        //Maneja las respuestas de las solicitudese en le mismo oreden
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

    //FUNCION PARA LIMPIAR LOS CAMPOS
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
        gestionadoProveedorOT: "",
        gestionadoProveedorIT: "",
        esAzure: "",
        esSeguridad: "",
        altaActivo: "",
        altaGestion: "",
        mesAltaGestion: "",
        bajaActivo: "",
        bajaGestion: "",
        citricidad: "",
        anotaciones: "",
        fechaCompra: "",
        finGarantia: "",
        //proveedorMant: "",
      };
    },
  },
  /*
   *se ejecuta después de que el componente ha sido montado en el DOM.
   *Es decir, una vez que Vue ha renderizado el componente en la página y los elementos están disponibles en el DOM.
   */
  mounted() {
    //funcion para vargar los select una vez obtenga los datos del backend.
    this.cargarOpcionesSelects();
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
