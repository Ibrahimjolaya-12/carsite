// import React from 'react'
// import Hero from './Hero'

// const Gallery = () => {
//   return (
//     <>
//     <Hero/>
//     </>
//   )
// }

// export default Gallery

import InfiniteMenu from "./InfiniteMenu"; // یہ اسی فولڈر میں موجود فائل کو لنک کرے گا

function GalleryPage() {
  const myItems = [
    {
      image:
        "https://static.wixstatic.com/media/c837a6_b1f88607af684eccb890c85d5f657412~mv2.jpg/v1/fill/w_1000,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_b1f88607af684eccb890c85d5f657412~mv2.jpg",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_4b3ca719e6a64faab50ed6420d029029~mv2.jpg/v1/fill/w_1000,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_4b3ca719e6a64faab50ed6420d029029~mv2.jpg",
      link: "https://github.com/",
      title: "Item 2",
      description: "Webgl Infinite Menu",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_154fc933b72f447cb505a0c8788f7be3~mv2.jpg/v1/fill/w_1000,h_1339,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_154fc933b72f447cb505a0c8788f7be3~mv2.jpg",
      link: "https://google.com/",
      title: "Item 3",
      description: "Testing third item",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_60aa4d6620074c70a1bb7d89f321896d~mv2.jpg/v1/fill/w_1000,h_1236,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_60aa4d6620074c70a1bb7d89f321896d~mv2.jpg",
      link: "https://google.com/",
      title: "Item 4",
      description: "Testing third item",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_cc591aaf606147a68dab845e09c55b79~mv2.jpg/v1/fill/w_1000,h_1339,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_cc591aaf606147a68dab845e09c55b79~mv2.jpg",
      link: "https://google.com/",
      title: "Item 5",
      description: "Testing third item",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_f10ee8980e314be0b926556d11b01993~mv2.jpg/v1/fill/w_1000,h_664,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f10ee8980e314be0b926556d11b01993~mv2.jpg",
      link: "https://google.com/",
      title: "Item 6",
      description: "Testing third item",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_f10ee8980e314be0b926556d11b01993~mv2.jpg/v1/fill/w_1000,h_664,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f10ee8980e314be0b926556d11b01993~mv2.jpg",
      link: "https://google.com/",
      title: "Item 7",
      description: "Testing third item",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_07195586f8b542b6a672fc2443483979~mv2.jpg/v1/fill/w_568,h_568,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_07195586f8b542b6a672fc2443483979~mv2.jpg",
      link: "https://google.com/",
      title: "Item 8",
      description: "Testing third item",
    },
    {
      image: "https://static.wixstatic.com/media/c837a6_fed62b13f3c94ea9b1788e2e5765245f~mv2.jpg/v1/fill/w_1000,h_558,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_fed62b13f3c94ea9b1788e2e5765245f~mv2.jpg",
      link: "https://google.com/",
      title: "Item 9",
      description: "Testing third item",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxMdDf_BTuAmyVHLZawHD-BZ1fEXk-N9fGVo-6xBbIw&s=10",
      link: "https://google.com/",
      title: "Item 10",
      description: "Testing third item",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        backgroundColor: "#111",
      }}
    >
      <InfiniteMenu items={myItems} scale={1} />
    </div>
  );
}

export default GalleryPage;
