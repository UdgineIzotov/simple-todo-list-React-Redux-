/**
 * Created by Evhenii_Izotov on 2/2/2018.
 */
import React, {Component} from 'react'

import InputField from './../inputField'
import TaskItem from './../taskItem'

import {connect} from 'react-redux'

import './taksContainer.css'

const mapStatetoProps = store => ({
        tasks: store.tasks.filter(
            task => {
                return  (task.categoryId === store.categories.curCategoryId ) &&
                        ( (store.filter.isShowDone) ? true : !task.isDone ) &&
                        ( task.name.match(store.search.searchValue) )
            }
        ),
        curCategoryId: store.categories.curCategoryId
    })
class TasksContainer extends Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    addTask(taskName) {
        if (this.props.curCategoryId !== null) {
            this.props.dispatch({
                type: 'TASK_ADD',
                payload: {name: taskName, taskCategory: this.props.curCategoryId}
            })
        }
    }

    updateTask(task) {
        this.props.dispatch({type: 'TASK_UPDATE', task})
    }

    render() {
        return <div className="tasks-container">
            <InputField actionName="Add" action={this.addTask}/>
            <ul className="tasks-list">
                {
                    this.props.tasks.map((item) =>
                        <li key={item.id}>
                            <TaskItem task={item}
                                      updateTask={this.updateTask}  />
                        </li>
                    )

                }
            </ul>
        </div>;
    }
}

export default connect(mapStatetoProps)(TasksContainer)