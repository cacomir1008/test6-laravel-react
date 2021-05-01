import {Switch, Route, BrowserRouter } from 'react-router-dom'
import AddCondition from '../AddCondition'
import AddSymptom from '../AddSymptom'
import AddTreatment from '../AddTreatment'
import { Home } from "../Home"
import { HeaderOnly } from '../templates/HeaderOnly'


export const Router = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/"> 
            <HeaderOnly>
                <Home />
            </HeaderOnly>
            </Route> 

            <Route path="/condition">
            <HeaderOnly>
                <AddCondition />
            </HeaderOnly>
            </Route>

            <Route path="/Symptom">
                <HeaderOnly>
                <AddSymptom />
                </HeaderOnly>
            </Route>

            <Route  path="/Treatment">
                <HeaderOnly>
                <AddTreatment />
                </HeaderOnly>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}
           