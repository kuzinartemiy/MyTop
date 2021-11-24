import { ParagraphProps } from "./Paragraph.props";
import cn from 'classnames';
import styles from './Paragraph.module.css';

export const Paragraph = ({ size ='m', children, }:ParagraphProps):JSX.Element => {
  return <p className={cn(styles.p, styles[size])}>{children}</p>
};