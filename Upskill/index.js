const http=require('http')
const fs=require('fs')

const home=fs.readFileSync('./home.html','utf-8')      // reading home.html wile using fs module
const  about=fs.readFileSync('./about.html','utf-8')     // reading about.html wile using fs module
const contact=fs.readFileSync('./contact.html','utf-8')   // reading contact.html wile using fs module



const myserver=http.createServer((req,res)=>{   // Creating a web server 
    switch(req.url)
    {
        case '/':
           res.end(home)
            break;
        case '/about':                   // accordling Sending responses 
           res.end(about)
            break;
         case '/contact':
            res.end(contact)
            break;
        default:
        res.end('page Not Found')
    }
})
myserver.listen(3000,()=>console.log('server started'))

