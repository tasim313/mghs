import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import axios from 'axios';
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/Products/ProductSliderStyle2/ProductSlider.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';

const options = {
    loop: true,
    nav: true,
    dots: true,
    smartSpeed: 500,
    margin: 25,
    autoplayHoverPause: true,
    autoplay: true,
    
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
};

const ProductsSlider = () => {

    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])


    const [ProductCardContent, setProductCardContent] =  React.useState([]);
    
  
    React.useEffect(() => {
      axios
        .get(`${API_BASE_URL}core/product/list/`)
        .then(response => {
            const data = response.data;
            setProductCardContent(data);  
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    if (!ProductCardContent || ProductCardContent.length === 0) {
        return <p>No admission available.</p>; 
      }


    return (
        <>
            <div className={styles.servicesArea}>
                <div className="container ">
                    <div className="section-title">
                        <br></br>
                        <span>আমাদের ভর্তি প্রক্রিয়া</span>
                        <h2 className={styles.colorWhite}>একটি ঝামেলা-মুক্ত ভর্তির অভিজ্ঞতার জন্য আমাদের সাথে যোগ দিন - সহজ কাগজপত্র, বন্ধুত্বপূর্ণ পরিবেশ, এবং নতুন শুরুতে উষ্ণ স্বাগত!</h2>
                    </div>
 
                    {display ? <OwlCarousel 
                        className="services-slides owl-carousel owl-theme"
                        {...options}
                    >
                        
                        {ProductCardContent.map((result, i) =>
                            <div className={`${styles.singleServicesCard} ${styles.bgImg2}`} key={i}>
                                <div className={styles.content}>
                                    <div className={styles.icon}>
                                        <img 
                                            src={result.image.original} 
                                            className={styles.image}
                                            alt="image" 
                                        />
                                    </div>
                                    <h3>
                                        <Link href="/products/[slug]" as={`/products/${result.slug}`} passHref legacyBehavior>
                                            <a>{result.title}</a>
                                        </Link>
                                    </h3>
                                    <p>{result.short_description}</p>
                                    <Link href="/products/[slug]" as={`/products/${result.slug}`} passHref legacyBehavior>
                                        <a className={styles.servicesBtn}>Learn more</a>
                                    </Link>
                                </div>
                            </div>
                        )} 
                    </OwlCarousel> : ''}
                </div>
            </div> 
        </>
    )
}

export default ProductsSlider;