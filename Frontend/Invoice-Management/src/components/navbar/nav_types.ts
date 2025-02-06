export interface NavLinksProps{
    name: string;
    href: string;
}
export interface NavMobileProps{
    isMenuOpen:boolean,
}
export const links: NavLinksProps[]=[
    {name: 'Home', href:''},
    {name: 'About', href:''},
    {name: 'How-It-Works', href:''},
    {name: 'Testimonial', href:''},

];