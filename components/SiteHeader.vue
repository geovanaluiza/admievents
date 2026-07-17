<script setup lang="ts">
import type { EventData } from '~/composables/useEvents'

defineProps<{ event?: EventData | null }>()
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="brand" aria-label="Northwest University Admissions home">
        <img class="brand-mark" src="/nu-shield.png" alt="" />
        <div class="brand-name">
          Northwest University
          <span>Admissions</span>
        </div>
      </a>

      <nav class="header-nav" aria-label="Main navigation">
        <a href="/#missions">Upcoming events</a>
        <a href="https://www.northwestu.edu/financial-aid" target="_blank" rel="noopener">Financial aid</a>
        <a href="https://www.northwestu.edu/admissions" target="_blank" rel="noopener">Admissions</a>
        <a href="mailto:visit@northwestu.edu">Contact</a>
      </nav>

      <div class="header-actions">
        <a href="mailto:visit@northwestu.edu" class="btn btn-coral btn-sm">
          Register
        </a>
      </div>
    </div>
  </header>
</template>
