import * as React from 'react';
import CommandHospitalsContainer from '../containers/CommandsList';
import {AppPageInterface} from '../components/AppTheme'
export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
}

export interface State {
  
}

export default class CommandsPage extends React.Component<Props, State>{

  componentWillMount(){
    this.props.setPageTitle("Commands");
  }

  render(){
    console.log(this.props.appPage.screen);
    return <div style={{backgroundColor: 'white'}}>
              <CommandHospitalsContainer />
    </div>;
  }
}