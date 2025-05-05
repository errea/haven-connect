<script setup>
const properties = [
  {
    id: 1,
    title: 'Modern Apartment',
    price: 150,
    location: 'New York, NY',
    rating: 4.8,
    image: '/images/living.jpg'
  },
  {
    id: 2,
    title: 'Cozy House',
    price: 200,
    location: 'Los Angeles, CA',
    rating: 4.7,
    image: '/images/space.jpg'
  },
  {
    id: 3,
    title: 'Beachfront Villa',
    price: 350,
    location: 'Miami, FL',
    rating: 4.9,
    image: '/images/spa.jpg'
  }
]
</script>

<template>
  <section class="bg-[#fdf6ec] min-h-screen pb-20">
    <!-- Header -->
    <div class="px-6 md:px-20 py-10">
      <h1 class="text-4xl md:text-5xl font-serif text-green-950 font-semibold text-center mb-8">Available Properties</h1>

      <!-- Filters -->
      <div class="flex flex-wrap gap-4 justify-center mb-10">
        <input type="text" placeholder="Location" class="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none w-40" />
        <input type="date" placeholder="Check in" class="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none w-40" />
        <input type="date" placeholder="Check out" class="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none w-40" />
        <input type="number" placeholder="Guests" class="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none w-40" />
        <button class="px-5 py-3 rounded-md bg-[#c59d5f] text-white font-medium hover:bg-[#b4894c] transition">Filters</button>
      </div>

      <!-- Properties List -->
      <div class="flex flex-col gap-10">
        <div
          v-for="property in properties"
          :key="property.id"
          class="bg-white rounded-xl overflow-hidden shadow-md flex flex-col md:flex-row items-center md:items-start"
        >
          <img :src="property.image" alt="Property" class="w-full md:w-2/5 h-64 object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl" />
          <div class="p-6 flex-1">
            <h3 class="text-2xl font-serif text-green-950 mb-2">{{ property.title }}</h3>
            <p class="text-lg font-medium text-gray-800 mb-1">${{ property.price }} <span class="text-sm font-normal text-gray-500">/ night</span></p>
            <p class="text-gray-600 mb-2">{{ property.location }}</p>
            <div class="flex items-center gap-1 text-yellow-600">
              <span class="font-semibold text-gray-800">{{ property.rating }}</span>
              <template v-for="i in 5">
                <svg
                  v-if="i <= Math.floor(property.rating)"
                  key="i"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                </svg>
                <svg
                  v-else-if="i - property.rating < 1"
                  key="i-half"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.171L12 18.896V.587z"
                  />
                </svg>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>