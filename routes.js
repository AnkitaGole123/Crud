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
                        return resolve(h.response(result));
                        console.log("swari")
                    })
                    .catch((error)=>{
                        consol
                        e.log(error);
                        return reject(h.response(error));
                        console.log("ankita")
                    });
            }
            return new Promise(pr);
        }
        
    },
    {
        path:'/createuser',
        method:'POST',
        handler: async(request, h) =>{
            let pr =(resolve,reject)=>{
              return knex.insert({
                name:request.payload.name,
                username:request.payload.username,
                email:request.payload.email,
                password:request.payload.password
            }).into('users').then((result)=>{
                console.log(request.payload,"sucessfully created")
                return resolve(h.response(request.payload));
            })
            .catch((error)=>{
                console.log(error,"d");
                return reject(h.response(error));
            });
        }
    return new Promise(pr);
    
    }


    },
    // iska koi kaam nhi hai pas ham check kar rahe hai simple post kese karte hai
    // {
    //     method: "POST",
    //     path: "/account",
    //     handler: (request, h) => {
    //         return h.response(request.payload);
    //     }
    // },
    {
        path:'/updateuser/{userid}',
        method:'PUT',
        handler: async(request, h)=>{
            const {userid} = request.params;
            // console.log(userid);
            // console.log(request.params);
            // console.log(request.payload);

    
            let pr =(resolve,reject)=>{
                return knex('users').where({
                
                    id:userid,
                
                }).update({
    
                    name:request.payload.name,
                    username:request.payload.username,
                    email:request.payload.email,
                    password:request.payload.password
                
                }).then((result)=>{
                    console.log(request.payload,"sucessfully updated")
                    return resolve(h.response(request.payload));
                })
                .catch((error)=>{
                    console.log(error,"error");
                    return reject(h.response(error));
                });
            }
        return new Promise(pr);
          }  
        },
        {
            method: 'DELETE',
            path: '/deleteuser/{id}',
            handler: async(request, h)=> {
                const {id}=request.params;
    
                let pr =(resolve,reject)=>{
              
                knex('users').where({
                    
                        id:id,
                    
                    }).delete({
                        id:id
                         
                    
                }).then((result)=>{
                    console.log(request.params,"sucessfully deleted")
                    return resolve(h.response(request.params));
                })
                .catch((error)=>{
                    console.log(error,"error");
                    return reject(h.response(error));
                });
        }
        return new Promise(pr);
    
    }   
}  
]
 module.exports = routes