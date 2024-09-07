import React from 'react' 
import Image from "next/image"
import { logoutAccount } from '@/lib/actions/user.actions';

const Footer = ({user, type='desktop'}: FooterProps) => {
 const handleLogOut = async () => {
   const loggedOut = await logoutAccount(); 
 }
    return (
    <footer className="footer">
 <div className={type === 'mobile'? 'footer_name-mobile' : 'footer_name'}>
    <p className="text-xt font-bold text-gray-700">
        {user?.name}
        </p>
    </div>
    <div className={type === 'mobile'? 'footer_email-mobile' : 'footer_email'}>
<h1 className="text-14 truncate font-normal text-gray-600">
    {user?.name}

</h1>
<p className="text-14 truncate font-normal text-gray-600">
    {user?.email}

</p>
    </div>
    <div className="footer_image">
        <Image src="icons/logout.svg" fill alt="jsm" />
    </div>
    </footer>
   
  )
}

export default Footer