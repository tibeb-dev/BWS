import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const team_photos = [
    {
        name: 'Dr. Dhia Mahmud',
        title: 'Doctor of Dental Medicine',
        img: '/assets/images/staff-photos/our-team3/dhia.jpg'
    },
    {
        name: 'Dr. Asif Tejani',
        title: 'Doctor of Dental Medicine',
        img: '/assets/images/staff-photos/our-team/asif.jpg'
    },
    {
        name: 'Melanie Lee',
        title: 'Registered Dental Hygienist',
        img: '/assets/images/staff-photos/our-team3/melanie.jpg'
    },
    {
        name: 'Jen Pendleton',
        title: 'Registered Dental Hygienist',
        img: '/assets/images/staff-photos/our-team3/jen.jpg'
    },
    {
        name: 'Aisling',
        title: 'Dental Assistant',
        img: '/assets/images/staff-photos/our-team3/aisling.jpg'
    },
    {
        name: 'Lois',
        title: 'Certified Dental Assistant',
        img: '/assets/images/staff-photos/our-team3/lois.jpg'
    },
    {
        name: 'Anabelle',
        title: 'Certified Dental Assistant',
        img: '/assets/images/staff-photos/our-team3/anabelle.jpg'
    },
    {
        name: 'Oxana',
        title: 'Office Administrator',
        img: '/assets/images/staff-photos/our-team3/oxana.jpg'
    },
    {
        name: 'Alifa',
        title: 'Office Administrator',
        img: '/assets/images/staff-photos/our-team3/alifa.jpg'
    },
];
 
export function TeamCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-7xl"
    >
      <CarouselContent>
        {team_photos.map((photo, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div key={index} className='relative flex flex-col carousel-item items-center justify-center'>
                <img src={photo.img} alt={photo.name} className='object-cover rounded-lg w-72 h-96' />
                <div className='absolute bottom-5 bg-[#111111] opacity-90 text-white rounded-lg p-3 md:w-2/3 lg:w-[90%]'>
                  <h3 className='text-xl font-medium'>{photo.name}</h3>
                  <p className='text-gray-400'>{photo.title}</p>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}