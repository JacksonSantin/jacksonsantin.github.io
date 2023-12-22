<template>
  <section
    id="formacao"
    class="text-center mx-auto flex flex-col max-w-7xl items-center justify-center p-6 lg:px-8"
    data-aos="zoom-in"
  >
    <h1
      class="text-3xl font-bold tracking-tight text-green-500 sm:text-4xl mb-5"
    >
      Formação
    </h1>
    <div
      class="flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-6"
    >
      <div class="container mx-auto p-8">
        <div class="timeline-container">
          <div class="timeline-item">
            <p>2017</p>
            <div class="timeline-icon">
              <i class="fas fa-check"></i>
            </div>
            <div class="timeline-content">
              <h3 class="text-lg font-bold">Evento 1</h3>
              <p>Descrição do evento 1.</p>
              <span class="text-gray-500">Data: 01/01/2023</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fas fa-check"></i>
            </div>
            <div class="timeline-content">
              <h3 class="text-lg font-bold">Evento 2</h3>
              <p>Descrição do evento 2.</p>
              <span class="text-gray-500">Data: 02/01/2023</span>
            </div>
          </div>
          <!-- Adicione mais itens conforme necessário -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
section {
  margin-top: 14rem;
}
.timeline-container {
  position: relative;
}

.timeline-item {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 2px;
  background-color: #333;
  z-index: -1;
}

.timeline-icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  margin-left: 15px;
  color: #fff;
}

.timeline-content {
  background-color: #f1f1f1;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
}
</style>