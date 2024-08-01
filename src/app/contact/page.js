import ContactUsPage from "@/components/partial-pages/contact";
import React from "react";
import SEO from "@/utils/actions/seo";
import { MetaDefault } from "@/utils/Helper";

const defaultMeta = MetaDefault();
export async function generateMetadata(params) {
  const response = await SEO.getContactUs();
  const metatags = response?.data?.data?.attributes?.SEO;

  // Initialize with default metadata, assuming defaultMeta is defined somewhere
  let metadata = {
    title: defaultMeta.title,
    description: defaultMeta.description,
    keywords: defaultMeta.keywords,
    openGraph: {
      locale: defaultMeta.locale || "",
      siteName: defaultMeta.siteName || "",
      title: defaultMeta.title || "",
      description: defaultMeta.description || "",
      url: defaultMeta.url || "",
      images: [{
        url: defaultMeta.image || "",
        width: defaultMeta.imageWidth || "",
        height: defaultMeta.imageHeight || "",
        alt: defaultMeta.title || "",
      }]
    }
  };

  // Dynamically update metadata based on SEO tags from the response
  metatags.forEach(tag => {
    switch (tag.name) {
      case 'title':
        metadata.title = tag.content;
        break;
      case 'description':
        metadata.description = tag.content;
        break;
      case 'keywords':
        metadata.keywords = tag.content;
        break;
      case 'og:locale':
        metadata.openGraph.locale = tag.content;
        break;
      case 'og:type':
        metadata.openGraph.type = tag.content;
        break;
      case 'og:site_name':
        metadata.openGraph.siteName = tag.content;
        break;
      case 'og:title':
        metadata.openGraph.title = tag.content;
        break;
      case 'og:description':
        metadata.openGraph.description = tag.content;
        break;
      case 'og:url':
        metadata.openGraph.url = tag.content;
        break;
      case 'og:image':
        if (tag.content) { // Check if the content is not null
          metadata.openGraph.images[0].url = tag.content;
        }
        break;
      case 'og:image:width':
        metadata.openGraph.images[0].width = 630;
        break;
      case 'og:image:height':
        metadata.openGraph.images[0].height = 1000;
        break;
    }
  });

  return metadata;
}


const ContactUs = () => {
  return <ContactUsPage />;
};

export default ContactUs;
