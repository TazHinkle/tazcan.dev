<template>
  <div class="HomeView">
    <h1>A Developer's Journey</h1>
    <div class="profilePicture">
      <img src="../assets/taz_archer.jpg" alt="Taz with a bow" />
    </div>
    <p>Join me, Taz Hinkle, to learn about my adventures in software development.</p>
  </div>
</template>

<style>
.HomeView {
  min-height: 200px;
  text-align: center;
}
.profilePicture {
  text-align: center;
}
.profilePicture img {
  border-radius: 50%;
  max-width: 60%;
}
@media (min-width: 750px) {
  .profilePicture img {
    max-width: 30%;
  }
}
</style>
