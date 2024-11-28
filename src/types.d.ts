type User = {
    id: number,
    email: string,
    username: string,
    fullname: string,
    password_hash: string,
    profile?: ProfileType
}

type Profile = {
    id: number,
    userId: number,
    bio?: string,
    // image?: string,
    // following?: boolean
}