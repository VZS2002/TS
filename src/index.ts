

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('reg')?.addEventListener('click', (e)=>{
       
      let felhasznalonev = (document.getElementById('felhasznalonev') as HTMLInputElement).value;


    if (felhasznalonev.length > 30 ||  felhasznalonev.length <6) {
    
        (document.getElementById('hibaf') as HTMLInputElement).textContent = 'A felhasználónév 6 és 30 karakter közötti hosszúságú lehet';
        
    
    } else  {
        (document.getElementById('hibaf') as HTMLInputElement).textContent = ' '
    }
    
    if (felhasznalonev.includes('&') ||felhasznalonev.includes('=') ||felhasznalonev.includes('&') ||felhasznalonev.includes('_') ||felhasznalonev.includes('\'') ||felhasznalonev.includes('-') ||felhasznalonev.includes('+') ||felhasznalonev.includes(',') ) {
    
        (document.getElementById('hibaf') as HTMLInputElement).textContent = 'A felhasználónév nem engedélyezett karaktert tartalmaz.';
        
    } 

    })
    
    
    });
