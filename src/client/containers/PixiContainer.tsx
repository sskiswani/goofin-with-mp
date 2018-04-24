import logger from '@common/logger';
import * as PIXI from 'pixi.js';
import * as React from 'react';

interface IProps {
  pixiOptions?: PIXI.ApplicationOptions;
  onPixiMounted?: (app: PIXI.Application) => void;
  onLoaded?: (app: PIXI.Application, loader: PIXI.loaders.Loader, resources: PIXI.loaders.Resource) => void;

  clientId?: string;
  // shut up tslint
  [key: string]: any;
}

interface IState {
  running: boolean;

  // shut up tslint
  [key: string]: any;
}

export class PixiContainer extends React.Component<IProps, IState> {
  protected static defaultProps: Partial<IProps> = {
    pixiOptions: {
      autoStart: true,
      transparent: false,
      backgroundColor: 0
    }
  };

  public readonly app: PIXI.Application;
  public mountPoint!: HTMLElement;

  constructor(props: IProps, c: any) {
    super(props, c);
    this.state = {
      running: false
    };

    const { pixiOptions } = props;
    this.app = new PIXI.Application(pixiOptions);
  }

  public componentDidMount() {
    const { onPixiMounted, onLoaded } = this.props;
    this.mountPoint.appendChild(this.app.view);

    PIXI.loader.add('soldier', 'public/assets/scifiUnit_04.png').load((loader, resources) => {
      logger.info('done loading');
      if (onLoaded) {
        onLoaded(this.app, loader, resources);
      }

      const obj = new PIXI.Container();
      obj.name = 'unit';

      const sprite = new PIXI.Sprite(resources.soldier.texture);
      sprite.name = 'sprite';

      const text = new PIXI.Text(this.props.clientId);
      text.name = 'clientId';

      obj.addChild(sprite);
      obj.addChild(text);
      this.app.stage.addChild(obj);

      this.app.start();
      this.setState({ running: true });
    });

    if (onPixiMounted) {
      onPixiMounted(this.app);
    }
  }

  public render() {
    return (
      <div style={{ margin: '0 auto', width: '100%', textAlign: 'center' }} ref={el => el && (this.mountPoint = el)} />
    );
  }
}
