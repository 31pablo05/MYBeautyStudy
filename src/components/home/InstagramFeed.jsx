import React from "react";

const InstagramFeed = () => {
  const images = [
    "/assets/images/pestañas/MYBeauty4.webp",
    "/assets/images/pestañas/MYBeauty1.webp",
    "/assets/images/cejas/MYBeauty6.webp",
    "/assets/images/cejas/MYBeauty7.webp",
    "/assets/images/pestañas/MYBeauty2.webp",
    "/assets/images/cejas/MYBeauty3.webp",
  ];

  return (
    <section className="text-center py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 inline-block relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:via-yellow-500 after:to-yellow-600">
        <i className="fab fa-instagram text-pink-500 mr-2"></i>
        #MYBEAUTYSTUDY EN INSTAGRAM
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {images.map((img, index) => (
          <img
  key={index}
  src={img}
  alt={`Instagram post ${index + 1}`}
  className="w-36 h-36 object-cover object-center rounded-md shadow"
  style={{ imageRendering: "auto" }}
/>

        ))}
      </div>

      <a
        href="https://www.instagram.com/meliii_lash/"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        Ver Instagram
      </a>
    </section>
  );
};

export default InstagramFeed;
