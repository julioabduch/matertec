<template>
  <div class="brand-grid">
    <!-- Grid responsivo de marcas -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
      
      <!-- Speed Queen -->
      <div class="brand-item">
        <div class="brand-logo-container">
          <img 
            src="/images/sections/brands/speed.webp" 
            alt="Speed Queen" 
            class="brand-logo"
            loading="lazy"
          />
        </div>
      </div>
      
      <!-- LG -->
      <div class="brand-item">
        <div class="brand-logo-container">
          <img 
            src="/images/sections/brands/lg.webp" 
            alt="LG" 
            class="brand-logo"
            loading="lazy"
          />
        </div>
      </div>
      
      <!-- Electrolux -->
      <div class="brand-item">
        <div class="brand-logo-container">
          <img 
            src="/images/sections/brands/electrolux.webp" 
            alt="Electrolux" 
            class="brand-logo"
            loading="lazy"
          />
        </div>
      </div>
      
      <!-- Samsung -->
      <div class="brand-item">
        <div class="brand-logo-container">
          <img 
            src="/images/sections/brands/samsung.webp" 
            alt="Samsung" 
            class="brand-logo"
            loading="lazy"
          />
        </div>
      </div>
      
      <!-- Outras marcas -->
      <div class="brand-item">
        <div class="brand-logo-container flex items-center justify-center">
          <div class="text-center">
            <div class="w-12 h-12 bg-secondary-400/20 rounded-full flex items-center justify-center mb-2 mx-auto">
              <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <span class="text-sm text-white/70 font-public-medium">e outras marcas</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
// Componente BrandGrid
// Exibe os logos das marcas atendidas em um grid responsivo
</script>

<style scoped>
.brand-grid {
  @apply w-full;
}

.brand-item {
  @apply transition-all duration-300 hover:scale-105;
}

.brand-logo-container {
  @apply bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-secondary-400/30 transition-all duration-300;
  @apply min-h-[120px] flex items-center justify-center;
}

.brand-logo {
  @apply max-w-full max-h-20 w-auto h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300;
}

/* Responsividade para logos */
@media (max-width: 768px) {
  .brand-logo-container {
    @apply min-h-[100px] p-4;
  }
  
  .brand-logo {
    @apply max-h-16;
  }
}
</style>