import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`;

const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`  max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4   text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion.custom(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion.custom(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);


export default function Accordian() {
    const subheading = "FAQS"
    const heading = "You have Questions ?"
    const description = "And we have got answers to all of them."
    const faqs = [
        {
            question: "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith?",
            answer:
                "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith"
        },
        {
            question: "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith?",
            answer:
                "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith"
        },
        {
            question: "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith?",
            answer:
                "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith"
        },
        {
            question: "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith?",
            answer:
                "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith"
        },
        {
            question: "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith?",
            answer:
                "lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith lorem ipsum dolor smith"
        },
    ]

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
        else setActiveQuestionIndex(questionIndex);
    };

    return (
        <Column>
            <FAQSContainer>
                {faqs?.map((faq, index) => (
                    <FAQ
                        key={index}
                        style={{ backgroundColor: "#F5F7FA" }}
                        onClick={() => {
                            toggleQuestion(index);
                        }}
                        className="group"
                    >
                        <Question  >
                            <QuestionText>{faq.question}</QuestionText>
                            <QuestionToggleIcon
                                variants={{
                                    collapsed: { rotate: 0 },
                                    open: { rotate: -180 }
                                }}
                                initial="collapsed"
                                animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <ChevronDownIcon />
                            </QuestionToggleIcon>
                        </Question>
                        <Answer
                            variants={{
                                open: { opacity: 1, height: "auto", marginTop: "16px" },
                                collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                            }}
                            initial="collapsed"
                            animate={activeQuestionIndex === index ? "open" : "collapsed"}
                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                            {faq.answer}
                        </Answer>
                    </FAQ>
                ))}
            </FAQSContainer>
        </Column>
    );
}; 