// ProductosForm
let productosForm = document.getElementById('productosForm')

productosForm.addEventListener('submit',(e)=>handleSubmit(e,e.target,'/api/products'))

const handleSubmit = (evt,form,route) =>{
    evt.preventDefault()
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value,key)=>obj[key]=value);
    fetch(route,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>res.json()).then(json=>console.log(json));
}

// DeleteForm

let deleteForm = document.getElementById('deleteForm')

deleteForm.addEventListener('submit',(e)=>deleteSubmit(e,e.target,'/api/products'))

const deleteSubmit = (evt,form,route) =>{
    evt.preventDefault()
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value,key)=>obj[key]=value);
    fetch(route,{
        method:"DELETE",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>res.json()).then(json=>console.log(json));
}


// ActualizarForm
let actualizarForm = document.getElementById('actualizarForm')

actualizarForm.addEventListener('submit',(e)=>actualizarSubmit(e,e.target,'/api/products'))

const actualizarSubmit = (evt,form,route) =>{
    evt.preventDefault()
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value,key)=>obj[key]=value);
    fetch(route,{
        method:"PUT",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res =>res.json()).then(json=>console.log(json));
}


// Traer un ID

let getInfo = document.getElementById('getInformation').addEventListener('submit',async function(e){
    e.preventDefault()
    
    let formData = new FormData(getInfo).forEach((value, key) =>formData[key] = value)
    document.getElementById('code-form_CxID_Form').innerHTML = `${JSON.stringify(formData)}`;
    const res =  await fetch('http://localhost:8080/api/productos/'+formData.id, {
        method: 'GET'
    })
    .then(res =>{
        if(res.status === 200){
            return res.json();
        }
        else{
            return new Error(`Error: ${res.status}`)
        }
    })
    .then(data => {
        console.log( 'data: ',data )
        document.getElementById('code-form_CxID_Method').innerHTML = `${JSON.stringify(data)}`;
    })
    .catch(err => console.log( 'error: ',err) )
})