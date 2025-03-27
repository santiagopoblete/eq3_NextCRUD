'use server'

export async function getFishData(fishName: string) {
    const res = await fetch('https://api.api-ninjas.com/v1/animals?name=' + fishName, {
        method: 'GET',
        headers: {
            'X-Api-Key': process.env.API_KEY ?? '',
        }
    });
    
    const data = await res.json();

    if (!res.ok) {
        return { message: 'Failed to create post' }
    } else {
        return data;
    }
}