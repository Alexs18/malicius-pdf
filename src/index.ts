import { pdfdone } from "./external/pdf-generate-external"

export async function generatePdf(content:string, name:string) {
    return await pdfdone(content, name)
}