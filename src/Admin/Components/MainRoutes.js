import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section from './Section'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Documentation from './Documentation';

export default function MainRoutes(props) {
    return (
        <div className='mainb dark' id="mainb">
            <Switch>
                <Route path='/Home'> <Dashboard /></Route>
                <Route path='/Section_1'> <Section1 /> </Route>
                <Route path='/Section_2'> <Section2 /></Route>
                <Route path='/Section_3'> <Section3 /></Route>
                <Route path='/Section_4'> <Section4 /></Route>
                <Route path='/Section'> <Section /></Route>
                <Route path='/Section_6'> <Section6 /></Route>
                <Route path='/Section_7'> <Section7 /></Route>
                <Route path='/Section_8'> <Section8 /></Route>
                <Route path='/Documentation'> <Documentation /></Route>
                

                {/* {
                    menuItem.map((item, key) => {
                        if (item.child.length === 0) {
                            return (
                                <Route path={'/' + item.link} key={key}>
                                    {item.Component}
                                </Route>
                            )
                        } else {
                            return (
                                item.child.map((item, key) => (
                                    <Route path={'/' + item.link} key={key}>
                                        {item.Component}
                                    </Route>
                                ))
                            )
                        }
                    })
                } */}


            </Switch>
        </div>
    );
}
