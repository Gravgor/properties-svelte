<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>


    <div class="properties">
        <div class="container">
        <div class="row">
            {#each data.props.properties as property}
            <div class="col-md-6">
                <div class="property">
                <div class="property-image">
                    <img src={property.image} alt={property.title} />
                </div>
                <div class="property-content">
                    <h3>{property.title}</h3>
                    <p>{property.description}</p>
                    <a href={property.link} class="btn-primary">View Property</a>
                </div>
                </div>
            </div>
            {/each}
        </div>
        </div>
    </div>