import React from 'react'
import Link from 'next/link'
import axios from 'axios';
import styles from '@/components/Products/ProductsCard.module.css'
import API_BASE_URL from '@/utils/apiBaseUrl';



const ProductsCard = () => {

    const [ProductCardContent, setProductCardContent] =  React.useState([]);
    const button = [
        {
            viewDetailsLinkText: "Learn more",
            viewDetailsLink: "/products/products-details[uid]",
        }
    ]
  
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


    return (
        <>
            <div className="services-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>আমাদের ভর্তি প্রক্রিয়া</span>
                        <h2>একটি ঝামেলা-মুক্ত ভর্তির অভিজ্ঞতার জন্য আমাদের সাথে যোগ দিন - সহজ কাগজপত্র, বন্ধুত্বপূর্ণ পরিবেশ, এবং নতুন শুরুতে উষ্ণ স্বাগত!</h2>
                    </div>

                    <div className="row justify-content-center">
                        {ProductCardContent.map((result, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className={styles.singleServicesCard}>
                                    <div className={styles.icon}>
                                    <img 
                                        src={result.image.original} 
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
                                        <a className={styles.servicesBtn}>
                                            {button[0].viewDetailsLinkText}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCard;