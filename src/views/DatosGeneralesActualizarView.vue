<template>
  <ComponentTituloPrincipal></ComponentTituloPrincipal>
  <component-subtitulo></component-subtitulo>
  <!--Conedor de navegacion-->
  <div class="navigation-buttons">
    <!--Bottion para volver a la vista principal(lectura)-->
    <component-button @click="volverAVistaLectura"
      >Volver a Vista Lectura</component-button
    >
    <!--Botton para  guardar los combios-->
    <component-button @click="actualizarActivo"></component-button>
  </div>
  <!--Componente container Form que tiene todo el contenedor-->
  <ContainerForm>
    <form class="formulario" @submit.prevent="buscarActivo">
      <!-- Sección de búsqueda -->
      <div class="search-section">
        <!--Este es texto del id del activo-->
        <TextField id="id" label="" v-model="id" placeholder="Activo" />
      </div>

      <!-- Primera sección: Información básica -->
      <div class="form-section">
        <div class="form-row">
          <SelectField
            id="tipoActivo"
            label="Tipo Activo"
            v-model="formData.tipoActivoId"
            :options="tipoActivoOpciones"
            keyField="IdTipo"
            valueField="IdTipo"
            displayField="Tipo"
            class="field-small"
          />
          <SelectField
            id="tipoActivoIT"
            label="Tipo Activo IT"
            v-model="formData.tipoActivoItId"
            :options="tipoActivoItOpciones"
            keyField="IdTipo_it"
            valueField="IdTipo_it"
            displayField="TIPO_it"
            class="field-small"
          />
          <SelectField
            id="esITesOT"
            label="IT/OT"
            v-model="formData.esITesOTId"
            :options="esITesOTOpciones"
            keyField="IdITOT"
            valueField="IdITOT"
            displayField="ITOT"
            class="field-small"
          />
          <TextField
            id="textDescripcion"
            label=" "
            v-model="formData.textDescripcion"
            multiline
            class="field-large"
          />
        </div>

        <div class="form-row">
          <SelectField
            id="entorno"
            label="Entorno"
            v-model="formData.entornoId"
            :options="entornoOpciones"
            keyField="IdEntorno"
            valueField="IdEntorno"
            displayField="Entorno"
            class="field-medium"
          />
          <SelectField
            id="categoria"
            label="Categoria"
            v-model="formData.categoriaId"
            :options="categoriaOpciones"
            keyField="IdCategoria"
            valueField="IdCategoria"
            displayField="Categoria"
            class="field-medium"
          />
          <!--Aqui tiene eue ir la tarifa mensual servicios-->
        </div>

        <div class="form-row">
          <SelectField
            id="ubicacion"
            label="Ubicación"
            v-model="formData.ubicacionId"
            :options="ubicacionOpciones"
            keyField="IdUbicacion"
            valueField="IdUbicacion"
            displayField="Ubicacion"
            class="field-medium"
          />
          <SelectField
            id="sububicacion"
            label="Sububicación"
            v-model="formData.sububicacionId"
            :options="sububicacionOpciones"
            keyField="IdSubUbicacion"
            valueField="IdSubUbicacion"
            displayField="SubUbicacion"
            class="field-medium"
          />

          <TextField
            id="rack"
            label="Rack"
            v-model="formData.rack"
            class="field-small"
          />
          <TextField
            id="posicion"
            label="Posicion"
            v-model="formData.posicion"
            class="field-small"
          />
          <TextField
            id="unidad"
            label="Unidad"
            v-model="formData.unidad"
            class="field-small"
          />
          <SelectField
            id="empresa"
            label="Empresa"
            v-model="formData.empresaId"
            :options="empresaOpciones"
            keyField="idEmpresa"
            valueField="idEmpresa"
            displayField="Empresa"
            class="field-medium"
          />
        </div>

        <TextField
          id="comentarios"
          label="Comentarios"
          v-model="formData.comentarios"
          multiline
          class="field-full"
        />
      </div>

      <!-- Sección de checkboxes -->
      <div class="checkbox-section">
        <CheckboxField
          v-model="formData.gestionadoProveedorOT"
          label="Gestionado por Proveedor OT"
          id="gestionadoProveedorOT"
        />
        <CheckboxField
          v-model="formData.gestionadoProveedorIT"
          label="Gestionado por Proveeedor IT"
          id="gestionadoProveedorIT"
        />
        <CheckboxField
          v-model="formData.esAzure"
          label="Es azure"
          id="Esazure"
        />
        <CheckboxField
          v-model="formData.esSeguridad"
          label="Es de seguridad"
          id="esSeguridad"
        />
      </div>

      <!-- Sección de fechas -->
      <div class="dates-section">
        <div class="form-row">
          <TextField
            id="altaActivo"
            label="Alta Activo"
            type="date"
            v-model="formData.altaActivo"
            class="field-medium"
          />
          <TextField
            id="altaGestion"
            label="Alta Gestión"
            type="date"
            v-model="formData.altaGestion"
            class="field-medium"
          />
          <TextField
            id="mesAltaGestion"
            label="Mes alta Gestión"
            v-model="formData.mesAltaGestion"
            placeholder=" "
            class="field-medium"
          />
          <TextField
            id="bajaActivo"
            label="Baja Activo"
            type="date"
            v-model="formData.bajaActivo"
            class="field-medium"
          />
          <TextField
            id="bajaGestion"
            label="Baja Gestión"
            type="date"
            v-model="formData.bajaGestion"
            class="field-medium"
          />
          <TextField
            id="Mes_Baja_Viewnext"
            label="Mes baja Gestión"
            v-model="formData.Mes_Baja_Viewnext"
            placeholder=" "
            class="field-medium"
          />
        </div>
      </div>

      <!-- Sección de estado -->
      <div class="form-row">
        <SelectField
          id="citricidad"
          label="Citricidad"
          v-model="formData.tipoActivoId"
          :options="citricidadOpciones"
          keyField="IdTCriticidad"
          valueField="IdTCriticidad"
          displayField="T_Criticidad"
          class="field-medium"
        />
        <SelectField
          id="estado"
          label="Estado"
          v-model="formData.estadoId"
          :options="estadoOpciones"
          keyField="IdTEstado"
          valueField="IdTEstado"
          displayField="T_Estado"
          class="field-medium"
        />
      </div>

      <TextField
        id="anotaciones"
        label="Anotaciones"
        v-model="formData.anotaciones"
        multiline
        class="field-full"
      />

      <!-- Sección administrativa -->
      <div class="form-row">
        <SelectField
          id="proveedor"
          label="Proveedor"
          v-model="formData.proveedorId"
          :options="proveedorOpciones"
          keyField="IdProv"
          valueField="IdProv"
          displayField="Proveedor"
          class="field-medium"
        />
        <TextField
          id="fechaCompra"
          label="Fecha de Compra"
          type="date"
          v-model="formData.fechaCompra"
          class="field-medium"
        />
        <TextField
          id="finGarantia"
          label="Fin de Garantia(Fabricante)"
          type="date"
          v-model="formData.finGarantia"
          class="field-medium"
        />
        <SelectField
          id="proveedorMant"
          label="Proveedor Mant"
          v-model="formData.proveedorMant"
          :options="proveedorMant"
          keyField=""
          valueField=""
          displayField=""
          class="field-medium"
        />
        <CheckboxField
          v-model="formData.pertet"
          label="Pertet?"
          id="pertet"
          class="single-checkbox"
        />
      </div>
    </form>
  </ContainerForm>
