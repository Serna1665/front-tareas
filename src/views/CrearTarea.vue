<template>
    <div class="about">
        <h1>Crear Tarea</h1>
        <v-card>
            <form @submit.prevent="crearTarea" class="form">
                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" v-model="tarea.nombre" required class="form-control">
                </div>

                <div class="form-group">
                    <label for="descripcion">Descripción:</label>
                    <textarea id="descripcion" v-model="tarea.descripcion" required class="form-control"></textarea>
                </div>

                <div class="form-group">
                    <label for="fecha_inicio">Fecha de inicio:</label>
                    <input type="date" id="fecha_inicio" v-model="tarea.fecha_inicio" required class="form-control">
                </div>

                <div class="form-group">
                    <label for="fecha_finalizacion">Fecha de finalización:</label>
                    <input type="date" id="fecha_finalizacion" v-model="tarea.fecha_finalizacion" required
                        class="form-control">
                </div>

                <div class="form-group">
                    <label for="estado">Estado:</label>
                    <input type="checkbox" id="estado" v-model="tarea.estado">
                </div>

                <div class="form-group">
                    <label for="proyecto_id">ID del Proyecto:</label>
                    <input type="number" id="proyecto_id" v-model="tarea.proyecto_id" required class="form-control">
                </div>

                <button type="submit" class="btn btn-primary">Crear Tarea</button>
            </form>
        </v-card>
    </div>
</template>
  

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tarea: {
                nombre: '',
                descripcion: '',
                fecha_inicio: '',
                fecha_finalizacion: '',
                estado: false,
                proyecto_id: null
            }
        };
    },
    methods: {
        async crearTarea() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/tareas/crear', this.tarea);
                console.log('Tarea creada:', response.data);
            } catch (error) {
                console.error('Error al crear la tarea:', error);
            }
        }
    }
};
</script>
