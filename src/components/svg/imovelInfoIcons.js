import React, { Component } from 'react';
import CarIcon from './car';
import BedIcon from './bed';
import ShowerIcon from './shower';
import SuiteIcon from './suite';
import LocateIcon from './locate';
import AreaIcon from './area';

class ImovelInfoIcons extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.icon == "car"){
            return (
                <CarIcon/>
            )
        } else if (this.props.icon == "bed"){
            return (
                <BedIcon/>
            )
        } else if (this.props.icon == "shower"){
            return (
                <ShowerIcon/>
            )
        } else if (this.props.icon == "suite"){
            return (
                <SuiteIcon/>
            )
        } else if (this.props.icon == "locate"){
            return (
                <LocateIcon/>
            )
        } else if (this.props.icon == "area"){
            return (
                <AreaIcon/>
            )
        }
    }
}

export default ImovelInfoIcons;