

<script lang="ts">
    import Navbar from "$lib/Navbar.svelte"
    import Hero from "$lib/Hero.svelte"
    import Stats from "$lib/Stats.svelte";
    import Trusted from "$lib/Trusted.svelte";
    import Footer from "$lib/Footer.svelte";

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
    const properties = data.properties.length;
    if (properties > 3) {
        data.properties = data.properties.slice(0, 3);
    }
</script>




<Navbar />
<section>
    <Hero />
     <Stats />
     <section class="bg-gray-100 py-10">
        <div class="max-w-5xl mx-auto px-6">
            <h2 class="text-3xl font-bold mb-8">Top Properties</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each data.properties as property}
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={property.propertyImage} alt="property image" class="h-56 w-full object-cover" />
                    <div class="p-4">
                        <h3 class="text-xl font-bold mb-2">
                            {property.name}
                        </h3>
                        <p class="text-gray-700 text-base">
                            {property.description}
                        </p>
                        <div class="mt-4 flex justify-between items-center">
                            <span class="font-bold text-teal-500">
                                {formatter.format(property.price)}
                            </span>
                            <a href={`/properties/${property.id}`} class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">
                                View Property
                            </a>
                        </div>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </section>
</section>
<Trusted />
<Footer />