</template>

<script>
//Importaciones de los componentes
import ComponentTituloPrincipal from "@/components/ComponentTituloPrincipal.vue";
import ComponentSubtitulo from "@/components/ComponentSubtitulo.vue";
import SelectField from "@/components/SelectField.vue";
import TextField from "@/components/TextField.vue";
import CheckboxField from "@/components/CheckboxField.vue";
import ContainerForm from "@/components/ContainerForm.vue";
import ComponentButton from "@/components/ComponentButton.vue";
import axios from "axios";

export default {
  name: "DatosGeneralesActualizarView",
  components: {
    ComponentTituloPrincipal,
    ComponentSubtitulo,
    SelectField,
    TextField,
    CheckboxField,
    ContainerForm,
    ComponentButton,
  },
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
        sububicacionId: null, //id de sububicación
        sububicacion: "",
        comentarios: "",
        rack: "",
        posicion: "",
        unidad: "",
        empresaId: null, //id de empresa
        empresa: "",
        //checkboxes
        gestionadoProveedorOT: false,
        gestionadoProveedorIT: false,
        esAzure: false,
        esSeguridad: false,
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
        pertet: false,
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
    volverAVistaLectura() {
      this.$router.push(`/datos-generales/${this.id}`);
    },
    async cargarOpcionesSelects() {
      try {
        const [
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
        ] = await Promise.all([
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
        ]);

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
      } catch (error) {
        console.error("Error al cargar las opciones:", error);
      }
    },
    async buscarActivo() {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/datos-generales/${this.id}`
        );
        const datos = response.data;
        // Actualizar el formData con los datos recibidos
        this.formData = {
          tipoActivoId: datos.IdTipo,
          tipoActivoItId: datos.IdTipo_it,
          textDescripcion: datos.Descripción,
          esITesOTId: datos.IdITOT,
          entornoId: datos.IdEntorno,
          categoriaId: datos.IdCategoria,
          ubicacionId: datos.IdUbicacion,
          sububicacionId: datos.IdSubUbicacion,
          rack: datos.RACK,
          posicion: datos.POSICION,
          unidad: datos.UNIDAD,
          empresaId: datos.idEmpresa,
          comentarios: datos.Comentarios,
          gestionadoProveedorOT: datos.EsConnectis,
          gestionadoProveedorIT: datos.EsViewnext,
          esAzure: datos.EsAzure,
          esSeguridad: datos.EsSeguridad,
          altaActivo: datos.Alta_SRV,
          altaGestion: datos.Alta_Viewnext,
          mesAltaGestion: datos.Mes_Alta_Viewnext,
          bajaActivo: datos.Baja_SRV,
          bajaGestion: datos.Baja_Viewnext,
          Mes_Baja_Viewnext: datos.Mes_Baja_Viewnext,
          citricidadId: datos.IdTCriticidad,
          estadoId: datos.IdTEstado,
          anotaciones: datos.ANOTACIONES,
          proveedorId: datos.IdProv,
          fechaCompra: datos.Fecha_Compra,
          finGarantia: datos.FFin_Garantia,
          pertet: datos.esPERTE,
        };
      } catch (error) {
        console.error("Error al buscar activo:", error);
        alert("Error al buscar el activo");
      }
    },
    actualizarActivo() {
      /*Aqui tengo que aañdir una validacion de si quiere hacer los cambios o no*/
      /*Una vez a realizado los cambios volver al DatosGenralesView*/
      if (!this.id) {
        alert("No hay un ID de activo válido.");
        return;
      }

      /*Validación de IDs
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
      }*/

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
      //muestra por consola los datos actualizados
      console.log("Datos enviados:", datosActualizados);
      axios
        .put(
          `http://localhost:3001/api/datos-generales/${this.id}`,
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
  },

  async created() {
    this.id = this.$route.params.id;
    if (this.id) {
      await this.cargarOpcionesSelects();
      await this.buscarActivo();
    }
  },
};
</script>

