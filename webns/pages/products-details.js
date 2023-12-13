import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import ProductsDetailsContent from '@/components/ProductsDetails/ProductsDetailsContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const ServicesDetails = () => {
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

            <ProductsDetailsContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default ServicesDetails;