<template>
    <div class="bg-[#fdfdfd] min-h-screen px-6 md:px-20 py-10 text-[#121212]">
      <!-- Back Button -->
      <div class="mb-6">
        <NuxtLink to="/properties" class="text-xl font-bold">&larr;</NuxtLink>
      </div>
  
      <!-- Title & Gallery -->
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="w-full lg:w-2/3">
          <h1 class="text-3xl font-bold">{{ property.title }}</h1>
          <p class="text-gray-600 mt-1">{{ property.location }}</p>
  
          <!-- Rating -->
          <div class="flex items-center gap-2 text-sm text-gray-700 mt-3">
            <div class="flex text-yellow-500">
              <span v-for="i in 5" :key="i">
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                </svg>
              </span>
            </div>
            <span class="font-semibold">{{ property.rating }}</span>
            <span class="text-gray-500">({{ property.reviews }} reviews)</span>
          </div>
  
          <!-- Main Image -->
          <img
            :src="property.images[0]"
            alt="Main"
            class="mt-6 w-full h-80 object-cover rounded-xl"
          />
  
          <!-- Gallery -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <img
              v-for="(img, i) in property.images"
              :key="i"
              :src="img"
              class="w-full h-24 object-cover rounded-lg"
            />
          </div>
  
          <!-- Description -->
          <div class="mt-8">
            <h2 class="text-lg font-semibold mb-2">Description</h2>
            <p class="text-gray-700 leading-relaxed">{{ property.descriptionShort }}</p>
          </div>
  
          <!-- Amenities -->
          <div class="mt-8">
            <h2 class="text-lg font-semibold mb-2">Amenities</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li v-for="(amenity, i) in property.amenities" :key="i">{{ amenity }}</li>
            </ul>
          </div>
  
          <!-- More Description -->
          <div class="mt-8">
            <h2 class="text-lg font-semibold mb-2">Description</h2>
            <p class="text-gray-700">
              This apartment is located in a central area in Los Angeles. Spacious living area, stylish interior, fully equipped kitchen, and proximity to popular attractions make it ideal for travelers.
            </p>
          </div>
        </div>
  
        <!-- Sidebar -->
        <div class="w-full lg:w-1/3 space-y-6">
          <!-- Host -->
          <div class="p-6 border border-gray-200 rounded-xl">
            <h2 class="text-lg font-semibold mb-4">Hosted by</h2>
            <div class="flex items-center gap-4">
              <img :src="property.host.image" class="w-14 h-14 rounded-full object-cover" />
              <div>
                <p class="font-semibold">{{ property.host.name }}</p>
                <p class="text-sm text-gray-600">Superhost • {{ property.host.rating }} ⭐ ({{ property.host.reviews }} reviews)</p>
              </div>
            </div>
            <button class="mt-4 w-full py-2 border border-black text-sm font-medium rounded-md hover:bg-gray-100">
              Contact Host
            </button>
          </div>
  
          <!-- Booking -->
          <div class="p-6 border border-gray-200 rounded-xl">
            <p class="text-xl font-semibold">${{ property.price }} <span class="text-sm text-gray-500">/ night</span></p>
            <div class="mt-4 space-y-3">
              <input type="date" class="w-full px-3 py-2 border rounded-md" placeholder="Check in" />
              <input type="date" class="w-full px-3 py-2 border rounded-md" placeholder="Check out" />
              <select class="w-full px-3 py-2 border rounded-md">
                <option>1 guest</option>
                <option>2 guests</option>
                <option>3 guests</option>
              </select>
            </div>
            <button class="mt-4 w-full py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600">
              Reserve
            </button>
            <p class="text-sm text-gray-500 text-center mt-2">No charge until booking</p>
          </div>
        </div>
      </div>
    </div>
</template>



<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

// Static example, later fetch from Supabase
const property = {
  title: 'Modern Apartment in City Center',
  location: 'Los Angeles, California',
  rating: 4.9,
  reviews: 80,
  price: 130,
  images: [
    'https://source.unsplash.com/600x400/?apartment',
    'https://source.unsplash.com/600x400/?bedroom',
    'https://source.unsplash.com/600x400/?interior',
    'https://source.unsplash.com/600x400/?livingroom',
  ],
  descriptionShort:
    "This apartment is located in a central area with modern design, spacious living areas, a fully equipped kitchen, and comfortable sleeping arrangements.",
  amenities: ['Wi-Fi', 'Air conditioning', 'Kitchen', 'Washer'],
  host: {
    name: 'Sarah',
    rating: 5.0,
    reviews: 128,
    image: 'https://source.unsplash.com/100x100/?woman,avatar',
  },
}
</script>
