import Head from 'next/head';

const SITE_NAME = 'People and Potential Consultancy';
const DEFAULT_DESCRIPTION = 'People and Potential Consultancy';
const DEFAULT_OG_DESCRIPTION = 'Professional HR Training';
const OG_IMAGE =
  'https://res.cloudinary.com/medoptics-image-cloud/image/upload/v1713782566/People__Potential-Logo_Full_Color-1_wno2bv.png';
const SITE_URL = 'https://papec-website.vercel.app/';
const FAVICON = '/images/icon/People__Potential-Logo_Full_Color-2.png';

export default function SeoHead({
  title,
  description = DEFAULT_DESCRIPTION,
  ogDescription = DEFAULT_OG_DESCRIPTION,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={FAVICON} />
      <meta property="og:title" content={title || SITE_NAME} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:secure_url" content={OG_IMAGE} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
