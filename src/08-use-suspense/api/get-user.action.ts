export interface User {
    id: number;
    name: String;
    location: string;
    role: string
}

export const getUserAction = async (id: number) => {
    await new Promise((res) => setTimeout(res, 2000));

    return {
        id: id,
        name: 'Gina Perez',
        location: 'Colombia',
        role: 'Desarrolladora de software'
    }
}