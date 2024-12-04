<template>
  <!--div principal de la pgina-->
  <div>
    <!--Contenedor del logo-->
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    <div class="contenedor_global">
      <!--Contenedor del titulo-->
      <div class="contenedor_titulo">
        <h1 class="titulo animate__animated animate__fadeInDown animate_faster">
          Micro
        </h1>
      </div>
      <!--Contenedor del formulario-->
      <div class="contenedor_formulario">
        <!--Formulario del activo-->
        <form class="formulario" @submit.prevent="buscarActivo">
          <div>
            <input
              v-model="id_seguridad"
              type="text"
              id="id_seguridad"
              name="id_seguridad"
              placeholder="ACTIVO"
            />
          </div>
          <button type="submit">Prueba de api</button>
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
          <!--contenedor del inventario-->
          <div>
            <label for="id_inventario">Id.inventario</label>
            <input
              v-model="formData.id_inventario"
              type="text"
              id="id_inventario"
              name="id_inventario"
            />
          </div>
          <!--contenedor de usuario-->
          <div>
            <label for="usuario_micro">Usuario:</label>
            <select
              v-model="formData.usuario_micro"
              id="usuario_micro"
              name="usuario_micro"
            >
              <option
                v-for="option in usuarioOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--contenedor de Nombre del usuario-->
          <div>
            <label for="usuario_micro_text"></label>
            <input
              v-model="formData.usuario_micro_text"
              type="text"
              name="usuario_micro_text"
              id="usuario_micro_text"
            />
          </div>
          <!--contenedor de usuario del exel-->
          <div>
            <label for="usuario_de_exel">Usuario(del Exel):</label>
            <input
              v-model="formData.usuario_de_exel"
              type="text"
              name="usuario_de_exel"
              id="usuario_de_exel"
            />
          </div>
          <!--Contenedor del manager-->
          <div>
            <label for="manager_micro">Manager:</label>
            <select
              v-model="formData.manager_micro"
              name="manager_micro"
              id="manager_micro"
            >
              <option
                v-for="option in managerOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor del nombre del manager-->
          <div>
            <label for="manager_micro_text"></label>
            <input
              v-model="formData.manager_micro_text"
              type="text"
              name="manager_micro_text"
              id="manager_micro_text"
            />
          </div>
          <!--Contenedor ambito-->
          <div>
            <label for="ambito">Ambito:</label>
            <select v-model="formData.ambito" name="ambito" id="ambito">
              <option
                v-for="option in ambitoOpciones"
                :key="option.id"
                :value="option.id"
              >
                {{ option.nombre }}
              </option>
            </select>
          </div>
          <!--Contenedor de checkboxes-->
          <div class="checkbox">
            <!--Contenedor de equipo especial-->
            <div>
              <input
                v-model="formData.equipo_especial"
                type="checkbox"
                name="equipo_especial"
                id="equipo_especial"
              />
              <label for="equipo_especial">Es equipo especial</label>
            </div>
            <!--Contenedor de admin-->
            <div>
              <input
                v-model="formData.es_admin"
                type="checkbox"
                name="es_admin"
                id="es_admin"
              />
              <label for="es_admin">Usu.habitual es Admin.</label>
            </div>
            <!--Contenedor check vip-->
            <div>
              <input
                v-model="formData.vip"
                type="checkbox"
                name="vip"
                id="vip"
              />
              <label for="vip">Es vip</label>
            </div>
            <!--Contenedor check desactivado ad-->
            <div>
              <input
                v-model="formData.desactivado_ad"
                type="checkbox"
                name="desactivado_ad"
                id="desactivado_ad"
              />
              <label for="desactivado_ad">Desactivado en AD</label>
            </div>
          </div>

          <!--DATOS ADMINISTRATIVOS-->
          <div class="full-width">
            <h2 class="subtitulo">Datos Administrativos</h2>
          </div>
          <!--Contenedor de proveedor-->
          <div>
            <label for="proveedor">Proveedor:</label>
            <select
              v-model="formData.proveedor"
              name="proveedor"
              id="proveedor"
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
          <!--Contenedor de pedido ordenis-->
          <div>
            <label for="pedi_ordinis">Pedido Ordinis:</label>
            <input
              v-model="formData.pedi_ordinis"
              type="text"
              name="pedi_ordinis"
              id="pedi_ordinis"
            />
          </div>
          <!--Contenedor de fecha de compra-->
          <div>
            <label for="fecha_compra">Fecha de compra:</label>
            <input
              v-model="formData.fecha_compra"
              type="date"
              name="fecha_compra"
              id="fecha_compra"
            />
          </div>
          <!--Contenedor de finde de gantia-->
          <div>
            <label for="fin_garantia">Finde Garantía:</label>
            <input
              v-model="formData.fin_garantia"
              type="text"
              name="fin_garantia"
              id="fin_garantia"
            />
          </div>
          <!--Contenedor de amortizacion(año)-->
          <div>
            <label for="amorti_año">Amortización(año):</label>
            <input
              v-model="formData.amorti_año"
              type="text"
              name="amorti_año"
              id="amorti_año"
            />
          </div>
          <!--Contenedor fin amortizacion-->
          <div>
            <label for="fi_amorti">Fin Amortización:</label>
            <input
              v-model="formData.fi_amorti"
              type="date"
              name="fi_amorti"
              id="fi_amorti"
            />
          </div>
          <!--Contenedor capex-->
          <div>
            <label for="es_capex">Es CAPEX(Inversión)</label>
            <input
              v-model="formData.es_capex"
              type="checkbox"
              name="es_capex"
              id="es_capex"
            />
          </div>

          <!--DATOS MOVILES-->
          <div class="full-width">
            <h2 class="subtitulo">
              Datos Móviles(Solo para SmartPhones,!Pads)
            </h2>
          </div>
          <!--Contenedor de imei-->
          <div>
            <label for="imei">IMEI:</label>
            <input v-model="formData.imei" type="text" name="imei" id="imei" />
          </div>
          <!--Contenedor de codigo de desbloqueo-->
          <div>
            <label for="cod_desbloqueo">Código Desbloqueo:</label>
            <input
              v-model="formData.cod_desbloqueo"
              type="text"
              name="cod_desbloqueo"
              id="cod_desbloqueo"
            />
          </div>
          <!--Contenedor de num de telefono-->
          <div>
            <label for="num_tel">Núm.Teléfono:</label>
            <input
              v-model="formData.num_tel"
              type="text"
              name="num_tel"
              id="num_tel"
            />
          </div>
          <!--Contenedor de -->
          <div>
            <label for="icc">ICC:</label>
            <input v-model="formData.icc" type="text" name="icc" id="icc" />
          </div>
          <!--Contenedor de -->
          <div>
            <label for="pin">PIN:</label>
            <input v-model="formData.pin" type="text" name="pin" id="pin" />
          </div>
          <!--Contenedor de -->
          <div>
            <label for="puk">PUK:</label>
            <input v-model="formData.puk" type="text" name="puk" id="puk" />
          </div>
          <!--Contenedor de -->
          <div>
            <label for="pep">PEP:</label>
            <input v-model="formData.pep" type="text" name="pep" id="pep" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MicroActivo",
  data() {
    return {
      id_seguridad: "",
      formData: {
        id_inventario: "",
        usuario_micro: "",
        usuario_micro_text: "",
        usuario_de_exel: "",
        manager_micro: "",
        manager_micro_text: "",
        ambito: "",
        equipo_especial: "",
        es_admin: "",
        vip: "",
        desactivado_ad: "",
        proveedor: "",
        pedi_ordinis: "",
        fecha_compra: "",
        fin_garantia: "",
        amorti_año: "",
        fi_amorti: "",
        es_capex: "",
        imei: "",
        cod_desbloqueo: "",
        num_tel: "",
        icc: "",
        pin: "",
        puk: "",
        pep: "",
      },
      usuarioOpciones: [],
      managerOpciones: [],
      ambitoOpciones: [],
      proveedorOpciones: [],
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
          this.formData.id_inventario = data.title;
          this.formData.usuario_micro = data.title;
          this.formData.usuario_micro_text = data.title;
          this.formData.usuario_de_exel = data.title;
          this.formData.manager_micro = data.title;
          this.formData.manager_micro_text = data.title;
          this.formData.ambito = data.title;
          this.formData.equipo_especial = data.title;
          this.formData.es_admin = data.title;
          this.formData.vip = data.title;
          this.formData.desactivado_ad = data.title;
          this.formData.proveedor = data.title;
          this.formData.pedi_ordinis = data.title;
          this.formData.fecha_compra = data.title;
          this.formData.fin_garantia = data.title;
          this.formData.amorti_año = data.title;
          this.formData.fi_amorti = data.title;
          this.formData.es_capex = data.title;
          this.formData.imei = data.title;
          this.formData.cod_desbloqueo = data.title;
          this.formData.num_tel = data.title;
          this.formData.icc = data.title;
          this.formData.pin = data.title;
          this.formData.puk = data.title;
          this.formData.pep = data.title;

          // Llama a la API para llenar los select
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
              // Nota que ahora usamos 'response' en lugar de 'responce'
              this.usuarioOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.managerOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.ambitoOpciones = response.data.map((user) => ({
                id: user.id,
                nombre: user.name,
              }));
              this.proveedorOpciones = response.data.map((user) => ({
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
        id_inventario: "",
        usuario_micro: "",
        usuario_micro_text: "",
        usuario_de_exel: "",
        manager_micro: "",
        manager_micro_text: "",
        ambito: "",
        equipo_especial: "",
        es_admin: "",
        vip: "",
        desactivado_ad: "",
        proveedor: "",
        pedi_ordinis: "",
        fecha_compra: "",
        fin_garantia: "",
        amorti_año: "",
        fi_amorti: "",
        es_capex: "",
        imei: "",
        cod_desbloqueo: "",
        num_tel: "",
        icc: "",
        pin: "",
        puk: "",
        pep: "",
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
  background-color: #ffffff; /* o el color que prefieras */
  background-image: url("../assets/water-splash.png");
  background-repeat: no-repeat;
  background-position: bottom right; /* o la posición que prefieras */
  background-size: 100% auto; /* ajusta el tamaño según sea necesario */
}
/* Títulos */
.contenedor_titulo {
  padding: 30px;
  margin-bottom: 1px;
}
.titulo {
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: #1c346c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: 50px;
}
.subtitulo {
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
  padding: 25px 50px 50px 100px;
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
