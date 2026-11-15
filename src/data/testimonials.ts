export type Testimonial = {
  id: number
  name: string
  title: string
  company: string
  industry: string
  rating: number
  text: string
  avatar?: string
  project: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Ahmed',
    title: 'CEO',
    company: 'FastFreight Logistics Ltd.',
    industry: 'Logistics',
    rating: 5,
    text: "Shelvey didn't just build us a website — he built us credibility. Within weeks we were getting calls from corporate clients who found us online. The process was transparent, the delivery was on time, and the results were real.",
    project: 'Web Development + Lead Generation',
  },
  {
    id: 2,
    name: 'Nadia Islam',
    title: 'Export Director',
    company: 'BrightToy Manufacturers',
    industry: 'Toy Export',
    rating: 5,
    text: 'We needed international buyers to take us seriously online. Shelvey understood exactly what was needed. The website he built for us is professional, in English, and has already brought in buyer inquiries we never would have gotten otherwise.',
    project: 'Web Development + Brand Marketing',
  },
  {
    id: 3,
    name: 'Karim Uddin',
    title: 'Managing Director',
    company: 'Horizon Trade Solutions',
    industry: 'B2B Services',
    rating: 5,
    text: 'What I appreciated most was that Shelvey never overpromised. He told me exactly what he would do, how long it would take, and what result to expect — and he delivered on every single point. That kind of honesty is rare.',
    project: 'Lead Generation Campaign',
  },
  {
    id: 4,
    name: 'Samia Chowdhury',
    title: 'Founder',
    company: 'Bloom Retail Brand',
    industry: 'Retail & E-commerce',
    rating: 5,
    text: 'Our social media went from ghost town to actually driving store traffic. Shelvey had a real content strategy, not just pretty posts. Three months in and our reach had tripled. I refer him to every business owner I know.',
    project: 'Social Media Marketing',
  },
]

export const testimonialsSection = {
  title: 'Client Testimonials',
  subtitle: "100% client satisfaction isn't a claim — it's a track record.",
}
