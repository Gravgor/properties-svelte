import { error } from "@sveltejs/kit";
/** @type {import('./$types').PageLoad} */


interface PropertiesLoad {
    slug: number;
}

async function getProperties(id: number) {
    const res = await fetch(`http://localhost:5000/api/v1/property/${id}`);
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
    const properties = await getProperties(params.slug);
    if (properties) {
        return { properties };
    } else {
        return error(404, 'Not found');
    }
}