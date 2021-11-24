import { AdvantagesProps } from "./Advantages.props";
import React from "react";
import styles from './Advantages.module.css';
import AdvIcon from './adv.svg';

export const Advantages = ({ advantages }:AdvantagesProps):JSX.Element => {
  return (
    <>
      {advantages.map((advantage) => {
        return (
          <div key={advantage._id} className={styles.advantage}>
            <AdvIcon/>
            <div className={styles.title}>{advantage.title}</div>
            <hr className={styles.vline}/>
            <div>{advantage.description}</div>
          </div>
        )
      })}
    </>
  )
};