import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageLoad} */


interface PropertiesLoad {
    id: number;
    name: string;
    description: string;
    image: string;
}

async function getAllProperties() {
    const res = await fetch(`http://localhost:5000/api/v1/properties/get`);
    if (res.ok) {
        const properties = await res.json();
        return properties;
    }
    if (res.status === 404) {
        return error(404, 'Not found');
    }
    return error(500, res.statusText);
}


export async function load({params}: {params: PropertiesLoad}) {
    const properties = await getAllProperties();
    if (properties) {
        return { properties };
        };
    }
