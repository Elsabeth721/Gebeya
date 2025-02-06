import React from 'react'
import LinkList from './LinkList';

const ContactInfo :React.FC = () => {
 const links=[
    { name: '123-456-7890', href: '' },
    {name: 'invoicemanagement.gmail.com', href:''}
 ];
 return <LinkList title='Contact Info' links={links} />
}

export default ContactInfo
