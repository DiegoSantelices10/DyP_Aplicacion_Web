import { useRouter } from 'next/router'

function Button(props) {

  const router = new useRouter();

  return (
    <div>
      <button
        className={`w-full px-4 py-2 h-12
                                    rounded-md  focus:outline-none 
                                    focus:shadow-outline text-sm 
                                    ${props.className}`}
        type="button"
        onClick={() => router.push('./admin/home')}>
         {props.msg}

      </button>
    </div>
  )
}

export default Button