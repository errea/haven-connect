<template>
    <div class="bg-white min-h-screen py-10 px-6 max-w-6xl mx-auto">
      <!-- Property Image -->
      <div class="rounded-xl overflow-hidden mb-6">
        <img :src="property.image" class="w-full h-[60rem] object-cover" />
      </div>
  
      <!-- Title & Location -->
      <h1 class="text-2xl font-bold text-gray-800 mb-1">{{ property.title }}</h1>
      <p class="text-gray-500 mb-4">{{ property.location }}</p>
  
      <!-- Price -->
      <div class="text-xl text-blue-600 font-semibold mb-6">${{ property.price }}/night</div>
  
      <!-- Property Description -->
      <div class="mb-8">
        <h2 class="text-lg font-bold mb-2">About this property</h2>
        <p class="text-gray-600">{{ property.description }}</p>
      </div>
  
      <!-- Amenities -->
      <div class="mb-8">
        <h2 class="text-lg font-bold mb-2">Amenities</h2>
        <ul class="grid grid-cols-2 gap-2 text-gray-700">
          <li v-for="(amenity, index) in property.amenities" :key="index">✔️ {{ amenity }}</li>
        </ul>
      </div>
  
      <!-- Booking Box -->
      <div class="border p-6 rounded-xl shadow-md bg-gray-50">
        <h2 class="font-bold text-lg mb-3">Ready to book?</h2>
        <button class="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const id = route.params.id
  
  // Mock data
  const property = {
    id,
    title: 'Modern Villa with Pool',
    location: 'Abuja, Nigeria',
    price: 120,
    image: '/images/space.jpg',
    description:
      'Enjoy your stay at this modern villa equipped with a pool, garden, and a full kitchen. Perfect for a weekend getaway or extended vacation.',
    amenities: ['WiFi', 'Kitchen', 'Pool', 'Parking', 'Air Conditioning'],
  }
  </script>