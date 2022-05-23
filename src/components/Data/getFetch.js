const products = [
    { 
        id: "1", 
        category: "Macetas de Cemento",    
        name: "Maceta de Cemento Cuadrada",     
        price:100, 
        stock:9, 
        img: ""
    },
    { 
        id: "2", 
        category: "Macetas de Cemento",    
        name: "Maceta de Cemento Hexagonal",     
        price:200,  
        stock:8, 
        img: ""
    },
    { 
        id: "3", 
        category: "Macetas de Cemento",    
        name: "Maceta de Cemento Triangular",      
        price:300,  
        stock:2, 
        img: ""
    },
    { 
        id: "4", 
        category: "Macetas de Madera",    
        name: "Maceta de Madera",      
        price:100, 
        stock:1,  
        img: ""
    },
];
    
   
export const getFetch = (id)=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const query = id
            ? products.find(product=> product.id === id)
            : products
            resolve (query)
        },2000)
    })
}