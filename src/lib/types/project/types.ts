export interface ProjectBase {
    title: string
    description?: string
    image?: string
}

export interface Project extends ProjectBase {
    _id?: string
    stack: string[]
    techHighlight: string
    githubUrl: string
    demoUrl: string
    createdAt?: string
}

export interface ProjectAPI extends ProjectBase {
    link?: string
    github?: string
}