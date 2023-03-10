import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';

import styles from './WelcomeStep.module.scss';

export const WelcomeStep = () => {
  return (
    <WhiteBlock className={styles.block}>
      <h3>
        <img className={styles.handWaveImg} src="/static/hand-wave.png" alt="Celebration" />
        Welcom to Clubhouse!
      </h3>
      <p>
        We working hard to get Clubhouse ready for everyone! While we wrap up the finishing youches,
        we re adding people gradually to make sure nothing breaks :)
      </p>
      <div>
        <Button>
          Get your userName
          <img className="d-ib ml-10" src="static/arrow.svg" />
        </Button>
      </div>
      <div className="link mt-15 cup d-ib">Have an invite text? Sign in</div>
    </WhiteBlock>
  );
};
