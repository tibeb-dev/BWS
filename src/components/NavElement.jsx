import Link from "next/link"

const NavElement = props => {
  return (
    <li className='mx-4 my-6 md:my-0'>
        <Link 
            href={props.link}
            className={`${props.color} text-lg md:text-lg hover:text-[#0184C9] hover:duration-500`} 
            onClick={()=> window.scroll(0,0)}
        >
            {props.text}
        </Link>
    </li>
  )
}

export default NavElement