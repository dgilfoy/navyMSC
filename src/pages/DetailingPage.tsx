import * as React from 'react';
import DetailingContainer from '../containers/DetailingList';
import { withRouter } from 'react-router-dom';
import {AppPageInterface} from '../components/AppTheme';
import AppTitleBar from '../components/AppTitleBar';

export interface Props {
  appPage: AppPageInterface;
  setPageTitle(title: string): void;
  params;
}

export interface State {
  
}

class Detailing extends React.Component<Props, State>{
  constructor(props,state){
    super(props,state);
  }
  componentWillMount(){
    this.props.setPageTitle("Detailing");
  }

  render(){
    return ( 
      <div>
        <AppTitleBar title="Detailing" />
        <DetailingContainer />
      </div>
    );
  }
}

export default withRouter(Detailing);