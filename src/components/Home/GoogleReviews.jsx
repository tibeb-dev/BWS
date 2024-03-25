import { ReviewsCarousel } from '../ReviewsCarousel';

const GoogleReviews = () => {
    return (
        <section className='py-14'>
            <div className='flex flex-col justify-center items-center mx-12 sm:mx-18 md:mx-36'>
                <div className='flex flex-col justify-center items-center text-center gap-12'>
                    <h2 className='text-5xl text-black font-bold'>What Our Clients Say</h2>
                    <ReviewsCarousel />
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
