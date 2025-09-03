<template>
  <section class="section-hero-soft bg-slate-900/10 py-20 lg:py-32 relative overflow-hidden">
    <!-- Background decorativo -->
    <div class="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-primary-950/10"></div>
    
    <div class="container mx-auto px-6 lg:px-8 relative z-10">
      <div class="max-w-7xl mx-auto">
        
        <!-- Cabeçalho da seção -->
        <div class="text-center mb-16 lg:mb-20">
          <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Manutenção especializada
          </h2>
          <p class="text-lg lg:text-xl text-white text-opacity-80 font-normal max-w-4xl mx-auto leading-relaxed">
            Diagnóstico rápido, troca de componentes, calibração, alinhamento, balanceamento, teste de vazão e temperatura. Planos preventivos para reduzir paradas e custos.
          </p>
        </div>

        <!-- Grid principal -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- Coluna esquerda - Informações técnicas -->
          <div class="space-y-8">
            
            <!-- Bullets técnicos -->
            <div class="maintenance-card">
              <div class="flex items-center mb-6">
                <div class="maintenance-icon">
                  <svg class="w-6 h-6 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-white">
                  Nossos Diferenciais Técnicos
                </h3>
              </div>
              
              <div class="space-y-4">
                <div class="bullet-item">
                  <div class="bullet-icon">
                    <svg class="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-white text-opacity-90 font-normal">
                    Check-list por marca/modelo
                  </span>
                </div>
                
                <div class="bullet-item">
                  <div class="bullet-icon">
                    <svg class="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-white text-opacity-90 font-normal">
                    Reposição de peças originais
                  </span>
                </div>
                
                <div class="bullet-item">
                  <div class="bullet-icon">
                    <svg class="w-4 h-4 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-white text-opacity-90 font-normal">
                    Relatório técnico pós-serviço
                  </span>
                </div>
              </div>
            </div>

            <!-- Tipos de manutenção -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <!-- Manutenção Preventiva -->
              <div class="maintenance-type-card">
                <div class="maintenance-type-icon preventive">
                  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h4 class="text-sm font-semibold text-white mb-2">
                  Preventiva
                </h4>
                <p class="text-xs text-white text-opacity-70 leading-relaxed">
                  Planos programados para evitar falhas
                </p>
              </div>

              <!-- Manutenção Corretiva -->
              <div class="maintenance-type-card">
                <div class="maintenance-type-icon corrective">
                  <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                </div>
                <h4 class="text-sm font-semibold text-white mb-2">
                  Corretiva
                </h4>
                <p class="text-xs text-white text-opacity-70 leading-relaxed">
                  Reparo rápido de equipamentos com defeito
                </p>
              </div>

            </div>

          </div>

          <!-- Coluna direita - Serviços técnicos -->
          <div class="space-y-6">
            
            <!-- Diagnóstico -->
            <div class="service-detail-card">
              <div class="service-detail-header">
                <div class="service-detail-icon">
                  <svg class="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">
                  Diagnóstico Rápido
                </h4>
              </div>
              <p class="text-white text-opacity-70 text-sm leading-relaxed">
                Identificação precisa de falhas com equipamentos de última geração
              </p>
            </div>

            <!-- Calibração -->
            <div class="service-detail-card">
              <div class="service-detail-header">
                <div class="service-detail-icon">
                  <svg class="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">
                  Calibração e Alinhamento
                </h4>
              </div>
              <p class="text-white text-opacity-70 text-sm leading-relaxed">
                Ajustes precisos para máxima eficiência operacional
              </p>
            </div>

            <!-- Balanceamento -->
            <div class="service-detail-card">
              <div class="service-detail-header">
                <div class="service-detail-icon">
                  <svg class="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">
                  Balanceamento
                </h4>
              </div>
              <p class="text-white text-opacity-70 text-sm leading-relaxed">
                Eliminação de vibrações e ruídos excessivos
              </p>
            </div>

            <!-- Testes -->
            <div class="service-detail-card">
              <div class="service-detail-header">
                <div class="service-detail-icon">
                  <svg class="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-white">
                  Teste de Vazão e Temperatura
                </h4>
              </div>
              <p class="text-white text-opacity-70 text-sm leading-relaxed">
                Verificação completa dos parâmetros operacionais
              </p>
            </div>

          </div>

        </div>

        <!-- Call to action -->
        <div class="text-center mt-16 lg:mt-20">
          <p class="text-lg text-white text-opacity-80 font-normal mb-8">
            Precisa de manutenção especializada? Agende uma visita técnica!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary">
              Agendar Manutenção
            </button>
            <button class="btn-secondary">
              Solicitar Orçamento
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Componente MaintenanceSection
// Exibe informações detalhadas sobre os serviços de manutenção especializada
</script>

<style scoped>
.maintenance-card {
  @apply bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20;
}

.maintenance-icon {
  @apply w-10 h-10 bg-secondary-400 bg-opacity-20 rounded-lg flex items-center justify-center mr-4;
}

.bullet-item {
  @apply flex items-center space-x-3;
}

.bullet-icon {
  @apply w-5 h-5 bg-secondary-400 bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0;
}

.maintenance-type-card {
  @apply bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-10 text-center;
}

.maintenance-type-icon {
  @apply w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3;
}

.maintenance-type-icon.preventive {
  @apply bg-green-400 bg-opacity-20;
}

.maintenance-type-icon.corrective {
  @apply bg-red-400 bg-opacity-20;
}

.service-detail-card {
  @apply bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-5 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300;
}

.service-detail-header {
  @apply flex items-center space-x-3 mb-3;
}

.service-detail-icon {
  @apply w-8 h-8 bg-secondary-400 bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0;
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
@media (max-width: 1024px) {
  .maintenance-card {
    @apply p-5;
  }
  
  .service-detail-card {
    @apply p-4;
  }
}

@media (max-width: 768px) {
  .maintenance-card {
    @apply p-4;
  }
  
  .maintenance-icon {
    @apply w-8 h-8 mr-3;
  }
  
  .service-detail-card {
    @apply p-3;
  }
  
  .service-detail-icon {
    @apply w-6 h-6;
  }
}
</style>