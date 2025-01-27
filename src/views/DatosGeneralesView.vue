<template>
  <!--contenedor global de la pagina web-->
  <div class="contendor_global">
    <!--Titulo y subtitulo importados-->
    <component-titulo-principal></component-titulo-principal>
    <component-subtitulo></component-subtitulo>
    <!--Contenedor principal-->
    <div class="contenedor_principal">
      <!--Contenedor del formulario-->
      <div class="contenedor_formulario">
        <form class="formulario" @submit.prevent="buscarActivo">
          <TextField id="id" label="" v-model="id" placeholder="Activo" />
          <!--ESTE BUTTON ES PARA HACER PRUEBAS DE CARGAR JSON ATRAVES DE UNA API-->
          <button type="submit">Pruebas conexion apii</button>
          <button @click="actualizarActivo">Actualizar Activo</button>

          <!--Contenedor del tipo Activo-->
          <SelectField
            id="tipoActivo"
            label="Tipo Activo"
            v-model="formData.tipoActivoId"
            :options="tipoActivoOpciones"
            keyField="IdTipo"
            valueField="IdTipo"
            displayField="Tipo"
          />
          <!--Contenedor del tipo Activo IT-->
          <SelectField
            id="tipoActivoIT"
            label="Tipo Activo IT"
            v-model="formData.tipoActivoItId"
            :options="tipoActivoItOpciones"
            keyField="IdTipo_it"
            valueField="IdTipo_it"
            displayField="TIPO_it"
          />
          <!--Contenedor del textarea con la clase largo completo-->
          <TextField
            id="textDescripcion"
            label=" "
            v-model="formData.textDescripcion"
            multiline
            fullWidth
          />
          <!--Contenedor de es IT/OT-->
          <SelectField
            id="esITesOT"
            label="IT/OT"
            v-model="formData.esITesOTId"
            :options="esITesOTOpciones"
            keyField="IdTOT"
            valueField="IdTOT"
            displayField="ITOT"
          />
          <!--Contenedor de Entorno-->
          <SelectField
            id="entorno"
            label="Entorno"
            v-model="formData.entornoId"
            :options="entornoOpciones"
            keyField="IdEntorno"
            valueField="IdEntorno"
            displayField="Entorno"
          />
          <!--Contenedor de Categoria-->
          <SelectField
            id="categoria"
            label="Categoria"
            v-model="formData.categoriaId"
            :options="categoriaOpciones"
            keyField="IdCategoria"
            valueField="IdCategoria"
            displayField="Categoria"
          />
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
          <SelectField
            id="ubicacion"
            label="Ubicación"
            v-model="formData.ubicacionId"
            :options="ubicacionOpciones"
            keyField="IdUbicacion"
            valueField="IdUbicacion"
            displayField="Ubicacion"
          />
          <!--Contenedor de Sububicacion-->
          <SelectField
            id="sububicacion"
            label="Sububicación"
            v-model="formData.sububicacionId"
            :options="sububicacionOpciones"
            keyField="IdSubUbicacion"
            valueField="IdSubUbicacion"
            displayField="SubUbicacion"
          />

          <!--Contenedor de comentarios-->
          <TextField
            id="comentarios"
            label="Comentarios"
            v-model="formData.comentarios"
            multiline
            fullWidth
          />
          <!--Contenedor de Rack-->
          <TextField id="rack" label="Rack" v-model="formData.rack" />
          <!--Contenedor de Posicion-->
          <TextField
            id="posicion"
            label="Posicion"
            v-model="formData.posicion"
          />
          <!--Contenedor de Unidad-->
          <TextField id="unidad" label="Unidad" v-model="formData.unidad" />
          <!--Contenedor de Empres-->
          <SelectField
            id="empresa"
            label="Empresa"
            v-model="formData.empresaId"
            :options="empresaOpciones"
            keyField="idEmpresa"
            valueField="idEmpresa"
            displayField="Empresa"
          />
          <!--Contenedor de los checkboxes-->
          <div class="checkbox-container">
            <!--Contenedor del primer checkbox-item con gestionadoProveedorOT-->
            <CheckboxField
              v-model="formData.gestionadoProveedorOT"
              label="Gestionado por Proveedor OT"
              id="gestionadoProveedorOT"
            />
            <!--Contenedor del segundo checkbox-item con gestionadoProveedorIT-->
            <CheckboxField
              v-model="formData.gestionadoProveedorIT"
              label="Gestionado por Proveeedor IT"
              id="gestionadoProveedorIT"
            />
            <!--Contenedor del tercer checkbox-item con esAzure-->
            <CheckboxField
              v-model="formData.esAzure"
              label="Es azure"
              id="Esazure"
            />
            <!--Contenedor del tercer checkbox-item con esSeguridad-->
            <CheckboxField
              v-model="formData.esSeguridad"
              label="Es de seguridad"
              id="esSeguridad"
            />
          </div>

          <!--FECHAS ACTIVO -->

          <!--Contenedor del altaActivo-->
          <TextField
            id="altaActivo"
            label="Alta Activo"
            type="date"
            v-model="formData.altaActivo"
          />
          <!--Contenedor del altaGestion-->
          <TextField
            id="altaGestion"
            label="Alta Gestión"
            type="date"
            v-model="formData.altaGestion"
          />
          <!--Contenedor del mesAltaGestion-->
          <TextField
            id="mesAltaGestion"
            label="Mes alta Gestión"
            v-model="formData.mesAltaGestion"
            placeholder=" "
          />
          <!--Contenedor del bajaActivo-->
          <TextField
            id="bajaActivo"
            label="Baja Activo"
            type="date"
            v-model="formData.bajaActivo"
          />
          <!--Contenedor del bajaGestion-->
          <TextField
            id="bajaGestion"
            label="Baja Gestión"
            type="date"
            v-model="formData.bajaGestion"
          />
          <!--Contenedor del bajaGestion-->

          <TextField
            id="Mes_Baja_Viewnext"
            label="Mes baja Gestión"
            v-model="formData.Mes_Baja_Viewnext"
            placeholder=" "
          />
          <!--Contenedor del citricidad-->
          <SelectField
            id="citricidad"
            label="Citricidad"
            v-model="formData.tipoActivoId"
            :options="citricidadOpciones"
            keyField="IdTCriticidad"
            valueField="IdTCriticidad"
            displayField="T_Criticidad"
          />
          <!--Contenedor del estado-->
          <SelectField
            id="estado"
            label="Estado"
            v-model="formData.estadoId"
            :options="estadoOpciones"
            keyField="IdTEstado"
            valueField="IdTEstado"
            displayField="T_Estado"
          />
          <!--Contenedor de anotaciones-->
          <TextField
            id="anotaciones"
            label="Anotaciones"
            v-model="formData.anotaciones"
            multiline
            fullWidth
          />

          <!--Contenedor del segundo titulo con la clase largo completo-->
          <div class="full-width">
            <h2 class="Titulo2">Datos Administrativos</h2>
          </div>

          <!--Contenedor del proveedor-->
          <SelectField
            id="proveedor"
            label="Proveedor"
            v-model="formData.proveedorId"
            :options="proveedorOpciones"
            keyField="IdProv"
            valueField="IdProv"
            displayField="Proveedor"
          />
          <!--Contenedor del fechaCompra-->
          <TextField
            id="fechaCompra"
            label="Fecha de Compra"
            type="date"
            v-model="formData.fechaCompra"
          />
          <!--Contenedor del finGarantia-->
          <TextField
            id="finGarantia"
            label="Fin de Garantia(Fabricante)"
            type="date"
            v-model="formData.finGarantia"
          />
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
          <CheckboxField
            v-model="formData.pertet"
            label="Pertet?"
            id="pertet"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentTituloPrincipal from "@/components/ComponentTituloPrincipal.vue";
import ComponentSubtitulo from "@/components/ComponentSubtitulo.vue";
import SelectField from "@/components/SelectField.vue";
import TextField from "@/components/TextField.vue";
import CheckboxField from "@/components/CheckboxField.vue";
//import de la libreria de axios
import axios from "axios";

export default {
  components: {
    ComponentTituloPrincipal,
    ComponentSubtitulo,
    SelectField,
    TextField,
    CheckboxField,
  },
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
          alert("Datos actualizados"); // Mensaje simple sin validación
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

  mounted() {
    this.cargarOpcionesSelects();
  },
};
</script>

<style scoped></style>
