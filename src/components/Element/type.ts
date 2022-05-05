export type TextElementType = {
  type: 'txt';
  content: string,
};

export type ElementNameTypes = 'page'
| 'innerBlock'
| 'descriptionBlock'
| 'list'
| 'item'
| 'elegantParagraph'
| 'paragraph'
| 'heading1'
| 'heading2'
| 'heading3'
| 'heading4'
| 'bold'
| 'italic'
| 'url'
| 'punctuation';

export type GenericElementType = {
  type: ElementNameTypes,
  content: ElementType[],
};

export type ElementType = TextElementType | GenericElementType;
