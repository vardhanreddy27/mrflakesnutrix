'use client';

export default function CategorySlider() {
  const categories = [
    {
      label: "Speciality Flours",
      image: "https://nourishyou.in/cdn/shop/files/Specialty_Flour_1_750120cc-d36b-4d2a-9bd0-5b267e59e17e_335x335.png?v=1744909186",
      bg: "bg-[#E0F4F1]",
      textBg: "bg-[#5CA7AC]",
    },
    {
      label: "Breakfast",
      image: "https://nourishyou.in/cdn/shop/files/Breakfast_2_f7086899-3f1f-436c-bfed-da750c0d3376_335x335.png?v=1744909298",
      bg: "bg-[#FBE9F2]",
      textBg: "bg-[#942B55]",
    },
    {
      label: "Plant-based Mlk",
      image: "https://nourishyou.in/cdn/shop/files/Plant-based_Mlk_6f9982ca-f25b-468e-971f-16d21462df9f_335x335.png?v=1748680313",
      bg: "bg-[#EBE7F6]",
      textBg: "bg-[#5A2DA6]",
    },
    {
      label: "Dairy-free Alternatives",
      image: "https://nourishyou.in/cdn/shop/files/Dairy_Free_Alternatives_e19c2697-a2df-4412-8104-13475dfeedd8_335x335.png?v=1744909299",
      bg: "bg-[#FEF5D5]",
      textBg: "bg-[#55A6AA]",
    },
    {
      label: "Roasted Seeds",
      image: "https://nourishyou.in/cdn/shop/files/Roasted_Seeds_1_85bb6805-c456-40ac-bcd8-682318b1dad9_335x335.png?v=1744909297",
      bg: "bg-[#FDE9DD]",
      textBg: "bg-[#9B6040]",
    },
  ];

  return (
    <section className="py-10 bg-white px-4 sm:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Our Collection</h2>
      <p className="text-center text-[#444] text-lg mt-1 font-semibold">you’ll want them all!</p>

      {/* Grid of Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg ${cat.bg} flex flex-col justify-between overflow-hidden group`}
          >
            <div className="relative overflow-hidden h-[250px]">
              <img
                src={cat.image}
                alt={cat.label}
                draggable={false}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className={`h-[60px] flex items-center justify-center text-center font-bold text-white text-sm ${cat.textBg}`}>
              {cat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
