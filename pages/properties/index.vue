<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Browse Properties</h1>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="property in properties" :key="property.id" class="bg-white rounded-xl shadow p-4">
          <img :src="property.images?.[0]" alt="Property" class="rounded-lg h-48 w-full object-cover mb-2" />
          <h2 class="text-xl font-semibold">{{ property.title }}</h2>
          <p class="text-gray-500">{{ property.location }}</p>
          <p class="text-blue-600 font-bold mt-1">${{ property.price }} / night</p>
          <NuxtLink :to="`/properties/${property.id}`" class="text-blue-500 mt-2 inline-block">View Details →</NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { $supabase } = useNuxtApp()
  const properties = ref([])
  
  onMounted(async () => {
    const { data, error } = await $supabase.from('properties').select('*')
    if (error) console.error(error)
    else properties.value = data
  })
  </script>