import React from "react";

export type ProfileStatusPropsType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, {}> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input type="text" value={this.props.status} onBlur={this.deActivateEditMode.bind(this)} autoFocus={true}/>
                    </div> :
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;
