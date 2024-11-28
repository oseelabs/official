type User = {
    id?: number,
    email: string,
    username: string,
    fullname: string,
    password: string,
    profile?: Profile
}

type Profile = {
    id?: number,
    userId: number,
    bio?: string,
}