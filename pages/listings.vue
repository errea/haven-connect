<template>
    <div class="bg-white min-h-screen px-6 py-10">
      <!-- Page Title -->
      <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Browse Properties</h1>
  
      <!-- Filter/Search Bar -->
      <div class="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row gap-4">
        <input
          v-model="search"
          type="text"
          placeholder="Search location..."
          class="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm"
        />
        <select
          v-model="sort"
          class="px-4 py-3 rounded-xl border border-gray-300 shadow-sm w-full sm:w-48"
        >
          <option value="">Sort by</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
  
      <!-- Property Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <img :src="property.image" alt="property" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h2 class="text-lg font-semibold mb-1">{{ property.title }}</h2>
            <p class="text-sm text-gray-500 mb-2">{{ property.location }}</p>
            <div class="flex justify-between items-center">
              <span class="text-blue-600 font-bold">${{ property.price }}/night</span>
              <NuxtLink
                :to="`/properties/${property.id}`"
                class="text-sm text-blue-500 hover:underline"
              >
                View
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const search = ref('');
  const sort = ref('');
  
  const properties = ref([
    {
      id: 1,
      title: 'Cozy Studio Apartment',
      location: 'Lagos, Nigeria',
      price: 45,
      image: '/images/living.jpg',
    },
    {
      id: 2,
      title: 'Modern Villa with Pool',
      location: 'Abuja, Nigeria',
      price: 120,
      image: '/images/space.jpg',
    },
    {
      id: 3,
      title: 'Beachfront Bungalow',
      location: 'Lekki, Nigeria',
      price: 80,
      image: '/images/spa.jpg',
    },
    {
      id: 2,
      title: 'Modern Villa with Pool',
      location: 'Abuja, Nigeria',
      price: 120,
      image: '/images/space.jpg',
    },
    {
      id: 3,
      title: 'Beachfront Bungalow',
      location: 'Lekki, Nigeria',
      price: 80,
      image: '/images/spa.jpg',
    },
    {
      id: 1,
      title: 'Cozy Studio Apartment',
      location: 'Lagos, Nigeria',
      price: 45,
      image: '/images/living.jpg',
    },
  ]);
  
  const filteredProperties = computed(() => {
    let filtered = properties.value;
  
    if (search.value) {
      filtered = filtered.filter(p =>
        p.location.toLowerCase().includes(search.value.toLowerCase())
      );
    }
  
    if (sort.value === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort.value === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    }
  
    return filtered;
  });
  </script>