<template>
  <div>
    <!--Contenedor del logo con la ruta al home-->
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="Logo de aguas de barcelona" />
      </router-link>
    </div>
    <!--Contenedor del titulo datos generales-->
    <div class="contenedor_titulo">
      <h1 class="Titulo1 animate__animated animate__fadeInDown animate_faster">
        Datos Generales
      </h1>
    </div>
    <!--Contenedor del formulario-->
    <div class="contenedor_formulario">
      <form class="formulario" @submit.prevent="guardarDatos">
        <div class="identificador">
          <input
            v-model="identificador"
            type="text"
            id="identificador"
            name="identificador"
            placeholder="ACTIVO"
          />
        </div>
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
          <select v-model="tipoActivo" id="tipoActivo" name="tipoActivo">
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
          <select v-model="tipoActivoIt" id="tipoActivoIT" name="tipoActivoIT">
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
            v-model="textDescripcion"
            id="textDescripcion"
            name="textDescripcion"
            placeholder="Descripción"
          ></textarea>
        </div>
        <!--Contenedor de es IT/OT-->
        <div>
          <label for="esITesOT">ES IT/ ES OT:</label>
          <select v-model="esITesOT" id="esITesOT" name="esITesOT">
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
          <select v-model="entorno" id="entorno" name="entorno">
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
          <select v-model="categoria" id="categoria" name="categoria">
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
            v-model="tarifaMensual"
            type="text"
            id="tarifaMensual"
            name="tarifaMensual"
          />
          <span>€/mes</span>
        </div>
        <!--Contenedor de Ubicacion-->
        <div>
          <label for="ubicacion">Ubicacion:</label>
          <select v-model="ubicacion" id="ubicacion" name="ubicacion">
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
          <select v-model="sububicacion" id="sububicacion" name="sububicacion">
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
            v-model="comentarios"
            id="comentarios"
            name="comentarios"
          ></textarea>
        </div>
        <!--Contenedor de Rack-->
        <div>
          <label for="rack">Rack:</label>
          <input v-model="rack" type="text" id="rack" name="rack" />
        </div>
        <!--Contenedor de Posicion-->
        <div>
          <label for="posicion">Posicion:</label>
          <input v-model="posicion" type="text" id="posicion" name="posicion" />
        </div>
        <!--Contenedor de Unidad-->
        <div>
          <label for="unidad">Unidad:</label>
          <input v-model="unidad" type="text" id="unidad" name="unidad" />
        </div>
        <!--Contenedor de Empres-->
        <div>
          <label for="empresa">Empresa:</label>
          <select v-model="empresa" id="empresa" name="empresa">
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
              v-model="gestionadoProveedorOT"
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
              v-model="gestionadoProveedorIT"
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
              v-model="esAzure"
              type="checkbox"
              id="Esazure"
              name="Esazure"
            />
            <label for="Esazure">Es Azure</label>
          </div>
          <!--Contenedor del tercer checkbox-item con esSeguridad-->
          <div class="checkbox-item">
            <input
              v-model="esSeguridad"
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
            v-model="altaActivo"
            type="date"
            id="altaActivo"
            name="altaActivo"
          />
        </div>
        <!--Contenedor del altaGestion-->
        <div>
          <label for="altaGestion">Alta Gestión:</label>
          <input
            v-model="altaGestion"
            type="date"
            id="altaGestion"
            name="altaGestion"
          />
        </div>
        <!--Contenedor del mesAltaGestion-->
        <div>
          <label for="mesAltaGestion">Mes alta Gestión:</label>
          <input
            v-model="mesAltaGestion"
            type="text"
            id="mesAltaGestion"
            name="mesAltaGestion"
          />
        </div>
        <!--Contenedor del bajaActivo-->
        <div>
          <label for="bajaActivo">Baja Activo:</label>
          <input
            v-model="bajaActivo"
            type="date"
            id="bajaActivo"
            name="bajaActivo"
          />
        </div>
        <!--Contenedor del bajaGestion-->
        <div>
          <label for="bajaGestion">Baja Gestión:</label>
          <input
            v-model="bajaGestion"
            type="date"
            id="bajaGestion"
            name="bajaGestion"
          />
        </div>
        <!--Contenedor del citricidad-->
        <div>
          <label for="citricidad">Citricidad:</label>
          <select v-model="citricidad" id="citricidad" name="citricidad">
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
          <select v-model="estado" id="estado" name="estado">
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
            v-model="anotaciones"
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
          <select v-model="proveedor" id="proveedor" name="proveedor">
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
            v-model="fechaCompra"
            type="date"
            id="fechaCompra"
            name="fechaCompra"
          />
        </div>
        <!--Contenedor del finGarantia-->
        <div>
          <label for="finGarantia">Fin de Garantia (Fabricante):</label>
          <input
            v-model="finGarantia"
            type="date"
            id="finGarantia"
            name="finGarantia"
          />
        </div>
        <!--Contenedor del proveedorMant-->
        <div>
          <label for="proveedorMant">Prov. Mant. Hardware:</label>
          <select
            v-model="proveedorMant"
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
          <input v-model="pertet" type="checkbox" id="pertet" name="pertet" />
          <label for="pertet">PERTET?</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
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
