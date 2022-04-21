  
import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    const [ patient, setPatient ] = useState();
    const [ doctor,setDoctor]=useState();
    const [ open, setOpen ] = useState(false);
    const [dr,setDr]=useState(false);
    const [pred,setPred]=useState();
    const [heart,setHeart]=useState();
    const [breast,setBreast]=useState()
   
    const [sym,setSymptoms]=useState();
    return (

        <LoginContext.Provider value={{ patient, setPatient,doctor,setDoctor,open,setOpen,dr,setDr,pred,setPred ,heart,setHeart,sym,setSymptoms}}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;