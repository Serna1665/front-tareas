<template>
  <nav class="navbar navbar-expand-lg navdar-dark bg-success">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">INICIO</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tareas
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/">Lista de tareas</router-link>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
            </ul>
          </li>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <li class="nav-item dropdown">
              <router-link to="/crearview" class="dropdown-item"> Crear Tarea
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid"></div>
  <router-view />
</template>


