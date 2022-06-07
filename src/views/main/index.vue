<template>
  <div>
    <navigation-vue v-if="isMobileTerminal" :data="categories" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import navigationVue from './components/navigation/index.vue'
import { getCategory } from '@/api/category'
import { ALL_CATEGORY_ITEM } from '@/constants'

const categories = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categories.value = categorys
  categories.value.unshift(ALL_CATEGORY_ITEM)
}

getCategoryData()
</script>

<style lang="scss" scoped></style>
