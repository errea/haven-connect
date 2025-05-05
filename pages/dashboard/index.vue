<template>
    <div class="max-w-6xl mx-auto p-6">
        <h2 class="text-2xl font-bold mb-6">Your Properties</h2>

        <div v-if="loading" class="text-center text-gray-500">Loading properties...</div>

        <div v-else-if="properties.length === 0" class="text-center text-gray-500">No properties found.</div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="property in properties" :key="property.id" class="bg-white p-4 rounded-xl shadow relative">
                <img :src="property.images?.[0]" alt="Image" class="w-full h-40 object-cover rounded-lg mb-3" />
                <h3 class="text-lg font-semibold">{{ property.title }}</h3>
                <p class="text-gray-600 text-sm">{{ property.location }}</p>
                <p class="text-gray-800 font-medium mt-2">${{ property.price }} / night</p>

                <div class="flex justify-end mt-4 space-x-2">
                    <button @click="editProperty(property)" class="text-blue-600 hover:underline text-sm">Edit</button>
                    <button @click="deleteProperty(property.id)"
                        class="text-red-600 hover:underline text-sm">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { $supabase } = useNuxtApp()
const user = useSupabaseUser()
const properties = ref([])
const loading = ref(true)

onMounted(async () => {
    if (user.value) {
        const { data, error } = await $supabase
            .from('properties')
            .select('*')
            .eq('landlord_id', user.value.id)

        if (!error) {
            properties.value = data
        }
        loading.value = false
    }
})

const router = useRouter()

const editProperty = (property) => {
  router.push({ path: '/dashboard/edit-property', query: { id: property.id } })
}

const deleteProperty = async (id) => {
  if (confirm('Are you sure you want to delete this property?')) {
    const { error } = await $supabase.from('properties').delete().eq('id', id)
    if (!error) {
      properties.value = properties.value.filter(p => p.id !== id)
    }
  }
}
</script>