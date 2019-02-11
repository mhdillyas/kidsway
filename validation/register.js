const validator=require('validator');

const isEmpty= require('./is-empty');
module.exports=function ValidateRegisterInput(data)

{
  let errors={ };

data.name=!isEmpty(data.name)?data.name: '';
data.name=!isEmpty(data.email)?data.email: '';
data.name=!isEmpty(data.password)?data.password: '';
data.name=!isEmpty(data.password2)?data.password2: '';
  if(validator.isEmpty(data.name)){
    errors.name='name field is required';
  }
  if(validator.isEmpty(data.email)){
    errors.email='email field is required';
  }
  if(validator.isEmpty(data.password)){
    errors.password='password field is required';
  }

  if(validator.isEmpty(data.name)){
    errors.password2='field is required';
  }

  if(!validator.isLength(data.name,{min:2,max:30})){
    errors.name='name must be 2 chara and 30 chara'
  }

  if(!validator.isLength(data.password,{min:6,max:10})){
    errors.password='atleast 6 chara'
  }

  if(!validator.isLength(data.password2,{min:6,max:10})){
    errors.password2='atleast 6 chara'
  }

  if (!validator.equals(data.password,data.password2)){
    errors.password2='password must match'
  }
  


  if(!validator.isEmail(data.email)){
    errors.email='email is invalid';

  }

  
  return {
    errors:errors,
    isValid:isEmpty(errors)
  }
}