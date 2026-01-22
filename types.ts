
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  location?: string;
}

export interface LeadFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  interest: string;
  message?: string;
}
