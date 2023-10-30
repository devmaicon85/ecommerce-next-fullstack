// /* eslint-disable @next/next/no-img-element */
// import { ImageResponse } from 'next/og'

// import colors from 'tailwindcss/colors'
// import { fetchAuthenticated } from '@/lib/fetch-authenticated'
// import { Product } from '@prisma/client'
// // Route segment config
// export const runtime = 'edge'

// // Image metadata
// // export const alt = 'About Acme'
// export const size = {
//     width: 1200,
//     height: 630,
// }

// export const contentType = 'image/png'

// // Image generation
// export async function getProduct(slug: string): Promise<Product> {
//     const response = await fetchAuthenticated(`/products/${slug}`, { next: { tags: ["product"] } });
//     return await response.json();
// }



// export default async function OgImage({ params }: { params: { slug: string } }) {

//     const product = await getProduct(params.slug);

//     return new ImageResponse(
//         (
//             // ImageResponse JSX element
//             <div
//                 style={{
//                     background: colors.zinc[950],
//                     width: '100%',
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column'
//                 }}
//             >
//                 <img
//                     src={product.imageUrls[0]}
//                     alt={product.name}
//                     style={{
//                         objectFit: 'contain',
//                         width: '100%',
//                         height: '100%',
//                     }}


//                 />
//             </div>
//         ),
//         // ImageResponse options
//         {
//             // For convenience, we can re-use the exported opengraph-image
//             // size config to also set the ImageResponse's width and height.
//             ...size
//         }
//     )
// }