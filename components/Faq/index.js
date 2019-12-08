import React from 'react';
import {
  Wrap,
  CollapseTab,
  CollapseData,
  Accordion,
  AccordionItem,
  CollapseAnimationBlock
} from './style';
import faqData from '../../data/faqList';

const Faq = () => {
  const [activeTab, setActiveTab] = React.useState(-1);

  const changeActiveTab = index => {
    if (activeTab === index) {
      setActiveTab(-1);
    } else {
      setActiveTab(index);
    }
  };

  return (
    <Wrap>
      <Accordion>
        {faqData.map((element, index) => {
          return (
            <AccordionItem key={element.title}>
              <CollapseTab onClick={() => changeActiveTab(index)} active={activeTab === index}>
                {element.title}
              </CollapseTab>
              <CollapseAnimationBlock active={activeTab === index}>
                <CollapseData>{element.content}</CollapseData>
              </CollapseAnimationBlock>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Wrap>
  );
};

export default Faq;
