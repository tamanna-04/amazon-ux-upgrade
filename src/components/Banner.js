import { Carousel } from "react-responsive-carousel"  
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function() {
    return (
        <div className="relative">
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/> 
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false}
            showThumbs={false} interval={5000}>
                <div>
                    <img loading="lazy" src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/980_AB_GIF_Wave04_SP_TopBanner_Unrec_1242x450.jpg' alt='' />
                </div>
                    
                <div>
                    <img loading="slow" src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_1242x4501.jpg' alt='' />
                </div>
                    
                <div>
                    <img loading="slow" src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/COOP_20/Bajaj/KitchenAppliances__MobOct.jpg' alt='' />
                </div>
                
            </Carousel>
        </div>
    )
}