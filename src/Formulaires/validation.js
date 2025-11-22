const useValidatEmail = (email)=>{
      if(email.trim()===''){
        return "email required";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          return "invalide email Format";
      }
      return "";
}

const useValidatPassword = (password)=>{
    if(password.trim()==="")
        return "password is required"
    if(password.length<6)
        return "password should be more than 6"
    return "";
}

const useValidatNumberPhone = (nmra)=>{
    if(nmra.trim()==="")
        return "number phone is required"
    const regex = /^0[67]\d{8}$/;
    if(!regex.test(nmra)){
        return "phone number invalide";
    }  
    return "";
}
export {useValidatEmail,useValidatNumberPhone,useValidatPassword};