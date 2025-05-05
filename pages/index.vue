<template>
    <div class="min-h-screen bg-[#f5f2eb]">
        <!-- Hero Section -->
        <div class="relative">
            <img src="/images/hero-mockup.jpg" alt="Hero" class="w-full h-[60rem] object-cover" />
            <div class="absolute inset-0 bg-white/70 flex flex-col items-center justify-center text-center p-6">
                <h1 class="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">
                    Your Gateway to Seamless Stays
                </h1>
                <!-- Search Bar -->
                <div class="flex flex-wrap gap-3 items-center bg-white p-4 rounded-2xl shadow-md">
                    <input type="text" placeholder="Where" class="border p-2 rounded-md" />
                    <input type="date" class="border p-2 rounded-md" />
                    <input type="date" class="border p-2 rounded-md" />
                    <button class="bg-yellow-600 text-white px-4 py-2 rounded-md">Search</button>
                </div>
            </div>
        </div>

        <!-- Features Section -->
        <div class="bg-[#fefaf3] py-12 px-6 text-center grid grid-cols-1 md:grid-cols-4 gap-10">
            <div class="flex flex-col items-center gap-3">
                <CalendarDays class="w-10 h-10 text-yellow-700" />
                <div class="text-xl font-semibold text-gray-700">Dynamic Booking</div>
                <p class="text-sm text-gray-500">Real-time availability and booking updates</p>
            </div>
            <div class="flex flex-col items-center gap-3">
                <ShieldCheck class="w-10 h-10 text-yellow-700" />
                <div class="text-xl font-semibold text-gray-700">Verified Hosts</div>
                <p class="text-sm text-gray-500">Trusted and background-checked landlords</p>
            </div>
            <div class="flex flex-col items-center gap-3">
                <ShieldCheck class="w-10 h-10 text-yellow-700" />
                <div class="text-xl font-semibold text-gray-700">Seemless Connect</div>
                <p class="text-sm text-gray-500">Trusted and background-checked landlords</p>
            </div>
            <div class="flex flex-col items-center gap-3">
                <MessageCircle class="w-10 h-10 text-yellow-700" />
                <div class="text-xl font-semibold text-gray-700">Instant Communication</div>
                <p class="text-sm text-gray-500">Chat directly with your host anytime</p>
            </div>
        </div>

        <!-- Every Stay has a story section -->

        <!-- Call to Action -->
        <div class="py-16 px-6 text-center">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Become a Host</h2>
            <p class="text-sm text-gray-600 mb-6">List your property and start earning by connecting with vetted guests.
            </p>
            <button class="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700">
                Get Started
            </button>
        </div>

        <section class="bg-[#fdfaf3] py-20 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-serif text-gray-800">HavenConnect stories</h2>
                    <p class="mt-2 text-gray-600 max-w-xl mx-auto">From the latest news to travel inspiration, learn
                        more about the world of Havens.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                    <div v-for="(story, index) in stories" :key="index">
                        <img :src="story.image" alt="" class="w-full h-48 object-cover rounded-md mb-4" />
                        <p class="text-gray-800 font-medium leading-snug">{{ story.title }}</p>
                        <a :href="story.link" class="text-green-800 underline mt-2 inline-block">Continue reading</a>
                    </div>
                </div>

                <div class="text-center">
                    <a href="#"
                        class="bg-green-900 text-white py-3 px-6 rounded-full text-sm font-medium hover:bg-green-800 transition">Read
                        the blog</a>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-10 px-6">
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 class="font-semibold mb-3">HavenConnect Co.</h4>
                    <p class="text-sm text-gray-400">Connecting guests to verified, comfortable short-term rentals with
                        ease.</p>
                </div>
                <div>
                    <h4 class="font-semibold mb-3">Explore</h4>
                    <ul class="text-sm text-gray-400 space-y-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Listings</a></li>
                        <li><a href="#">Hosts</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-3">Company</h4>
                    <ul class="text-sm text-gray-400 space-y-2">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-3">Follow Us</h4>
                    <div class="flex space-x-4">
                        <a href="#"><svg class="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="..." />
                            </svg></a>
                        <a href="#"><svg class="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="..." />
                            </svg></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>


<script setup lang="ts">
const stories = [
    {
        title: "Craving Barcelona: meet Pedro at INSOLENT",
        image: "/images/living.jpg",
        link: "#"
    },
    {
        title: "Five scene-stealing day trips in the French Riviera",
        image: "/images/living.jpg",
        link: "#"
    },
    {
        title: "Passport to Pride: Our top picks for the season",
        image: "/images/living.jpg",
        link: "#"
    },
    {
        title: "The Sonder secret to 24 hours in Florence",
        image: "/images/living.jpg",
        link: "#"
    }
]

</script>