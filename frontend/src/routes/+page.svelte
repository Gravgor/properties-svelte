

<script lang="ts">
    import Navbar from "$lib/Navbar.svelte"
    import Hero from "$lib/Hero.svelte"
    import Stats from "$lib/Stats.svelte";

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

.properties {
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 30px;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.col-md-6 {
    flex-basis: 50%;
    padding: 0 20px;
    box-sizing: border-box;
}

.property {
    margin-bottom: 30px;
}

.property-image {
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
}

.property-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.property-content {
    margin-top: 20px;
}

.btn-primary {
    background-color: #C9A661;
    color: #FFFFFF;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: scale(1.05);
    background-color: #B08F4F;
}


</style>
<Navbar />
<section>
    <Hero />
     <Stats />
     <section class="properties">
        <div class="container">
            <div class="row">
                {#each data.properties as property}
                <div class="col-md-6">
                    <div class="property">
                        <div class="property-image">
                            <img src={property.propertyImage} alt="">
                        </div>
                        <div class="property-content">
                            <h2>{property.name}</h2>
                            <p>{property.description}</p>
                            <a href={`/properties/${property.id}`} class="btn-primary">View Property</a>
                        </div>
                    </div>
                </div>
                {/each}
                </div>
            </div>
    </section>
</section>
