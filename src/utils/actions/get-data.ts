import { redirect } from "next/navigation";

// function delay(ms: number){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

export async function getDataHome(){
    try{
        // await delay(2500)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/674912653dbd639ab303fc30?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, { next: { revalidate: 120 } })

        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        return res.json();
    } catch(error){
        console.log("Failed to fetch data: ", error)
        redirect('/')
    }
}