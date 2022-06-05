import { useRouter } from 'next/router'

    function Button(props) {

  const router = new useRouter();

  return (
    <>
      <button className={`mx-auto w-60 py-2 h-12  rounded-2xl  text-sm 
                                        border ${props.className}`}
        type="button">
        {props.mesage}
      </button>

    </>
  )
}

export default Button