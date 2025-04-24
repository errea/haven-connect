<template>
    <div class="container mx-auto p-6">
      <!-- Header Section -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold mb-6">Available Properties</h1>
        
        <!-- Filters Row -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <input type="text" placeholder="Location" class="p-2 border rounded-lg">
          <input type="date" placeholder="Check in" class="p-2 border rounded-lg">
          <input type="date" placeholder="Check out" class="p-2 border rounded-lg">
          <input type="number" placeholder="Guests" class="p-2 border rounded-lg">
          <button class="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Filters
          </button>
        </div>
      </div>
  
      <!-- Property Listings -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Property Card 1 -->
        <div class="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img 
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Modern Apartment"
            class="w-full h-48 object-cover"
          >
          <div class="p-4">
            <div class="flex justify-between items-start mb-2">
              <h2 class="text-xl font-semibold">Modern Apartment</h2>
              <span class="text-lg font-bold text-blue-600">$150 / night</span>
            </div>
            <p class="text-gray-600 mb-2">New York, NY</p>
            <div class="flex items-center">
              <span class="text-yellow-500">★★★★☆</span>
              <span class="ml-2 text-gray-600">4.8</span>
            </div>
          </div>
        </div>
  
        <!-- Property Card 2 -->
        <div class="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img 
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Cozy House"
            class="w-full h-48 object-cover"
          >
          <div class="p-4">
            <div class="flex justify-between items-start mb-2">
              <h2 class="text-xl font-semibold">Cozy House</h2>
              <span class="text-lg font-bold text-blue-600">$200 / night</span>
            </div>
            <p class="text-gray-600 mb-2">Los Angeles, CA</p>
            <div class="flex items-center">
              <span class="text-yellow-500">★★★★☆</span>
              <span class="ml-2 text-gray-600">4.7</span>
            </div>
          </div>
        </div>
  
        <!-- Property Card 3 -->
        <div class="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img 
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Beachfront Villa"
            class="w-full h-48 object-cover"
          >
          <div class="p-4">
            <div class="flex justify-between items-start mb-2">
              <h2 class="text-xl font-semibold">Beachfront Villa</h2>
              <span class="text-lg font-bold text-blue-600">$350 / night</span>
            </div>
            <p class="text-gray-600 mb-2">Miami, FL</p>
            <div class="flex items-center">
              <span class="text-yellow-500">★★★★☆</span>
              <span class="ml-2 text-gray-600">4.9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // You can add reactive data or API calls here if needed
  </script>
  
  <style>
  /* Add custom styles if needed */
  </style>