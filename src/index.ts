

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('reg')?.addEventListener('click', (e)=>{
       
      let felhasznalonev = (document.getElementById('felhasznalonev') as HTMLInputElement).value;


    if (felhasznalonev.length > 30 ||  felhasznalonev.length <6) {
    
        (document.getElementById('hibaf') as HTMLInputElement).textContent = 'A felhasználónév 6 és 30 karakter közötti hosszúságú lehet';
        
    
    } else  {
        (document.getElementById('hibaf') as HTMLInputElement).textContent = ' '
    }
    
    if (felhasznalonev.includes('&') ||felhasznalonev.includes('=') ||felhasznalonev.includes('&') ||felhasznalonev.includes('_') ||felhasznalonev.includes('\'') ||felhasznalonev.includes('-') ||felhasznalonev.includes('+') ||felhasznalonev.includes(',') ||felhasznalonev.includes('<' || felhasznalonev.includes('>'))  ) {
    
        (document.getElementById('hibaf') as HTMLInputElement).textContent = 'A felhasználónév nem engedélyezett karaktert tartalmaz.';
        
    } 
    let email : string = (document.getElementById('email') as HTMLInputElement).value;

    const validateEmail = (email : string) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    
           if(validateEmail(email))
           {
            (document.getElementById('hibae') as HTMLElement).textContent = ' '
           }

           else{
            (document.getElementById('hibae') as HTMLElement).textContent = 'Hibás email'
           }

    });
})
