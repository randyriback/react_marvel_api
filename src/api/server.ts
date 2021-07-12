let token = `144f2e0a7f5bbdd1fc28d515e718e96b62c7e0a3c556e266`

export const server_calls = {
    get: async () => {
        const response = await fetch('https://randys-marvel.herokuapp.com/api/heroes',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch('https://randys-marvel.herokuapp.com/api/heroes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch')
        }

        return await response.json()
    },
    
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://randys-marvel.herokuapp.com/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://randys-marvel.herokuapp.com/api/heroes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
           
        });

     
    }
}