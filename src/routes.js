import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LessonJSX from './modules/Lessons/1_LessonJSX/LessonJSX';
import LessonElements from "./modules/Lessons/2_LessonElements/LessonElements";
import LessonCompProps from "./modules/Lessons/3_LessonCompProps/LessonCompProps";
import LessonStateLifeHooks from "./modules/Lessons/4_LessonStateLifeHooks/LessonStateLifeHooks";
import LessonConditionalRenders from "./modules/Lessons/5_LessonConditionalRenders/LessonConditionalRenders";
import LessonStateLiftup from "./modules/Lessons/6_LessonStateLiftup/LessonStateLiftup";
import LessonContainerPresentational
    from "./modules/Lessons/7_LessonContainerPresentational/LessonContainerPresentational";
import LessonUserData from "./modules/Lessons/8_LessonUserData/LessonUserData";
import LessonAPIIntegration from "./modules/Lessons/9_LessonAPIIntegration/LessonAPIIntegration";
import NotFound from "./modules/App/components/NotFound";


const LESSON_TYPES = {
    JSX: 'Introduction to JSX',
    REACT_ELEMENTS: 'React Elements',
    COMP_PROPS: 'Components and Props',
    STATE_LIFEHOOKS: 'State & Lifecycle Hooks',
    CONDITIONAL_RENDERS: 'Conditional Rendering',
    STATE_LIFTUP: 'State Lift-up',
    CONTAINER_PRESENT: 'Container vs. Presentational',
    USER_DATA: 'Handling User Data',
    API_INTEGRATION: 'API Integration',
};

export default (
    <BrowserRouter>
        <Switch>
            <Route path="/intro" exact component={LessonJSX} title="fsdfsfs"/>
            <Route path="/react-elements" exact component={LessonElements}/>
            <Route path="/comp-and-props" exact component={LessonCompProps}/>
            <Route path="/state-and-hooks" exact component={LessonStateLifeHooks}/>
            <Route path="/conditional-rendering" exact component={LessonConditionalRenders}/>
            <Route path="/state-liftup" exact component={LessonStateLiftup}/>
            <Route path="/container-vs-presentational" exact component={LessonContainerPresentational}/>
            <Route path="/handling-user-data" exact component={LessonUserData}/>
            <Route path="/api-integration" exact component={LessonAPIIntegration}/>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);
