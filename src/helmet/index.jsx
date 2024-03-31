import React from 'react';
import { Helmet } from "react-helmet";

const DEFAULT_DESCRIPTION = "Build And Grow Your Business By Digital Marketing, CA services, Technological services and Much More.";
const DEFAULT_KEYWORDS = "brnadladder, brnadladder services, technical services, CA services, digital services, marketing services, startup, innovation, investment";

const HelmetComponent = ({ title, desc = DEFAULT_DESCRIPTION, author, page, keywords, focusKeywords }) => {
    if (!title && !desc && !author) {
        console.warn("HelmetComponent: Insufficient props given.");
    }

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta http-equiv="content-language" content="en" />
            <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
            <meta name="robots" content="index,follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>BrandLadder | {title && (title)}</title>
            <link rel="canonical" href={`https://brnadladder.co.in/${page && (page)}`} />
            <meta name="description" content={DEFAULT_DESCRIPTION} />
            <meta name="description" content={desc && (desc)} />
            <meta name="author" content={`brandladder,Uday Kiran, G Krishna Bhargav, Anurag Kumar, suraj sahu, dhruv Gehlot, ${author}`} />
            <meta name="keywords" content={DEFAULT_KEYWORDS} />

            {keywords && keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(", ")} />
            )}

            {focusKeywords && focusKeywords.length > 0 && (
                <meta name="keywords" content={focusKeywords.join(", ")} />
            )}

            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://brnadladder.co.in/${page && (page)}`} />
            <meta property="og:title" content={title && (title)} />
            <meta property="og:description" content={desc} />
            <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ffull-logo.png?alt=media&token=5a963339-c8d7-42f1-9b21-fc29358196e6" />
        </Helmet>
    );
};

export default HelmetComponent;
