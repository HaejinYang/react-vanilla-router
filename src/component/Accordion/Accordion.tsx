import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface AccordionProps {
  title: string;
  content: string;
}

interface TitleProps {
  isOpen: boolean;
}

interface ContentProps {
  height: number;
}

const Article = styled.article`
  width: 300px;
  box-shadow: 0px 0px 1px black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`;

const Title = styled.div<TitleProps>`
  position: relative;
  background-color: white;
  color: black;
  margin: 0px;
  cursor: pointer;
  border-radius: inherit;

  p {
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    margin: 0px;
  }

  &:hover {
    background-color: #eeeeee;
  }

  &::before {
    position: absolute;
    padding: 0.5rem 0.5rem 0.5rem 0;
    content: "${(props) => (props.isOpen ? "🔺" : "🔻")}";
  }
`;

const Content = styled.div<ContentProps>`
  background-color: white;
  color: black;
  margin: 0px;

  max-height: ${(props) => props.height}px;
  overflow: hidden;

  p {
    padding: 5px;
    margin: 0px;
  }

  transition: all 0.5s ease-in;
`;

const items = [
  {
    title: "상하이버거",
    content:
      "상하이 버거는 정말 맛있지...Lorem ipsum dolor sit amet. Aut velit dolor vel dolores velit aut rerum ipsa quo autem doloremque. Ut magni corrupti ex sint sunt non internos voluptatem qui libero illum. Non esse dicta ea illo labore aut quam doloribus quo enim dicta quo suscipit atque est aperiam quaerat ut labore quibusdam. Aut voluptate fugiat sit molestias corporis et adipisci consequatur ab harum omnis aut facilis voluptatem est beatae deserunt.",
  },
  {
    title: "호반닭갈비",
    content:
      "어제 먹은 호반 닭갈비는 정말 맛있었지... Lorem ipsum dolor sit amet. Aut velit dolor vel dolores velit aut rerum ipsa quo autem doloremque. Ut magni corrupti ex sint sunt non internos voluptatem qui libero illum. Non esse dicta ea illo labore aut quam doloribus quo enim dicta quo suscipit atque est aperiam quaerat ut labore quibusdam. Aut voluptate fugiat sit molestias corporis et adipisci consequatur ab harum omnis aut facilis voluptatem est beatae deserunt.",
  },
  {
    title: "짬뽕밥",
    content:
      "편의점 짬뽕면에 밥도 괜찮았지...Lorem ipsum dolor sit amet. Aut velit dolor vel dolores velit aut rerum ipsa quo autem doloremque. Ut magni corrupti ex sint sunt non internos voluptatem qui libero illum. Non esse dicta ea illo labore aut quam doloribus quo enim dicta quo suscipit atque est aperiam quaerat ut labore quibusdam. Aut voluptate fugiat sit molestias corporis et adipisci consequatur ab harum omnis aut facilis voluptatem est beatae deserunt.",
  },
];

const Accordion: React.FC<AccordionProps> = (props) => {
  const [height, setHeight] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (content && content.current) {
        setHeight(content.current.scrollHeight);
      }
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const onClickHandler = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <div onClick={onClickHandler}>
      <Title isOpen={isOpen}>
        <p>{props.title}</p>
      </Title>
      <Content height={height} ref={content}>
        <p>{props.content}</p>
      </Content>
    </div>
  );
};

const AccordionList: React.FC = () => {
  const render = items.map((item, index) => {
    return (
      <Article key={item.title}>
        <Accordion title={item.title} content={item.content} />
      </Article>
    );
  });

  return <>{render}</>;
};

export { Accordion, AccordionList };