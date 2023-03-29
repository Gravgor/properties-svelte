<script lang="ts">
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
  </script>

  <style>
   
  </style>


    <div class="properties">
        <div class="container">
        <div class="row">
            <h1 class="col-md-12">Properties</h1>
            {#each data.properties as property}
            <div class="col-md-6">
                <div class="property">
                    <div class="property-image">
                        <img src={property.propertyImage} alt={property.title} />
                    </div>
                    <h2>{property.title}</h2>
                    <p>{property.description}</p>
                    <a href={property.link}>View Property</a>
                </div>
                </div>
        {/each}
        </div>  
        </div> 
    </div>