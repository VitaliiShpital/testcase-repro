<template>
    <VModal :on-close="closeModal">
        <template #content>
            <h1>Test</h1>
        </template>
    </VModal>
</template>

<script setup lang="ts">
import { defineExpose } from 'vue';

import VModal from './VModal.vue';

function closeModal(): void {}
defineExpose({ closeModal });
</script>
