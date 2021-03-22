import React from 'react';

import {Dashboard as DashboardPage} from '../pages';
import {Switch, Route} from "react-router-dom";

import {Appointment, Services, Reviews, Masters, Gallery, Contact} from '../layouts';

export default function Dashboard() {
    return (
        <DashboardPage>
            <Switch>
                <Route path='/attachments' component={Appointment}/>
                <Route path='/gallery' component={Gallery}/>
                <Route path='/masters' component={Masters}/>
                <Route path='/services' component={Services}/>
                <Route path='/reviews' component={Reviews}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </DashboardPage>
    )
}