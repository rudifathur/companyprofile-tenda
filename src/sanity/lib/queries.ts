import { groq } from "next-sanity";

export const BANNERS_QUERY = groq`
  *[_type == "banner" && isActive == true] | order(order asc) {
    _id, title, image, linkUrl
  }
`;

export const ALL_CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(order asc) {
    _id, title, "slug": slug.current, description, coverImage
  }
`;

export const FEATURED_PRODUCTS_QUERY = groq`
  *[_type == "product" && isFeatured == true] | order(_createdAt desc) [0...6] {
    _id, name, "slug": slug.current, shortDescription, images,
    "category": category->{title, "slug": slug.current}
  }
`;

export const PRODUCTS_BY_CATEGORY_QUERY = groq`
  *[_type == "product" && category->slug.current == $categorySlug] | order(_createdAt desc) {
    _id, name, "slug": slug.current, shortDescription, images
  }
`;

export const CATEGORY_BY_SLUG_QUERY = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id, title, description
  }
`;

export const LATEST_PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(_createdAt desc) [0...24] {
    _id, name, "slug": slug.current, shortDescription, images,
    "category": category->{title, "slug": slug.current}
  }
`;

export const CATEGORIES_WITH_PRODUCTS_QUERY = groq`
  *[_type == "category"] | order(order asc) {
    _id, title, "slug": slug.current, coverImage,
    "products": *[_type == "product" && references(^._id)] | order(_createdAt desc) [0...4] {
      _id, name, "slug": slug.current, images
    }
  }
`;

export const PRODUCT_BY_SLUG_QUERY = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id, name, shortDescription, description, images, sizes, whatsappMessage,
    "category": category->{title, "slug": slug.current}
  }
`;

export const PORTFOLIO_QUERY = groq`
  *[_type == "portfolio"] | order(order asc) {
    _id, caption, image
  }
`;

export const ACTIVE_PROMOS_QUERY = groq`
  *[_type == "promo" && isActive == true] | order(_createdAt desc) {
    _id, title, image, description, validUntil
  }
`;

export const BLOG_LIST_QUERY = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id, title, "slug": slug.current, coverImage, excerpt, publishedAt
  }
`;

export const BLOG_POST_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id, title, coverImage, excerpt, body, publishedAt
  }
`;

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    siteName, logo, favicon
  }
`;
