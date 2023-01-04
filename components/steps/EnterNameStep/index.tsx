import clsx from 'clsx';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';

import styles from './EnterNameStep.module.scss';

export const EnterNameStep = () => {
  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What's your full name?"
        description="Peopleuse real names on CloubHouse :) Thnx!"
      />
      <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
        <div className="mb-30">
          <input className="field" placeholder="Enter fullname" />
        </div>
        <Button>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
