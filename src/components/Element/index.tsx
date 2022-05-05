/* eslint-disable import/no-cycle */
import React from 'react';

import B from '../Bold';
import I from '../Italic';
import Paragraph from '../Paragraph';
import Link from '../Link';
import {
  Heading1, Heading2, Heading3, Heading4,
} from '../Heading';
import { ElementType } from './type';
import InnerBlock from '../InnerBlock';
import DescriptionBlock from '../DescriptionBlock';
import List from '../List';

const Element = ({
  type,
  content,
}: ElementType) => {
  // TODO: use a dictionary instead of a switch
  switch (type) {
    case 'innerBlock': {
      return <InnerBlock>{ content }</InnerBlock>;
    }
    case 'descriptionBlock': {
      return <DescriptionBlock>{ content }</DescriptionBlock>;
    }
    case 'list': {
      return <List content={content} />;
    }
    case 'elegantParagraph': {
      return <Paragraph isElegant>{content}</Paragraph>;
    }
    case 'paragraph': {
      console.log(content);
      return <Paragraph>{content}</Paragraph>;
    }
    case 'heading1': {
      if (Array.isArray(content) && content.length > 1) {
        const inside = content[1] as ElementType;
        return <Heading1>{inside.content as string}</Heading1>;
      }
      return null;
    }
    case 'heading2': {
      if (Array.isArray(content) && content.length > 1) {
        const inside = content[1] as ElementType;
        return <Heading2>{inside.content as string}</Heading2>;
      }
      return null;
    }
    case 'heading3': {
      if (Array.isArray(content) && content.length > 1) {
        const inside = content[1] as ElementType;
        return <Heading3>{inside.content as string}</Heading3>;
      }
      return null;
    }
    case 'heading4': {
      if (Array.isArray(content) && content.length > 1) {
        const inside = content[1] as ElementType;
        return <Heading4>{inside.content as string}</Heading4>;
      }
      return null;
    }
    case 'bold': {
      const inside = content[1];
      return <B>{inside}</B>;
    }
    case 'italic': {
      const inside = content[1];
      return <I>{inside}</I>;
    }
    case 'txt': {
      const inside = content;
      if (inside.length > 0) {
        return <span>{ inside }</span>;
      }
      return null;
    }
    case 'url': {
      console.log(content);
      const titleVar = content[1];
      const urlVar = content[3];
      if (titleVar.type !== 'txt' && urlVar.type !== 'txt') {
        const title = titleVar.content[0];
        const url = urlVar.content[0];
        if (url.type === 'txt') {
          return <Link href={url.content}>{title}</Link>;
        }
      }
      return null;
    }
    case 'punctuation': {
      return null;
    }
    default: {
      const inside = content;
      if (inside.length > 0) {
        return <span>{ inside.toString() }</span>;
      }
      return null;
    }
  }
};

export default Element;
