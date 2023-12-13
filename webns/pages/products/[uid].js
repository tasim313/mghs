import React from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '@/components/ServicesDetails/ServicesDetailsContent.module.css'
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';
import Error from '@/components/Error/Error';
import API_BASE_URL from '@/utils/apiBaseUrl';

const ProductsDetailsContent = () => {
    
    const router = useRouter();
    const { uid } = router.query;
    const [ProductDetailsCardContent, setProductDetailsCardContent] =  React.useState([]);
    
    React.useEffect(() => {
        if (uid) {
            axios
            .get(`${API_BASE_URL}core/product/details/${uid}/list/`)
            .then(response => {
                const data = response.data;
                setProductDetailsCardContent(data[0]);  
            })
            .catch(error => {
              console.log(error);
            });
        }
        
    }, [uid]);
    

    if (!ProductDetailsCardContent) {
        return <div>
             <NavbarStyleTwo />
             <PageBanner 
                pageTitle="Admission" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Admission" 
                BGImage="item-bg-3" 
            />
            <Error />
            <Footer />
        </div>;
      }
    
    return (
        <>
             <NavbarStyleTwo />
             <PageBanner 
                pageTitle="Admission" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Admission" 
                BGImage="item-bg-3" 
            />

            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className={styles.servicesDetailsContent}>
                                
                                <h1>{ProductDetailsCardContent.title}</h1>
                                {ProductDetailsCardContent.image ? <div className={styles.img}>
                                    <img 
                                        src={ProductDetailsCardContent.image} 
                                        alt="image" 
                                    />
                                </div> : <p></p>}
                                
                               
                                <p>{ProductDetailsCardContent.short_description}</p>

                                {ProductDetailsCardContent.short_description_image ? <div className={styles.img}>
                                    <img 
                                        src={ProductDetailsCardContent.short_description_image} 
                                        alt="image" 
                                    />
                                </div> : <p></p>}

                                
                            
                                <p>{ProductDetailsCardContent.long_description}</p>

                                {ProductDetailsCardContent.long_description_image ? <div className={styles.img}>
                                    <img 
                                        src={ProductDetailsCardContent.long_description_image} 
                                        alt="image" 
                                    />
                                </div> : <p></p>}
 
                                
                                <p>{ProductDetailsCardContent.key_Feature}</p>

                                {ProductDetailsCardContent.key_Feature_image ? <div className={styles.img}>
                                    <img 
                                        src={ProductDetailsCardContent.key_Feature_image}
                                        alt="image" 
                                    />
                                </div> : <p></p>}

                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <NewsletterForm />
            <Footer />
        </>
    )
}

export default ProductsDetailsContent;