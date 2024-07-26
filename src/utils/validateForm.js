
export const validateForm = (email, password)=>{
   const validEmail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

   const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

   if(!validEmail){
      return "Invalid Email"
   } ;
   if(!validPassword) return "Invalid Password";

   return null;

}