const http = require('http')

const server=http.createServer((req,resp)=>{
    const data=new Date().toLocaleDateString();
    resp.write(`Current data is ${data}`)
    resp.end()
})

const port=8082

server.listen(port,()=>{
    console.log(`Server is running on port no. ${port}`)
})