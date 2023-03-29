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

  <style>
   
   .property {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 2rem;
    margin: 160px auto;
   }
   .property_container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
   }
    .property_info {
     display: flex;
     flex-direction: row;
     width: auto;
    }

    .property_info h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #333;
    }

    .property_info p {
        width: 600px;
        font-size: 1.2rem;
        font-weight: 400;
        color: #333;
    }

    .property_info a {
        font-size: 1.2rem;
        font-weight: 400;
        color: #333;
        text-decoration: none;
        border: 1px solid #333;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;
    }

    .property_info a:hover {
        background-color: #333;
        color: #fff;
        cursor: pointer;
    }

    .propety_img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 55px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    .property_left{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
  </style>


    <div class="property">
        <div class="property_container">
            <GoBack />
            <img class="propety_img" src={properties[0].propertyImage} alt="property image" />
            <div class="property_info">
                <div class="property_left">
                    <h1>{properties[0].name}</h1>
                    <p>{properties[0].description}</p>
                    <a href={properties[0].link}>Scheldude a showing</a>
                </div>
                <div class="property_right">
                    <h1>
                        {
                            formatter.format(properties[0].price)
                        }
                    </h1>
                    <p>{properties[0].address}, {properties[0].city}, {properties[0].state}</p>
                    </div>
            </div>
        </div>
    </div>