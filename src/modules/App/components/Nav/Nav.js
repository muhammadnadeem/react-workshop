import React, {Component} from "react";
import classnames from 'classnames';

import './Nav.css';

const LESSON_TYPES = {
    JSX: {title: 'Introduction to JSX', route: '/intro'},
    REACT_ELEMENTS: {title: 'React Elements', route: '/react-elements'},
    COMP_PROPS: {title: 'Components and Props', route: '/comp-and-props'},
    STATE_LIFEHOOKS: {title: 'State & Lifecycle Hooks', route: '/state-and-hooks'},
    CONDITIONAL_RENDERS: {title: 'Conditional Rendering', route: '/conditional-rendering'},
    STATE_LIFTUP: {title: 'State Lift-up', route: '/state-liftup'},
    CONTAINER_PRESENT: {title: 'Container vs. Presentational', route: '/container-vs-presentational'},
    USER_DATA: {title: 'Handling User Data', route: '/handling-user-data'},
    API_INTEGRATION: {title: 'API Integration', route: '/api-integration'},
};


class Nav extends (Component) {
    constructor(props) {
        super(props);

        this.state = {
            activeLesson: LESSON_TYPES.API_INTEGRATION.title,
        };
    }

    toggleLesson(lesson) {
        this.setState({
            activeLesson: lesson.title,
        });
    }

    render() {
        const {activeLesson} = this.state;
        return (
            <aside>
                <ul className="lessons-list">
                    {Object.keys(LESSON_TYPES).map((aLesson) =>
                        <li key={aLesson}>
                            <a
                                className={classnames({
                                    'lesson-item': true,
                                    active: LESSON_TYPES[aLesson].title === activeLesson
                                })}
                                onClick={this.toggleLesson.bind(this, LESSON_TYPES[aLesson].title)}
                                href={LESSON_TYPES[aLesson].route}>
                                {LESSON_TYPES[aLesson].title}
                            </a>
                        </li>)
                    }
                </ul>
            </aside>
        );
    }
}


export default Nav;
