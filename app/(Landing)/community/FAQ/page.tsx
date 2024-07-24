import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Terrabloom?",
    answer:
      "Terrabloom is a comprehensive web-based platform designed to support farmers by providing essential agricultural information, connecting them with markets, and fostering community engagement.",
  },
  {
    question: "Is Terrabloom free to use?",
    answer:
      "Yes, Terrabloom is free for farmers to use. We aim to support the agricultural community by providing free access to essential tools and information.",
  },
  {
    question: "How can I contribute to Terrabloom?",
    answer:
      "You can contribute to Terrabloom by sharing your knowledge, engaging with other farmers, and providing feedback on how we can improve the platform. You can also help by spreading the word about Terrabloom and encouraging other farmers to join the community.",
  },
  {
    question: "How can I get in touch with the Terrabloom team?",
    answer: (
      <p>
        You can get in touch with the Terrabloom team by sending an email to
        <a href="/community/Support" className="mx-2 text-primary">
          terrabloomsupport
        </a>
        We are always happy to hear from our users and welcome any feedback or
        suggestions you may have.
      </p>
    ),
  },
  {
    question: "How do I access agricultural resources?",
    answer: (
      <p>
        Go to the
        <a href="/community/Resources" className="mx-2 text-primary">
          Resources
        </a>
        section in the sidebar to access a variety of agricultural resources,
        including articles, guides, and tools designed to help you improve your
        farming practices.
      </p>
    ),
  },
  {
    question: "How can I update my profile information?",
    answer:
      "You can update your profile information by clicking on your profile icon at the top right corner and selecting Edit Profile. Make the necessary changes and save your updates.",
  },
  {
    question: "How can I showcase my farming success?",
    answer:
      "Share your farming success stories and achievements in the Showcase section. You can create a post with images and descriptions to inspire and motivate other farmers.",
  },
  {
    question: "How do I connect with other farmers?",
    answer:
      "You can connect with other farmers by  participating in discussions, and engaging with posts in the community,share your knowledge, and collaborate with fellow community members.",
  },
  {
    question: "How can I stay updated on the latest news and events?",
    answer: `You can stay updated on the latest news and events by checking the News & Events section in the sidebar. Here, you will find information on upcoming events, webinars, and other relevant news related to agriculture.
    . And if you want to share your own event, that you think will be beneficial to the community, you can do so by getting contact with the Terrabloom team and they will help you to share it with the community.
    `,
  },
];

export default function page() {
  return (
    <div className="dark:text-white">
      <div className="border-l border-t bg-white px-4 py-4 pb-4 pt-3 dark:bg-[#2B2E33]/50 dark:text-white">
        <h1 className="text-3xl dark:text-white">Frequently Asked Questions</h1>
      </div>
      <div className="px-3 sm:px-8">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
