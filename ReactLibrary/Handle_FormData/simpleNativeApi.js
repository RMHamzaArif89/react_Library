let submit=(event)=>{
    const formData= new FormData(event.target)
    const email=formData.get('name')
    console.log(email)
   
  }