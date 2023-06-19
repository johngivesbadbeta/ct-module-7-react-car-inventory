// creating rules to communicate with backend database

const token = '9818be80570c8f3243d267f820d00d8d92bea8eb4f65ee16'

export const server_calls = {
    get: async () => {
        const response = await fetch('https://car-inventory-cvno.onrender.com/api/car',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch('https://car-inventory-cvno.onrender.com/api/car',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://car-inventory-cvno.onrender.com/api/car/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)

        });

        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://car-inventory-cvno.onrender.com/api/car/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },

        });

        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}