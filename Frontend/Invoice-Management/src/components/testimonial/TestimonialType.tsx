interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kevin Andrew",
    role: "Freelance Developer",
    text: "I wanted to develop freelancing as a career. Now I am pursuing it full-time!",
    image: "/kevin.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Expert",
    text: "Freelancing has given me the flexibility I always wanted!",
    image: "/sarah.jpg",
  },
  {
    id: 3,
    name: "Mark Williams",
    role: "Software Engineer",
    text: "Referrals have changed my career path. Now I work with amazing clients!",
    image: "/mark.jpg",
  },
];