<style scoped>
/*Navegacion de bottones*/
.navigation-buttons {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 1700px;
  margin: 10px auto 10px;
}

/*disposicion del contenedor*/
.form-layout {
  display: flex;
  justify-content: center;
  width: 100%;
}

.form-container {
  width: 100%;
  max-width: 1318px;
  margin: 31px auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 8px 12px 6px rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  padding: 24px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  box-sizing: border-box;
}

.search-section {
  display: flex;
  gap: 16px;
  align-items: center;
}

.button-group {
  display: flex;
  gap: 8px;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px); /* Columnas de tamaño fijo */
  gap: 24px;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
}

/* Para campos que necesitan ocupar más espacio */
.form-row-full {
  grid-column: 1 / -1;
}

/* Ajuste específico para los checkboxes */
.checkbox-group {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 16px;
}

/* Para mantener consistencia en campos de fecha */
.date-field {
  width: 200px;
}

/* Para campos que necesitan ser más anchos */
.wide-field {
  grid-column: span 2;
}

.field-small {
  width: 150px;
  flex: 0 0 150px;
  box-sizing: border-box;
}

.field-medium {
  width: 200px;
  flex: 0 0 200px;
  box-sizing: border-box;
}

.field-large {
  flex: 1;
  min-width: 300px;
  box-sizing: border-box;
}

.field-full {
  width: 100%;
}

.checkbox-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.dates-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-size: 1.2em;
  color: #333;
  margin: 16px 0;
}

.single-checkbox {
  margin-top: 8px;
}

button {
  padding: 8px 16px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #004494;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }

  .field-small,
  .field-medium,
  .field-large {
    width: 100%;
  }

  .checkbox-section {
    grid-template-columns: 1fr;
  }
}

:deep(.select-field),
:deep(.text-field) {
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
}

:deep(.input-container) {
  width: 100%;
  box-sizing: border-box;
}

.edit-button-container {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
}

.edit-button {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>
