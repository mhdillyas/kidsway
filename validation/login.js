const validator=require('validator');

const isEmpty= require('./is-empty');
module.exports = function ValidateLoginInput(data){
  let errors={ };

data.name=!isEmpty(data.email)?data.email: '';
data.name=!isEmpty(data.password)?data.password: '';
  if(validator.isEmpty(data.email)){
    errors.email='email field is required';
  }
  if(validator.isEmpty(data.password)){
    errors.password='password field is required';
  }

  if(!validator.isLength(data.password,{min:6,max:10})){
    errors.password='atleast 6 chara'
  }



  if(validator.isEmail(data.email)){
    errors.email='email is invalid';

  }

  
  return {
    errors:errors,
    isValid:isEmpty(errors)
  }
}