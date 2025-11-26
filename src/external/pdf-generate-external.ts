import puppeter from 'puppeteer'

async function generateinstance() {
    const browser = await puppeter.launch({
        headless:true,
        args:['--no-sandbox']
    });
    return browser;
}

async function generatepdf(content:string, name:string) {
    try {
       
        const browser = await generateinstance();
        const page = await browser.newPage();
        await page.setContent(content);
        const resultpdf = await page.pdf({
            format:'A4',
            path:name + '.pdf'
        });
        browser.close();
        return resultpdf.byteLength > 0 ?
            {code:202, msg:'pdf generate success', buffer: resultpdf}:
          {code:300, msg:'pdf not create review the config', buffer:null}  
        
    } catch (error) {
        
        throw new Error('dont create pdf' + error + ' ',)
    }
}

export async function pdfdone(content:string, name:string) {
    return await generatepdf(content, name);
}


