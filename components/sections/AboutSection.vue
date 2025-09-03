<template>
  <section class="section-hero-soft relative overflow-hidden">
    <!-- Background com gradiente suave para melhor legibilidade -->
    <div class="absolute inset-0 bg-slate-900/10"></div>
    
    <!-- Conteúdo principal -->
    <div class="relative z-10 container-section py-20 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Conteúdo de Texto -->
        <div class="order-1 lg:order-1 text-center lg:text-left text-white">
          <h2 class="text-hero mb-6 text-white font-public-bold">
            Quem Somos
          </h2>
          <p class="text-subtitle mb-8 opacity-90 font-public-normal max-w-2xl mx-auto lg:mx-0">
            Somos uma equipe técnica especializada em manutenção e instalação de máquinas de lavar e secar para lavanderias comerciais. Executamos desde o projeto e infraestrutura até a entrega operando, com foco em disponibilidade, segurança e payback do investimento.
          </p>
          
          <!-- Pontos de Destaque -->
          <div class="mt-8 space-y-4">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-secondary-400/20 rounded-full flex items-center justify-center mt-0.5">
                <svg class="w-3 h-3 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <p class="text-body-default text-white opacity-90">
                <span class="font-semibold text-secondary-400">Projeto completo:</span> Da infraestrutura à operação
              </p>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-secondary-400/20 rounded-full flex items-center justify-center mt-0.5">
                <svg class="w-3 h-3 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <p class="text-body-default text-white opacity-90">
                <span class="font-semibold text-secondary-400">Foco em resultados:</span> Disponibilidade e ROI garantidos
              </p>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-6 h-6 bg-secondary-400/20 rounded-full flex items-center justify-center mt-0.5">
                <svg class="w-3 h-3 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <p class="text-body-default text-white opacity-90">
                <span class="font-semibold text-secondary-400">Especialização:</span> Lavanderias comerciais e industriais
              </p>
            </div>
          </div>
        </div>
        
        <!-- Imagem -->
        <div class="order-2 lg:order-2">
          <div class="relative">
            <!-- Frame decorativo externo -->
            <div class="absolute -inset-4 bg-gradient-to-br from-secondary-500/20 to-primary-950/30 rounded-3xl blur-sm"></div>
            
            <!-- Frame interno -->
            <div class="relative border-2 border-transparent bg-gradient-to-br from-secondary-500/30 to-primary-950/20 rounded-2xl p-1">
              <div class="aspect-[4/3] rounded-xl overflow-hidden relative">
                <!-- Imagem da equipe -->
                 <img 
                   src="/images/sections/about/equipe.webp" 
                   alt="Equipe Matertec - Especialistas em manutenção de lavanderias" 
                   class="w-full h-full object-cover"
                   loading="lazy"
                 />
                <!-- Overlay sutil para contraste -->
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/30 to-transparent"></div>
              </div>
            </div>
            
            <!-- Efeito de brilho nas bordas -->
            <div class="absolute -inset-2 border border-secondary-500/20 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Componente da seção "Quem Somos"
// Apresenta informações sobre a empresa e equipe técnica
</script>

<style scoped>
/* Estilos específicos do componente, se necessário */
</style>