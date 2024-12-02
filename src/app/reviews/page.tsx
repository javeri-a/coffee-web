import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "John Deo",
      image: "/c1.png", 
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae? Iste consequatur, hic obcaecati qui eos expedita.",
      rating: 5,
    },
    {
      name: "John Deo",
      image: "/c2.png", 
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae? Iste consequatur, hic obcaecati qui eos expedita.",
      rating: 5,
    },
    {
      name: "John Deo",
      image: "/c3.png", 
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae? Iste consequatur, hic obcaecati qui eos expedita.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <h2 className="text-center text-3xl font-bold mb-10">
        CUSTOMERS <span className="text-[#D3AD7F]">REVIEW</span>
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-black border border-white rounded-lg p-6 max-w-xs shadow-md "
          >
            <p className="text-lg italic mb-4">{review.review}</p>
            <div className="flex items-center gap-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full border border-gray-700"
              />
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <div className="flex">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
