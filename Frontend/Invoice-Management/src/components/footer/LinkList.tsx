import React from 'react'
interface LinkItem{
    name: string;
    href: string;
}
interface LinkListProps{
    title: string;
    links: LinkItem[];
}

const LinkList:React.FC<LinkListProps> = ({title, links}) => {
  return (
    <div>
    <h3 className='font-semibold text-lg text-gray-800'>{title}</h3>
    <ul className='mt-2 list-none'>
        {links.map((link, index)=>(
            <li key={index}>
                <a href={link.href} className='text-gray-800 hover:underline'>{link.name}</a>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default LinkList
