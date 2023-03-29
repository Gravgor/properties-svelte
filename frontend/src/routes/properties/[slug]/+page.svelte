<script lang="ts">
    import GoBack from '$lib/GoBack.svelte';
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
    export let data;
    let properties = [data.properties];

    const formatter = new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0
                            });
  </script>

   
  

<section class="bg-gray-100 py-10">
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">{properties[0].name}</h2>
        <span class="font-bold text-teal-500">{formatter.format(properties[0].price)}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={properties[0].propertyImage} alt="Property Image" class="w-full rounded-md shadow-md">
        </div>
        <div>
          <h3 class="text-xl font-bold mb-2">Property Details</h3>
          <p class="text-gray-700 text-base mb-4">{properties[0].description}.</p>
          <ul class="list-disc pl-6">
            <li class="mb-2">Number of bedrooms: {properties[0].bedrooms}</li>
            <li class="mb-2">Number of bathrooms: {properties[0].bathrooms}</li>
            <li class="mb-2">Location: {properties[0].address}, {properties[0].state}</li>
            <li class="mb-2">Amenities: Swimming pool, gym, parking</li>
          </ul>
          <div class="mt-8">
            <button class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">Scheldue a meeting</button>
            <a href="/" class="text-teal-500 font-bold text-sm flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.707 4.293a1 1 0 0 0-1.414 0L5.586 9.586a1 1 0 0 0 0 1.414L10.293 15.7a1 1 0 1 0 1.414-1.414L8.414 11H16a1 1 0 1 0 0-2H8.414l3.293-3.293a1 1 0 0 0 0-1.414z"/></svg>Back to Main Page</a>
          </div>
        </div>
      </div>
    </div>
  </section>