import React from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import useSignUpWithEmailAndPassword from '../../Hooks/useSignUpWithEmailAndPassword';
import { Alert,AlertIcon} from '@chakra-ui/react';

const Signup = () => {
    const [inputs,setInputs]=useState({
        email:'',
        password:'',
        fullName:"",
        username:'',
        
        
    });
    const [showPassord,setShowPaassword]=useState(false);
    const {loading,error,signup}=useSignUpWithEmailAndPassword();
  return (
    <>
      <Input 
                placeholder='Email'
                fontSize={14}
                type='email'
                value={inputs.email}
                size={"sm"}
                onChange={(e)=>setInputs({...inputs,email:e.target.value})}
                />
                  <Input 
                placeholder='Username'
                fontSize={14}
                type='email'
                value={inputs.username}
                size={"sm"}
                onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                />
                <Input 
                placeholder='Fullname'
                fontSize={14}
                type='email'
                value={inputs.fullName}
                size={"sm"}
                onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                />
                <InputGroup>
                <Input 
                placeholder='Password'
                fontSize={14}size={"sm"}
                type={showPassord ? "text" : "password" }
                value={inputs.password}
                
                onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                />
                <InputRightElement h="full">
                    <Button variant={"ghost"} size={"sm"} onClick={()=>setShowPaassword(!showPassord)}>
                        {showPassord ? <ViewIcon/> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>

                </InputGroup>
                {error && (
				<Alert status='error' fontSize={13} p={2} borderRadius={4}>
					<AlertIcon fontSize={12} />
					{error.message}
				</Alert>
			)}

                <Button w={"full"} colorScheme='blue' size={'sm'} fontSize={14} 
                
                isLoading={loading}
                onClick={()=>signup(inputs)}>
                   "Sign up"
                </Button>
                
                 
    </>
  )
}

export default Signup