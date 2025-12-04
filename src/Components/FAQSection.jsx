import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "How do I start playing games?",
    answer:
      "Simply create an account, choose a game from the library, and click the Play Now button.",
  },
  {
    id: 2,
    question: "Are all games free to play?",
    answer:
      "Yes! All games on our platform are completely free and available for everyone.",
  },
  {
    id: 3,
    question: "How does the leaderboard work?",
    answer:
      "The leaderboard updates automatically based on player performance and highest scores.",
  },
  {
    id: 4,
    question: "Can I play on mobile devices?",
    answer:
      "Absolutely! Our platform supports all modern mobile browsers and devices.",
  },
  {
    id: 5,
    question: "How can I report a problem?",
    answer:
      "You can use our contact form from the Support section or email us directly.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-5xl px-4 mx-auto ">
      <h2 className="text-3xl font-bold text-[#7264e2] text-center mb-10">
        ❓ Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="collapse collapse-arrow bg-base-200 shadow-md"
          >
            {/* Radio-like behavior */}
            <input
              type="checkbox"
              checked={openId === faq.id}
              onChange={() => toggle(faq.id)}
            />

            <div className="collapse-title text-lg font-medium">
              {faq.question}
            </div>

            <div className="collapse-content text-black/70">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
