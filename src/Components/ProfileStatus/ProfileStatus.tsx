import React from "react";

export type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, {}> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value});
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        {/*у этого инпута value и onChangeStatus связаны с локальным стэйтом*/}
                        {/*а изначально локальный стэйт status берет значение из пропсов (статус из глобального стэйта)*/}
                        <input type="text"
                               value={this.state.status}
                               onChange={this.onChangeStatus}
                               onBlur={this.deActivateEditMode}
                               autoFocus={true}/>
                    </div> :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || `no status`}</span>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;
