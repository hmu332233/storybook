import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';
import { Tabs, RowList } from '../src/components';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Tabs', module).add(
  'basic',
  withInfo(`
      tabs에 들어갈 object 형식
      ~~~js
      {
        'label': 'asdf',
        'content': (<div>test</div>)
      }
      ~~~
    `)(() => {
    return (
      <div className="container">
        <Tabs
          tabs={[
            { label: 'Tab1', content: 'Tab1Content' },
            { label: 'Tab2', content: <div>Tab2Content</div> },
            { label: 'Tab3', content: <h1>TabContent</h1> }
          ]}
        />
      </div>
    );
  })
);

storiesOf('RowList', module).add('basic', () => {
  const items = Array(10).fill(<div style={{ width: '100px', background: '#efefef' }}>test</div>);
  return <RowList items={items} rowInterval={1.5} columnInterval={1.5} />;
});