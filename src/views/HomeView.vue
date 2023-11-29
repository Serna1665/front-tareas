<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Fecha Inicial</th>
              <th>fecha de Finalizacion</th>
              <th>Estado</th>
              <th>Proyecto Asociado</th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="cargando">
              <td colspan="6">
                <h2>Cargando...</h2>
              </td>
            </tr>
            <tr v-else v-for="task, i in this.tareas" :key="task.id">
              <td v-text="(i + 1)"></td>
              <td v-text="task.id"></td>
              <td v-text="task.nombre"></td>
              <td v-text="task.descripcion"></td>
              <td v-text="task.fecha_inicio"></td>
              <td v-text="task.fecha_finalizacion"></td>
              <td v-text="task.estado"></td>
              <td v-text="task.nombre_proyecto"></td>
              <td>
                <router-link :to="{ path: 'view/' + task.id }" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                &nbsp;
                <button @click="editar(task.id)" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i> Editar
                </button>
                &nbsp;
                <button class="btn btn-danger" v-on:click="eliminar(task.id, task.nombre)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { confirmarAlerta } from '../funciones'


export default {
  data() {
    return {
      tareas: null,
      cargando: false,
    }
  },
  mounted() {
    this.getTareas(); 
  },
  methods: {
    getTareas() {
      this.cargando = true
      axios.get('http://127.0.0.1:8000/api/tareas/listar')
        .then(
          res => {
            this.tareas = res.data;
            this.cargando = false;
          }
        )
    },
    eliminar(id, nombre) {
      const url = 'http://127.0.0.1:8000/api/tareas/eliminar/';
      confirmarAlerta(url, id, 'Eliminar tarea', `¿Realmente desea eliminar la tarea ${nombre}?`)
        .then((confirmado) => {
          if (confirmado) {
            axios.delete(url + id)
              .then(() => {
                this.getTareas();
              })
              .catch(() => {
                console.error('Error al eliminar la tarea');
              });
          }
        })
        .catch(() => {
          console.error('Confirmación rechazada o error en la confirmación');
        });
    },
  }
}
</script>
