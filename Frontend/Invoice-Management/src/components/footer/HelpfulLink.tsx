
import LinkList from './LinkList';

const HelpfulLink = () => {
    const links=[
        {name: 'FAQs', href: '#'},
        {name: 'Privacy Policy', href: '#'},
    ];
  return <LinkList title='HelpfulLinks' links={links}/>
}


export default HelpfulLink
