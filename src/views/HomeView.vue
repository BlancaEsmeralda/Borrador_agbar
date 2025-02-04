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
        />
        <ComponentSearch v-model="searchFilters.tag" label="TAG" />
        <ComponentSearch
          v-model="searchFilters.loginUsuario"
          label="Login Usuario"
        />
        <ComponentSearch v-model="searchFilters.netbios" label="NETBIOS" />
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
              <tr v-for="activo in activos" :key="activo.id">
                <td>{{ activo.inv }}</td>
                <router-link to="/Datos-generales-view" target="_blank">
                  <td>{{ activo.modelo }}</td>
                </router-link>
                <td>{{ activo.netbios }}</td>
                <td>{{ activo.serial }}</td>
                <td>{{ activo.estado }}</td>
                <td>{{ activo.desactivadoAd }}</td>
                <td>{{ activo.so }}</td>
                <td>{{ activo.usuario }}</td>
                <td>{{ activo.manager }}</td>
                <td>{{ activo.itot }}</td>
                <td>{{ activo.ubicacion }}</td>
                <td>{{ activo.administrador }}</td>
                <td>{{ activo.critico }}</td>
                <td>{{ activo.anioCompra }}</td>
                <td>{{ activo.ipNat }}</td>
                <td>{{ activo.ipPrincipal }}</td>
                <td>{{ activo.comentarios }}</td>
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
  components: {
    ComponentTituloPrincipal,
    ContainerForm,
    ComponentSearch,
  },
  data() {
    return {
      searchFilters: {
        numeroSerie: "",
        tag: "",
        loginUsuario: "",
        netbios: "",
      },
      activos: [
        // Datos de ejemplo
        {
          id: 1,
          inv: "INV001",
          modelo: "HP EliteBook",
          netbios: "PC001",
          serial: "SER123456",
          estado: "Activo",
          desactivadoAd: "No",
          so: "Windows 10",
          usuario: "usuario1",
          manager: "manager1",
          itot: "IT001",
          ubicacion: "Oficina 101",
          administrador: "admin1",
          critico: "Sí",
          anioCompra: "2023",
          ipNat: "192.168.1.1",
          ipPrincipal: "10.0.0.1",
          comentarios: "Equipo principal",
        },
        // Datos de ejemplo
        {
          id: 2,
          inv: "INV002",
          modelo: "HP EliteBook2",
          netbios: "PC002",
          serial: "SER123452",
          estado: "Activo",
          desactivadoAd: "No",
          so: "Windows 10",
          usuario: "usuario2",
          manager: "manager2",
          itot: "IT002",
          ubicacion: "Oficina 102",
          administrador: "admin2",
          critico: "Sí",
          anioCompra: "2022",
          ipNat: "192.168.1.2",
          ipPrincipal: "10.0.0.2",
          comentarios: "Equipo principal",
        },
        // Datos de ejemplo
        {
          id: 3,
          inv: "INV003",
          modelo: "HP EliteBook3",
          netbios: "PC003",
          serial: "SER123453",
          estado: "Activo",
          desactivadoAd: "No",
          so: "Windows 10",
          usuario: "usuario3",
          manager: "manager3",
          itot: "IT003",
          ubicacion: "Oficina 103",
          administrador: "admin3",
          critico: "Sí",
          anioCompra: "2023",
          ipNat: "192.168.1.3",
          ipPrincipal: "10.0.0.3",
          comentarios: "Equipo principal",
        },
        // Puedes agregar más registros de ejemplo aquí
        {
          id: 4,
          inv: "INV004",
          modelo: "HP EliteBook4",
          netbios: "PC004",
          serial: "SER123454",
          estado: "Activo",
          desactivadoAd: "No",
          so: "Windows 10",
          usuario: "usuario4",
          manager: "manager4",
          itot: "IT004",
          ubicacion: "Oficina 104",
          administrador: "admin4",
          critico: "Sí",
          anioCompra: "2024",
          ipNat: "192.168.1.4",
          ipPrincipal: "10.0.0.4",
          comentarios: "Equipo principal",
        },
        {
          id: 5,
          inv: "INV005",
          modelo: "Lenovo",
          netbios: "PC005",
          serial: "SER123455",
          estado: "Activo",
          desactivadoAd: "No",
          so: "Windows 10",
          usuario: "usuario5",
          manager: "manager5",
          itot: "IT005",
          ubicacion: "Oficina 105",
          administrador: "admin5",
          critico: "Sí",
          anioCompra: "2025",
          ipNat: "192.168.1.5",
          ipPrincipal: "10.0.0.5",
          comentarios: "Equipo principal",
        },
      ],
    };
  },
  methods: {
    async buscarActivos() {
      try {
        const response = await axios.get("tu-api/activos", {
          params: this.searchFilters,
        });
        this.activos = response.data;
      } catch (error) {
        console.error("Error al obtener activos:", error);
      }
    },
  },
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
  height: 400px;
  overflow: hidden;
}

.table-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
}

table {
  min-width: 1500px;
  border-collapse: collapse;
  white-space: nowrap;
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
