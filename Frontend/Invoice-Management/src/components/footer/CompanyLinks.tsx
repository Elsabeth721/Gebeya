import React from 'react'
import LinkList from './LinkList';

const CompanyLinks:React.FC = () => {
    const links=[
        {name: 'About', href: '#'},
        {name: 'Blog', href: '#'},
        {name: 'Pricing', href: '#'}
    ];
  return <LinkList title='Company' links={links}/>
}

export default CompanyLinks
