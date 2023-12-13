import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import ProductsCard from '@/components/Products/ProductsCard';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Products = () => {
    return (
        <>
            <NavbarStyleTwo />

			<PageBanner 
                pageTitle="Admission" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Admission" 
                BGImage="item-bg-4" 
            />

            <ProductsCard />
		 
            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Products;