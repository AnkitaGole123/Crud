const knex = require("./knex");
const routes=[
    {
        method: 'GET',
        path: '/{ramu}',
        handler: (request, h) => {

            return `Hello, ${request.params.ramu}!`;
        }
    },
    {
        method: 'GET',
        path: '/hello',
        handler: (request, h) => {

            return h.file('./public/hello.html');
        }
    },
    {
        method: 'GET',
        path:'/allusers',
        handler:(request,h)=>{
            let pr = (resolve,reject) => {
                knex("users").select("name","username","email","password")
                    .then((result)=>{
                        console.log(result)
                        return resolve(h.response(result));
            
                    })
                    .catch((error)=>{
                        console.log(error);
                        return reject(h.response(error));
        
                    });
            }
            return new Promise(pr);
        }

    },
    {
        method: 'DELETE',
        path:'/deleteData/{id}',
        handler:(request, h)=> {
            const {id} = request.params;
            let pr = (resolve, reject) =>{
                knex('users').where({
                    id:id

                }).delete({
                    id:id
                }).then((result)=>{
                    return resolve(h.response(result));
        
                }).catch((error)=>{
                    console.log(error);
                    return reject(h.response(error));
    
                });
            }
            return new Promise(pr)
        }
    },
    {
        path:'/createuser',
        method:'POST',
        handler: async(request, h) =>{
            let pr =(resolve,reject)=>{
                knex.insert ({
                    name:request.payload.name,
                    password:request.payload.password,
                    email:request.payload.email,
                    username:request.payload.username  
                }).into('users').then((result)=>{
                    return resolve(h.response(result));
        
                }).catch((error)=>{
                    console.log(error);
                    return reject(h.response(error));
    
                });
        }
    return new Promise(pr);
    
    }
    },
    
    {
        path:'/updateuser/{id}',
        method:'PUT',
        handler: async(request, h)=>{
            const {id} = request.params;
            let pr =(resolve,reject)=>{
                knex("users").where({
                
                    id:id,
                
                }).update({
    
                    username:request.payload.username,
                    name:request.payload.name,
                    email:request.payload.email,
                    password:request.payload.password
                
                }).then((result)=>{
                    return resolve(h.response(request.payload));
                })
                .catch((error)=>{
                    return reject(h.response(error));
                });
            }
        return new Promise(pr);
          }  
        },

          
]
 module.exports = routes