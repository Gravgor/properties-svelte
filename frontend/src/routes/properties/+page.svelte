<script lang="ts">
    import Navbar from "$lib/Navbar.svelte"
     /** @type {import('./$types').PageData} */

     type PageData = {
    props: {
        properties: {
            title: string;
            description: string;
            propertyImage: string;
            link: string;
        }[];
    };
};

const formatter = new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            });
    export let data;
</script>

<Navbar />
<section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Browse Properties
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {#each data.properties as property}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                {#if property.featured === true}
                <div class="relative">
                    <div class="absolute inset-0 bg-yellow-200 opacity-75 rounded-lg"></div>
                    <div class="absolute top-0 right-0 mt-2 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                        </svg>
                      </div>
                </div>
                {/if}
                <img src={property.propertyImage} alt="Property Image" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h3 class="text-lg font-bold text-gray-800 mb-2">{property.name}</h3>
                  <p class="text-gray-600 mb-2">{property.address}, {property.state}</p>
                  <p class="text-gray-600 mb-2">{formatter.format(property.price)}</p>
                  <a href={`/properties/${property.id}`} class="block bg-gray-800 text-white font-bold text-center py-2 px-4 rounded hover:bg-gray-700">View Property</a>
                </div>
              </div>
            {/each}
        </div>
    </div>
</section>