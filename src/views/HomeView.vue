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
          v-model="searchFilters.NumInventario"
          label="TAG"
          filterKey="NumInventario"
          @search="handleSearch"
        />
        <ComponentSearch
          v-model="searchFilters.Usuario"
          label="Usuario"
          filterKey="Usuario"
          @search="handleSearch"
        />
        <ComponentSearch
          v-model="searchFilters.nombreNetBIOS"
          label="NETBIOS"
          filterKey="nombreNetBIOS"
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
                    :to="`/datos-generales/${activo.IdActivo}`"
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
                <td>{{ activo.Comentarios }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </container-form>
    </div>
  </div>
  <!--Componente de pie de pagina-->
  <component-footer></component-footer>
</template>

<script>
import ComponentTituloPrincipal from "@/components/ComponentTituloPrincipal.vue";
import ContainerForm from "@/components/ContainerForm.vue";
import ComponentSearch from "@/components/ComponentSearch.vue";
import ComponentFooter from "@/components/ComponentFooter.vue";
import axios from "axios";

export default {
  name: "HomeView",
  // Registramos los componentes tituloprincipal, el contenedor, el componente de busqueda.
  components: {
    ComponentTituloPrincipal,
    ContainerForm,
    ComponentSearch,
    ComponentFooter,
  },
  data() {
    // Objeto que almacena los valores de todos los filtros
    return {
      searchFilters: {
        numeroSerie: "",
        NumInventario: "",
        Usuario: "",
        nombreNetBIOS: "",
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
        const params = new URLSearchParams();

        if (this.searchFilters.numeroSerie) {
          params.append("numeroSerie", this.searchFilters.numeroSerie);
        }
        if (this.searchFilters.NumInventario) {
          params.append("NumInventario", this.searchFilters.NumInventario);
        }
        if (this.searchFilters.Usuario) {
          params.append("Usuario", this.searchFilters.Usuario);
        }
        if (this.searchFilters.nombreNetBIOS) {
          params.append("nombreNetBIOS", this.searchFilters.nombreNetBIOS);
        }

        const response = await axios.get(
          `http://localhost:3001/api/filtros/combinado?${params.toString()}`
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
