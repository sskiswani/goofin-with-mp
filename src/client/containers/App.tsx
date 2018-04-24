import logger from '@common/logger';
import { Client } from 'colyseus.js';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Banner } from '../components/Banner';
import ClientContainer from './Client';
import { PixiContainer } from './PixiContainer';

interface IAppProps {
  name?: string;
  version?: string;
}

interface IState {
  client?: Client;
}

class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps, ctx: any) {
    super(props, ctx);
  }

  public componentDidMount() {
    logger.info('HI PLS');
  }

  public render() {
    const { name, version } = this.props;
    // const { client } = this.state;

    return (
      <div>
        <h1>pls</h1>
        <Banner color="white">
          <h1>{`Welcome to ${name}`} </h1>
          <h2>v{version}</h2>
        </Banner>
        <hr />
        <PixiContainer clientId={'UNKNOWN'} />
        <hr />
        <ClientContainer onConnected={this.onConnected} />
      </div>
    );
  }
  private onConnected = client => this.setState({ client });
}

export default hot(module)(App);
