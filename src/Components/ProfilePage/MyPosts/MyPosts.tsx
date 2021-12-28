import React, {ChangeEvent} from "react";
import s from '../../../styles/MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../types";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../FormsControls/FormsControl";

function MyPosts(props: {
    myPosts: Array<PostType>,
    //newPostText: string,
    //onPostChange: (value: string) => void,
    onAddNewPost: (newPostText: string) => void
}) {

    const myPosts = props.myPosts.map(elem => {
        return <Post ava={elem.ava}
                     id={elem.id}
                     name={elem.name}
                     likesCount={elem.likesCount}
                     key={elem.id}/>
    })

    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.onPostChange(e.currentTarget.value)
    // }

    // const addNewPost = () => {
    //     props.onAddNewPost();
    // }

    const onSubmitAddNewPost = (formData: AddNewPostFormDataType) => {
        props.onAddNewPost(formData.newPostText);
    }

    return (
        <div className={s.profilePage_myPosts}>
            <h2>My posts</h2>
            <AddNewPostReduxForm onSubmit={onSubmitAddNewPost}/>
            {/*<div>*/}
            {/*    <textarea cols={30} rows={5}*/}
            {/*              value={props.newPostText}*/}
            {/*              onChange={onPostChange}/>*/}
            {/*</div>*/}
            {/*<button onClick={addNewPost}>Add</button>*/}
            {myPosts}
        </div>
    )
}

type AddNewPostFormDataType = {
    newPostText: string
}

const maxLength = maxLengthCreator(10);

export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    // cols={30}
                    //    rows={5}
                       placeholder={'post message'}
                    // component={'textarea'}
                       component={Textarea}
                       name={'newPostText'}
                       validate={[required, maxLength]}
                />
            </div>
            <button>Add</button>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<AddNewPostFormDataType>({form: 'addNewPost'})(AddNewPostForm)

export default MyPosts;
