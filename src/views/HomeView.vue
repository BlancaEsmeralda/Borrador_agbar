<template>
  <div>
    <HeaderMain class="header" />
  </div>
  <div class="home">
    <component-titulo-principal class="titulo"></component-titulo-principal>
    <div class="content-wrapper">
      <div class="search-grid">
        <ComponentSearch
          v-model="searchFilters.numeroSerie"
          label="Numero de serie"
          filterKey="numeroSerie"
          @search="handleSearch"
        />
        <ComponentSearch
          v-model="searchFilters.tag"
          label="TAG"
          filterKey="tag"
          @search="handleSearch"
        />
        <ComponentSearch
          v-model="searchFilters.loginUsuario"
          label="Login Usuario"
          filterKey="loginUsuario"
          @search="handleSearch"
        />
        <ComponentSearch
          v-model="searchFilters.netbios"
          label="NETBIOS"
          filterKey="netbios"
          @search="handleSearch"
        />
      </div>

      <container-form class="home-container">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Inv.</th>
                <th>Modelo</th>
                <th>NetBIOS</th>
                <th>Serial</th>
                <th>Estado</th>
                <th>Desactivado AD</th>
                <th>S.O</th>
                <th>Usuario</th>
                <th>Manager</th>
                <th>Itot</th>
                <th>Ubicación</th>
                <th>Administrador</th>
                <th>Crítico</th>
                <th>Año de compra</th>
                <th>IP NAT</th>
                <th>IP Principal</th>
                <th>Comentarios</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="activo in activos" :key="activo.IdActivo">
                <!--Este es el id objeto pero no el id del campo-->
                <td>{{ activo.NumInventario }}</td>
                <td>
                  <!--Router link que nos abre una pestaña para los datos en detalles-->
                  <router-link
                    :to="`/Datos-generales-view/${activo.IdActivo}`"
                    target="_blank"
                    :custom="false"
                  >
                    {{ activo.Modelo }}
                  </router-link>
                </td>
                <td>{{ activo.nombreNetBIOS }}</td>
                <td>{{ activo.NumeroSerie }}</td>
                <td>{{ activo.Estado }}</td>
                <td>{{ activo.esDesactivadoAD }}</td>
                <td>{{ activo.SistemaOperativo }}</td>
                <td>{{ activo.Usuario }}</td>
                <td>{{ activo.Manager }}</td>
                <td>{{ activo.ITOT }}</td>
                <td>{{ activo.Ubicacion }}</td>
                <td>{{ activo.esUsuAdmin }}</td>
                <td>{{ activo.critico }}</td>
                <td>{{ activo.FechaCompra }}</td>
                <td>{{ activo.IP }}</td>
                <!--<td>{{ activo.ipPrincipal }}</td>-->
                <td>{{ activo.Comentarios }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </container-form>
    </div>
  </div>
</template>

<script>
import ComponentTituloPrincipal from "@/components/ComponentTituloPrincipal.vue";
import ContainerForm from "@/components/ContainerForm.vue";
import ComponentSearch from "@/components/ComponentSearch.vue";
import axios from "axios";

export default {
  name: "HomeView",
  // Registramos los componentes tituloprincipal, el contenedor, el componente de busqueda.
  components: {
    ComponentTituloPrincipal,
    ContainerForm,
    ComponentSearch,
  },
  data() {
    // Objeto que almacena los valores de todos los filtros
    return {
      searchFilters: {
        numeroSerie: "",
        tag: "",
        loginUsuario: "",
        netbios: "",
      },
      activos: [],
    };
  },
  methods: {
    // Maneja el evento de búsqueda emitido por ComponentSearch
    handleSearch({ key, value }) {
      // Actualiza el valor del filtro correspondiente
      this.searchFilters[key] = value;
      // Ejecuta la búsqueda con los nuevos filtros
      this.buscarActivos();
    },
    //Funcion de buscar el activo
    async buscarActivos() {
      try {
        // Crea un objeto solo con los filtros que tienen valor
        const filtros = Object.entries(this.searchFilters).reduce(
          (acc, [key, value]) => {
            if (value) acc[key] = value;
            return acc;
          },
          {}
        );

        // Determina qué endpoint usar basado en los filtros activos
        let endpoint = "numeroSerie"; // default endpoint
        let params = {};

        if (filtros.numeroSerie) {
          endpoint = "numeroSerie";
          params = { numeroSerie: filtros.numeroSerie };
        } else if (filtros.tag) {
          endpoint = "numeroInventario";
          params = { NumInventario: filtros.tag };
        } else if (filtros.loginUsuario) {
          endpoint = "loginUsuario";
          params = { Usuario: filtros.loginUsuario };
        } else if (filtros.netbios) {
          endpoint = "nombreNetbios";
          params = { nombreNetBIOS: filtros.netbios };
        }

        // Realiza la petición HTTP al backend con los filtros
        const response = await axios.get(
          `http://localhost:3001/api/filtros/${endpoint}`,
          { params }
        );

        // Actualiza el array de activos con la respuesta
        this.activos = response.data;
        console.log("Datos recibidos del backend:", this.activos);
      } catch (error) {
        console.error("Error al obtener activos:", error);
      }
    },
  },
  // Se ejecuta cuando el componente se monta en el DOM
  mounted() {
    // Realiza una búsqueda inicial para cargar todos los activos
    this.buscarActivos();
  },
  // Observa cambios en los filtros
  watch: {
    searchFilters: {
      handler() {
        this.buscarActivos();
      },
      deep: true,
    },
  },
};
</script>
<!--Estilos de la view Menu-->
<style scoped>
.content-wrapper {
  padding: 15px 75px;
}

.search-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 10px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
}

.home-container {
  margin-bottom: 30px;
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  min-height: 400px;
  max-height: 80vh;
  overflow: visible;
}

.table-wrapper {
  width: 100%;
  max-height: calc(80vh - 30px);
  overflow-y: auto;
  overflow-x: auto;
}

table {
  min-width: 1500px;
  border-collapse: collapse;
  white-space: nowrap;
  width: 100%;
}

th,
td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f5f5f5;
  position: sticky;
  top: 0;
  z-index: 1;
}

/* Estilos adicionales para mejorar la apariencia */
tbody tr:hover {
  background-color: #f8f9fa;
}

td {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
