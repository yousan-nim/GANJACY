import React from "react";

const articls = [
  {
    textHead: "The Ultimate Guide to Mouth Swab Drug Tests for Weed",
    articlesImg:
      "./articles/USDA Restrictions on Hemp and Marijuana Cultivation_ Farmers Must Choose One or the Other-Ganjacy-1653.png.webp",
    ariticleLink: "",
  },
  {
    textHead:
      "Statewide Medical Cannabis Legalization Linked to Reduced Opioid Deaths: Study",
    articlesImg:
      "./articles/Statewide Medical Cannabis Legalization Linked to Reduced Opioid Deaths_ Study-Ganjacy-1655.png.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring CBD as a Potential Treatment for Alopecia Areata",
    articlesImg:
      "./articles/Exploring CBD as a Potential Treatment for Alopecia Areata-Ganjacy-1654.png.webp",
    ariticleLink: "",
  },
  {
    textHead: "Enhancing Your Brunch with Cannabis-Infused Recipes",
    articlesImg:
      "./articles/Enhancing Your Brunch with Cannabis-Infused Recipes-Ganjacy-1478.png.webp",
    ariticleLink: "",
  },
  {
    textHead: "The cannabis basics that every user should know",
    articlesImg:
      "./articles/Choosing the Right Cannabis Strain_ Understanding Sativa vs. Indica&lt;br &gt;__Proper Storage of Cannabis_ Ensuring Quality and Potency&lt;br &gt;__THC and CBD_ Exploring the Two Major Cannabinoids&lt;br &gt;__.webp",
    ariticleLink: "",
  },
  {
    textHead:
      "Snoop Dogg's Change of Heart - Quitting Smoking Pot for Health and Clarity",
    articlesImg: "./articles/9.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring the Psychedelic Effects of Cannabis: Study Findings",
    articlesImg:
      "./articles/Exploring the Psychedelic Effects of Cannabis_ Study Findings-Ganjacy-1472.png.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring the World of Cannabis Dining",
    articlesImg:
      "./articles/Exploring the World of Cannabis Dining-Ganjacy-1473.png.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring the Cannabis Scene in Berlin",
    articlesImg:
      "./articles/Exploring the Cannabis Scene in Berlin-Ganjacy-1467.png.webp",
    ariticleLink: "",
  },
  {
    textHead:
      "The Art of Cannabis Pairing: Enjoying a Memorable Dining Experience",
    articlesImg:
      "./articles/The Art of Cannabis Pairing_ Enjoying a Memorable Dining Experience-Ganjacy-1463.png.webp",
    ariticleLink: "",
  },
  {
    textHead: "Exploring the Benefits of Cannabis Edibles",
    articlesImg:
      "./articles/Exploring the Benefits of Cannabis Edibles-Ganjacy-1458.png.webp",
    ariticleLink: "",
  },
  {
    textHead:
      "Manage Your Cannabis Expenses: Strategies for Tracking, Budgeting, and Saving Money",
    articlesImg:
      "./articles/Manage Your Cannabis Expenses_ Strategies for Tracking, Budgeting, and Saving Money-Ganjacy-1426.png.webp",
    ariticleLink: "",
  },
];

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 pb-10">
      <h2 className="w-full h-[20vh] flex items-center justify-center text-[40px] uppercase font-black text-green-700 drop-shadow-md">
        Articles on Cannabis Health and Culture
      </h2>

      <div className="w-[60%] h-auto m-auto grid grid-cols-6 gap-6">
        {articls.slice(0, 12).map((article, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-lg p-2 border col-span-2 relative rounded-xl flex flex-col justify-between hover:scale-110 transition-all duration-400"
          >
            <h2 className="mb-2 font-bold text-lg">{article.textHead}</h2>

            <img
              src={article.articlesImg}
              className="object-cover w-full h-[150px] mt-auto rounded-md"
              alt={article.textHead}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-4 py-1 bg-gray-50 text-black border drop-shadow-md rounded-full hover:bg-gray-100 hover:scale-125 transition-all duration-400">
          More
        </button>
      </div>
    </div>
  );
};

export default Index;
