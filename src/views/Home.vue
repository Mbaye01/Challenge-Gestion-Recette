<script setup>
</script>

<template>
  <div class="container">
    <h1 class="mt-3 mb-2 text-center fw-bold">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2017/03/27/13/54/bread-2178874_1280.jpg" class="d-block w-100 custom-height" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2022/05/22/13/21/healthy-7213383_1280.jpg" class="d-block w-100 custom-height" alt="...">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2021/12/30/11/31/italian-cuisine-6903772_1280.jpg" class="d-block w-100 custom-height" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </h1>
  </div>
</template>

<style scoped>
.custom-height {
  height: 570px; /* Ajuste la hauteur ici selon tes préférences */
  object-fit: cover; /* Garde le ratio des images sans les déformer */
}
</style>
