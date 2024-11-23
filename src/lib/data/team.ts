interface TeamMember {
    id: number;
    name: string;
    role: string;
    description: string;
    avatar: string;
    socials: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    }
}

const team: TeamMember[] = [
    {
        id: 1,
        name: 'John Doe',
        role: 'CEO',
        description: 'John is a passionate entrepreneur and a tech enthusiast. He loves working with new technologies and new ideas.',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    },
    {
        id: 2,
        name: 'Jane Doe',
        role: 'CEO',
        description: 'John is a passionate entrepreneur and a tech enthusiast. He loves working with new technologies and new ideas.',
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
        socials: {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com'
        }
    },
]

export default team;

