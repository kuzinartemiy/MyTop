import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({size='s', children, color='ghost', href, className, ...props}:TagProps): JSX.Element => {
  return <div
    className={cn(styles.tag, {
      [styles.m]: size === 'm',
    },
    {
      [styles.red]: color === 'red',
      [styles.gray]: color === 'gray',
      [styles.green]: color === 'green',
      [styles.primary]: color === 'primary',
    })}
    {...props}
  >
    {href ? <a href={href}>{children}</a> : <>{children}</>}
  </div>
}