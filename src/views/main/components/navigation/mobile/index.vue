<template>
  <div>我是移动端下的Navigation</div>
</template>

<script setup>
import { getCategory } from '@/api/category'

const getCategoryData = async () => {
  const { data } = await getCategory()
  console.log(data.data)
}

getCategoryData()
</script>

<style lang="scss" scoped></style>
