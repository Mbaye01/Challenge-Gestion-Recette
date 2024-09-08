<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    <div class="container-fluid">
      <button
        data-mdb-collapse-init
        class="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img/>
        </a>

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
        </ul>
      </div>

      <div class="d-flex align-items-center">
        <a class="text-reset me-3" href="#">
          <i class="fas fa-shopping-cart"></i>
        </a>

        <div class="dropdown">
          <a
            data-mdb-dropdown-init
            class="text-reset me-3 dropdown-toggle hidden-arrow"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            aria-expanded="false"
          >
            <i class="fas fa-bell"></i>
            <span class="badge rounded-pill badge-notification bg-danger">1</span>
          </a>
        </div>

        <div class="dropdown">
          <a
            data-mdb-dropdown-init
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-circle"
              height="25"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a class="dropdown-item" href="#">My profile</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Settings</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <header class="container-fluid navbar-dark bg-dark">
    <nav class="navbar navbar-dark bg-dark container">
      <div>
        <button
          class="btn btn-dark text-white"
          @click="route.push({ name: 'home' })"
        >
          Accueil
        </button>
        <button
          class="btn btn-dark text-white ms-2"
          @click="route.push({ name: 'recette' })"
        >
          Liste Recettes
        </button>
      </div>
    </nav>
  </header>
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
</style>
