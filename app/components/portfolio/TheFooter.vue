<template>
  <footer class="relative py-8 px-6 border-t border-cyan-500/20">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="text-gray-500 text-sm">
          <span>© {{ currentYear }} {{ developerName }}. </span>
        </div>
        <div class="flex gap-6 text-sm text-gray-500 text-center">
          <p>Build with Vue.js & Tailwind CSS 🤝 contribute with AI</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  developerName: string;
}

defineProps<Props>();

const currentYear = computed(() => new Date().getFullYear());
</script>
