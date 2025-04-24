<template>
    <div class="p-6 max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold mb-4">Explore Properties</h2>
  
      <!-- Filters -->
      <div class="flex flex-wrap gap-4 mb-6">
        <input v-model="filters.location" type="text" placeholder="Location" class="p-2 border rounded-md" />
        <input v-model="filters.maxPrice" type="number" placeholder="Max Price" class="p-2 border rounded-md" />
        <button @click="applyFilters" class="bg-blue-600 text-white px-4 py-2 rounded-md">Search</button>
      </div>
  
      <!-- Results -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="bg-white rounded-xl shadow p-4"
        >
          <img :src="property.images?.[0]" class="w-full h-48 object-cover rounded-md mb-3" />
          <h3 class="text-lg font-semibold">{{ property.title }}</h3>
          <p class="text-sm text-gray-600">{{ property.location }}</p>
          <p class="text-sm text-gray-800 font-medium mt-1">${{ property.price }} / night</p>
          <NuxtLink :to="`/property/${property.id}`" class="text-blue-600 text-sm hover:underline mt-2 inline-block">View Details</NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { $supabase } = useNuxtApp()
  const properties = ref([])
  const filteredProperties = ref([])
  const filters = reactive({
    location: '',
    maxPrice: ''
  })
  
  onMounted(async () => {
    const { data } = await $supabase.from('properties').select('*')
    properties.value = data || []
    filteredProperties.value = properties.value
  })
  
  const applyFilters = () => {
    filteredProperties.value = properties.value.filter((p) => {
      const matchesLocation = filters.location ? p.location?.toLowerCase().includes(filters.location.toLowerCase()) : true
      const matchesPrice = filters.maxPrice ? p.price <= filters.maxPrice : true
      return matchesLocation && matchesPrice
    })
  }
  </script>