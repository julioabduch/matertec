<template>
  <section class="section-hero-soft relative overflow-hidden">
    <!-- Background com gradiente suave para melhor legibilidade -->
    <div class="absolute inset-0 bg-slate-900/10"></div>
    
    <!-- Conteúdo principal -->
    <div class="relative z-10 container-section py-20 lg:py-32">
      <div class="text-center text-white mb-16">
        <!-- Título -->
        <h2 class="text-hero mb-6 text-white font-public-bold">
          Marcas que atendemos
        </h2>
        
        <!-- Subtítulo -->
        <p class="text-subtitle opacity-90 font-public-normal max-w-3xl mx-auto">
          Atuamos com <strong class="text-secondary-400">Speed Queen, LG, Electrolux</strong> e outras marcas líderes do mercado.
        </p>
      </div>
      
      <!-- Grid de Marcas -->
      <BrandGrid />
    </div>
  </section>
</template>

<script setup>
// Componente da seção "Marcas que atendemos"
// Apresenta as principais marcas atendidas pela empresa
</script>

<style scoped>
/* Estilos específicos do componente, se necessário */
</style>