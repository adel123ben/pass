"use client";


import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { Input } from "@/components/ui/input"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { AlertDialogDemo } from '../Dialog/AlertDialogDemo';


const CheekiFeed = () => {

    const [password, setPassword] = useState<string>('');
    const [passwordLength, setPasswordLength] = useState<number>(8);
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(false);


    const copyToClipboard = () => {
        const textField = document.createElement('textarea');
        textField.innerText = password;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        // Ajoutez ici une notification ou un indicateur pour informer l'utilisateur que le mot de passe a été copié.
      };
      


    const generatePassword = () => {
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
      let validChars = lowercaseChars;

      if (includeUppercase) {
        validChars += uppercaseChars;
      }
      
      if (includeSpecialChars) {
        validChars += specialChars;
      }
      
      let generatedPassword = '';
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars.charAt(randomIndex);
      }
  
      setPassword(generatedPassword);
    };
    return ( 
        <div className='flex mt-24 space-y-2 flex-col items-center justify-center'>
              
              
      <div className='flex flex-col items-center'>
        <label className='text-lg  sm:text-2xl md:text-2xl'>Password number</label>
        <Input  className='ml-3  mt-3 '
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label className='text-lg sm:text-2xl md:text-2xl'>Include Uppercase</label>
        <input className='ml-3'
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </div>
      <div className='flex flex-row cursor-pointer'>
      <label className='text-lg sm:text-2xl md:text-2xl'>Special Characters</label>

<input className='ml-3'
  type="checkbox"
  checked={includeSpecialChars}
  onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
/>
      </div>
      
      <div>
        <label className='text-lg sm:text-2xl md:text-2xl'>Include Lowercase</label>
        <input className='ml-3'
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
      </div>
     

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Generate a Strong Password</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure for your settings?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={generatePassword}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      
      
        
      <div className='mt-11 md:text-2xl sm:text-2xl rounded-md dark:bg-orange-500  p-11 shadow-2xl'>
  <button onClick={copyToClipboard} className="mr-2">
    <FaCopy />
  </button>
  {password}
</div>
        </div>
     );
}
 
export default CheekiFeed;