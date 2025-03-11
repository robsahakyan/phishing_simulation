import Head from 'next/head';
import themeConfig from 'src/configs/themeConfig';
import { keywordsOfSEO } from 'src/constants/staticInfo';

interface MetaHeadProps {
    title?: string;
    description?: string;
    image?: string;
    keywords?: string
}

export const MetaHead = ({ title, description, image, keywords }: MetaHeadProps) => {
    
    return (
        <Head>
            <title>{title || themeConfig.templateName}</title>
            <meta name="description" content={description || themeConfig.templateName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="405" />
            <meta property="og:image:height" content="172" />
            <meta name="keywords" content={keywords || keywordsOfSEO} />
            <meta name="twitter:card" content="Car image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
};
