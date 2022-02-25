import {useRouter} from 'next/router'


function Button(props) {

    const router = new useRouter(); 

    return (
                    <button
                       className={`w-full px-4 py-2  font-semibold text-white 
                                    rounded-sm  focus:outline-none 
                                    focus:shadow-outline text-sm uppercase
                                    ${props.className}`}
                      type="button"
                      onClick={()=> router.push('/registro')}>
                    {props.msg}  
                 
                    </button>
  )
}

export default Button