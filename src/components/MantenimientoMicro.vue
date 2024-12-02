<template>
  <!--div principal de la pgina-->
  <div>
    <div class="logo">
      <img src="../assets/logo.png" alt="Lod de agus de Barcelona" />
    </div>
    <div class="contenedor_titulo">
      <h1 class="titulo animate__animated animate__fadeInDown animate_faster">
        Micro
      </h1>
    </div>
    <div class="contenedor_formulario">
      <form class="formulario" @submit.prevent="guardarDatos">
        <div>
          <input
            v-model="id_inventario"
            type="text"
            id="identificador"
            name="identificador"
            placeholder="ACTIVO"
          />
        </div>
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
            v-model="id_inventario"
            type="text"
            id="id_inventario"
            name="id_inventario"
          />
        </div>
        <!--contenedor de usuario-->
        <div>
          <label for="usuario_micro">Usuario:</label>
          <select
            v-model="usuario_micro"
            id="usuario_micro"
            name="usuario_micro"
          >
            <option
              v-for="option in usuario_micro"
              :key="option.id"
              :value="option.id"
            >
              {{ option.nombre }}
            </option>
          </select>
        </div>
        <!--contenedor de Nombre del usuario-->
        <div>
          <label for="usuario_micro_text">Nombre:</label>
          <input
            v-model="usuario_micro_text"
            type="text"
            name="usuario_micro_text"
            id="usuario_micro_text"
          />
        </div>
        <!--contenedor de usuario del exel-->
        <div>
          <label for="usuario_de_exel">Usuario(del Exel):</label>
          <input
            v-model="usuario_de_exel"
            type="text"
            name="usuario_de_exel"
            id="usuario_de_exel"
          />
        </div>
        <!--Contenedor del manager-->
        <div>
          <label for="manager_micro">Manager:</label>
          <select
            v-model="manager_micro"
            name="manager_micro"
            id="manager_micro"
          >
            <option
              v-for="option in manager_micros"
              :key="option.id"
              :value="option.id"
            >
              {{ opcion.nombre }}
            </option>
          </select>
        </div>
        <!--Contenedor del nombre del manager-->
        <div>
          <label for="manager_micro_micro_text">Nombre:</label>
          <input
            v-model="manager_micro_micro_text"
            type="text"
            name="manager_micro_micro_text"
            id="manager_micro_micro_text"
          />
        </div>
        <!--Contenedor ambito-->
        <div>
          <label for="ambito">Ambito:</label>
          <select v-model="ambito" name="ambito" id="ambito">
            <option
              v-for="option in ambitos"
              :key="option.id"
              :value="option.id"
            >
              {{ opcion.nombre }}
            </option>
          </select>
        </div>
        <!--Contenedor de checkboxes-->
        <div class="checkbox">
          <!--Contenedor de equipo especial-->
          <div>
            <input
              v-model="equipo_especial"
              type="checkbox"
              name="equipo_especial"
              id="equipo_especial"
            />
            <label for="equipo_especial">Es equipo especial</label>
          </div>
          <!--Contenedor de admin-->
          <div>
            <input
              v-model="es_admin"
              type="checkbox"
              name="es_admin"
              id="es_admin"
            />
            <label for="es_admin">Usu.habitual es Admin.</label>
          </div>
          <!--Contenedor check vip-->
          <div>
            <input v-model="vip" type="checkbox" name="vip" id="vip" />
            <label for="vip">Es vip</label>
          </div>
          <!--Contenedor check desactivado ad-->
          <div>
            <input
              v-model="desactivado_ad"
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
          <select v-model="proveedor" name="proveedor" id="proveedor">
            <option
              v-for="option in proveedores"
              :key="option.id"
              :value="option.id"
            >
              {{ opcion.nombre }}
            </option>
          </select>
        </div>
        <!--Contenedor de pedido ordenis-->
        <div>
          <label for="pedi_ordinis">Pedido Ordinis:</label>
          <input
            v-model="pedi_ordinis"
            type="text"
            name="pedi_ordinis"
            id="pedi_ordinis"
          />
        </div>
        <!--Contenedor de fecha de compra-->
        <div>
          <label for="fecha_compra">Fecha de compra:</label>
          <input
            v-model="fecha_compra"
            type="date"
            name="fecha_compra"
            id="fecha_compra"
          />
        </div>
        <!--Contenedor de finde de gantia-->
        <div>
          <label for="fin_garantia">Finde Garantía:</label>
          <input
            v-model="fin_garantia"
            type="text"
            name="fin_garantia"
            id="fin_garantia"
          />
        </div>
        <!--Contenedor de amortizacion(año)-->
        <div>
          <label for="amorti_año">Amortización(año):</label>
          <input
            v-model="amorti_año"
            type="text"
            name="amorti_año"
            id="amorti_año"
          />
        </div>
        <!--Contenedor fin amortizacion-->
        <div>
          <label for="fi_amorti">Fin Amortización:</label>
          <input
            v-model="fi_amorti"
            type="date"
            name="fi_amorti"
            id="fi_amorti"
          />
        </div>
        <!--Contenedor capex-->
        <div>
          <label for="es_capex">Es CAPEX(Inversión)</label>
          <input
            v-model="es_capex"
            type="checkbox"
            name="es_capex"
            id="es_capex"
          />
        </div>

        <!--DATOS MOVILES-->
        <div class="full-width">
          <h2 class="subtitulo">Datos Móviles(Solo para SmartPhones,!Pads)</h2>
        </div>
        <!--Contenedor de imei-->
        <div>
          <label for="imei">IMEI:</label>
          <input v-model="imei" type="text" name="imei" id="imei" />
        </div>
        <!--Contenedor de codigo de desbloqueo-->
        <div>
          <label for="cod_desbloqueo">Código Desbloqueo:</label>
          <input
            v-model="cod_desbloqueo"
            type="text"
            name="cod_desbloqueo"
            id="cod_desbloqueo"
          />
        </div>
        <!--Contenedor de num de telefono-->
        <div>
          <label for="num_tel">Núm.Teléfono:</label>
          <input v-model="num_tel" type="text" name="num_tel" id="num_tel" />
        </div>
        <!--Contenedor de -->
        <div>
          <label for="icc">ICC:</label>
          <input v-model="icc" type="text" name="icc" id="icc" />
        </div>
        <!--Contenedor de -->
        <div>
          <label for="pin">PIN:</label>
          <input v-model="pin" type="text" name="pin" id="pin" />
        </div>
        <!--Contenedor de -->
        <div>
          <label for="puk">PUK:</label>
          <input v-model="puk" type="text" name="puk" id="puk" />
        </div>
        <!--Contenedor de -->
        <div>
          <label for="pep">PEP:</label>
          <input v-model="pep" type="text" name="pep" id="pep" />
        </div>
      </form>
    </div>
  </div>
</template>

<script></script>
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
