<template>
  <section class="section-hero-soft bg-slate-900/10 py-20 lg:py-32 relative overflow-hidden">
    <!-- Background decorativo -->
    <div class="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-primary-950/10"></div>
    
    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        
        <!-- Cabeçalho da seção -->
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            O que fazemos
          </h2>
          <p class="text-lg lg:text-xl text-white text-opacity-80 font-normal max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas para lavanderias profissionais, desde a instalação até a manutenção especializada.
          </p>
        </div>

        <!-- Lista de serviços -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          <!-- Manutenção corretiva e preventiva -->
          <div class="service-item">
            <div class="service-icon">
              <svg class="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Manutenção corretiva e preventiva
            </h3>
            <p class="text-white text-opacity-70 font-normal leading-relaxed">
              Serviços especializados para manter seus equipamentos sempre funcionando com máxima eficiência.
            </p>
          </div>

          <!-- Instalação e start-up -->
          <div class="service-item">
            <div class="service-icon">
              <svg class="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Instalação e start-up de máquinas
            </h3>
            <p class="text-white text-opacity-70 font-normal leading-relaxed">
              Instalação completa e configuração inicial de equipamentos para lavanderias profissionais.
            </p>
          </div>

          <!-- Montagem de lavanderias -->
          <div class="service-item">
            <div class="service-icon">
              <svg class="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Montagem de lavanderias express self-service
            </h3>
            <p class="text-white text-opacity-70 font-normal leading-relaxed">
              Projeto e execução completa de lavanderias automatizadas para atendimento 24 horas.
            </p>
          </div>

          <!-- Obras de adaptação -->
          <div class="service-item">
            <div class="service-icon">
              <svg class="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Obras de adaptação (vidros, pintura, piso)
            </h3>
            <p class="text-white text-opacity-70 font-normal leading-relaxed">
              Reformas e adequações do ambiente para otimizar o funcionamento da lavanderia.
            </p>
          </div>

          <!-- Elétrica e hidráulica -->
          <div class="service-item">
            <div class="service-icon">
              <svg class="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Elétrica e hidráulica completas
            </h3>
            <p class="text-white text-opacity-70 font-normal leading-relaxed">
              Instalações elétricas e hidráulicas especializadas para equipamentos industriais.
            </p>
          </div>

          <!-- Adesivagem e sinalização -->
          <div class="service-item">
            <div class="service-icon">
              <svg class="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6m-6-8h6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              Adesivagem, sinalização e layout
            </h3>
            <p class="text-white text-opacity-70 font-normal leading-relaxed">
              Identidade visual completa e sinalização profissional para sua lavanderia.
            </p>
          </div>

        </div>

        <!-- Call to action -->
        <div class="text-center mt-16 lg:mt-20">
          <p class="text-lg text-white text-opacity-80 font-normal mb-8">
            Precisa de algum desses serviços? Entre em contato conosco!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5541998247111?text=Olá! Gostaria de solicitar um orçamento para os serviços de lavanderia." target="_blank" rel="noopener noreferrer" class="btn-primary text-center">
              Solicitar Orçamento
            </a>
            <a href="https://wa.me/5541998247111?text=Olá! Gostaria de falar sobre os serviços disponíveis." target="_blank" rel="noopener noreferrer" class="btn-secondary text-center">
              Falar no WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Componente ServicesSection
// Exibe os serviços oferecidos pela empresa em um grid responsivo
</script>

<style scoped>
.service-item {
  @apply bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300;
}

.service-item:hover {
  @apply border-secondary-400 border-opacity-30 transform scale-105;
}

.service-icon {
  @apply w-16 h-16 bg-secondary-400 bg-opacity-20 rounded-xl flex items-center justify-center mb-6 mx-auto;
}

/* Botões */
.btn-primary {
  @apply bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg;
}

.btn-secondary {
  @apply bg-white bg-opacity-10 hover:bg-opacity-20 text-white font-semibold px-8 py-4 rounded-xl border border-white border-opacity-30 transition-all duration-300 transform hover:scale-105;
}

.btn-secondary:hover {
  @apply border-secondary-400 border-opacity-50;
}

/* Responsividade */
@media (max-width: 768px) {
  .service-item {
    @apply p-6;
  }
  
  .service-icon {
    @apply w-12 h-12 mb-4;
  }
}
</style>