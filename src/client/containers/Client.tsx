import logger from '@common/logger';
import * as Colyseus from 'colyseus.js';
import * as React from 'react';

const PORT = Number.parseInt(process.env.APP_PORT || '3000', 10);

interface IClientContainerState {
  room?: Colyseus.Room<{}>;
  messages: string[];
}

// tslint:disable-next-line:ban-types
class Outgoing extends React.Component<{ onSend?: Function }, { text: string }> {
  constructor(p: any, c: any) {
    super(p, c);
    this.state = { text: '' };
  }

  public render() {
    const { onSend } = this.props;
    const { text } = this.state;
    return (
      <div>
        <textarea cols={80} rows={10} style={{ display: 'block' }} onChange={this.onTextChanged} value={text} />;
        <hr />
        <input disabled={!onSend} type="button" value="Send" onClick={this.onSubmit} />
      </div>
    );
  }

  private readonly onSubmit = message => {
    const { onSend } = this.props;
    if (onSend) {
      const { text } = this.state;
      onSend(text);
      this.setState({ text: '' });
    }
  };

  private readonly onTextChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      text: e.target.value
    });
  };
}

// use current hostname/port as colyseus server endpoint
const endpoint = `${location.protocol.replace('http', 'ws')}//${location.hostname}:${PORT}`;

// tslint:disable-next-line:max-classes-per-file
export default class ClientContainer extends React.Component<any, IClientContainerState> {
  private client: Colyseus.Client;
  constructor(props: any, ctx: any) {
    super(props, ctx);
    this.state = { messages: [] };
    this.client = new Colyseus.Client(endpoint);
  }

  public componentDidMount() {
    this.client.onOpen.add(() => {
      logger.debug('yooo connected baby!');

      const room = this.client.join('chat');

      // new room state
      room.onJoin.addOnce(this.onJoin);
      room.onStateChange.add(state => console.log('new room state:', state));
      room.onMessage.add(message => {
        const { messages } = this.state;
        messages.push(message);
        this.setState({ messages });
      });

      this.setState({ room });
    });
  }
  public render() {
    const { room, messages } = this.state;
    return (
      <div>
        <h1>received</h1>
        <ul>{messages.map((m, i) => <li key={i}>{m}</li>)}</ul>
        <hr />
        <Outgoing onSend={room && this.onSend} />
      </div>
    );
  }

  private readonly onSend = message => this.state.room!.send({ message });
  private readonly onJoin = state => console.log('initial room state:', state);
}
