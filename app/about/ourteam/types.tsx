
export type Content = {
    year: number, 
    committees: Profile[],
} 

export type Profile =
{
    image: string, 
    name: string, 
    role: string, 
    course: string, 
    description: string, 
    linkedin?: string, 
    instagram?: string, 
    facebook?: string,
    
}