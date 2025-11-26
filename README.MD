# MALICIUS PDF

this is a proyect to show how attacker can be take control of you computer with a simple library

### Install

npm install malicius-pdf


### how to use

        import  {generatepdf}  from 'malicius-pdf'

        // content pdf and name file without extension
        const content = '<h1>PDF TEST</h1>', file_name = 'test'

        (()=>{
            const {code} = await generatepdf(content, file_name);
            if(code == 202){
                return 'pdf create success'
            }
            return 'pdf not create'
        })