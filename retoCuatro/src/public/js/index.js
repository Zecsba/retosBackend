let productosForm = document.getElementById('productosForm')
const handleSubmit = (evt,form,route) =>{
    evt.preventDefault()
    let formData = new FormData(form);
    fetch(route,{
        method:"POST",
        body:formData
    })
}

productosForm.addEventListener('submit',(e)=>handleSubmit(e,e.target,'/api/products'))

let deleteForm = document.getElementById('deleteForm')
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

deleteForm.addEventListener('submit',(e)=>deleteSubmit(e,e.target,'/api/products'))


let actualizarForm = document.getElementById('actualizarForm')
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

actualizarForm.addEventListener('submit',(e)=>actualizarSubmit(e,e.target,'/api/products'))