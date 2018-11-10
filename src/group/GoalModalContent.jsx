import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ProfilePhoto from '../shared/ProfilePhoto'
import GoalCompleteButton from './GoalCompleteButton'
import moment from 'moment'
export default function GoalModalContent({
    id,
    createdAt,
    creator,
    completed,
    description,
    deadline,
    comments,
    members,
    onCloseModal,
    onEditGoal
}) {

    const commentsListEl = useRef(null)

    const [commentText, setCommentText] = useState('')

    function toggleCompleted() {
        onEditGoal(id, { completed: !completed })
    }

    function handleCommentInput(e) {
        setCommentText(e.target.value)
    }

    useEffect(() => {
        commentsListEl.current.scrollTop = commentsListEl.current.scrollHeight
    }, [comments])

    function submitComment(e) {
        e.preventDefault()
        const appData = JSON.parse(localStorage.getItem('zimpla-data'))
        const { name } = appData.profile
        const comment = {
            publishedBy: name,
            date: moment().format(),
            text: commentText
        }
        onEditGoal(id, {
            comments: [...comments, comment]
        })


    }


    function renderComment({ publishedBy, date, text }) {
        const publisher = members.find(member => member.name.toLowerCase() === publishedBy.toLowerCase())
        return (
            <Comment key={publishedBy + date + text}>
                <ProfilePhoto photo={publisher.photo} name={publisher.name} small />
                <div className='comment-text'>
                    {text}
                </div>
                <div className='comment-date'>{moment(date).calendar()}</div>
            </Comment>
        )
    }



    return (
        <div>
            <CreationDetails>
                <div>
                    <ProfilePhoto photo={creator.photo} name={creator.name} />
                    <p>{creator.name}</p>
                </div>
                <p>
                    <span>Created</span>
                    {createdAt}
                </p>
            </CreationDetails>

            <h3>{description}</h3>
            <CompletionDetails>
                <p>
                    <span>Deadline</span>
                    {deadline}
                </p>
                <GoalCompleteButton completed={completed} onToggle={toggleCompleted} />

            </CompletionDetails>
            <hr />
            <CommentsList id='goal-comments-list' ref={commentsListEl}>
                <ReactCSSTransitionGroup
                    transitionName="comment"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {comments.map(comment => renderComment(comment))}
                </ReactCSSTransitionGroup>
            </CommentsList>
            <FormContainer>
                <form onSubmit={submitComment}>
                    <CommentInput value={commentText} onChange={handleCommentInput} placeholder="Write a comment..." />
                </form>
            </FormContainer>

        </div>
    )
}

const FlexBetweenAlign = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const CreationDetails = styled(FlexBetweenAlign)`
    > div {
        text-transform: uppercase;
        display: flex;
        font-weight: 500;
    }

    > p {
        color: #A1A1A1;
        font-weight: 500;
        span {
            display: block;
            text-align: right;
            font-size: 13px;
            margin-bottom: 4.5px;
        }
    }
`

const CompletionDetails = styled(FlexBetweenAlign)`
    p {
        font-weight: 500;
        span {
            display: block;
            font-size: 13px;
            margin-bottom: 4.5px;
        }
    }
`

const CommentsList = styled.div`
    max-height: 300px;
    overflow: scroll;

.comment-enter {
 opacity: 0.01;

}

.comment-enter.comment-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;

}

`

const Comment = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr max-content;
    align-items: center;
    padding: 10px 10px 10px 0px;
    font-weight: 500;

    .comment-text {
        text-align: left;
        font-size: 1.3rem;
        padding: 10px;
        max-width: 90%;
    }

    .comment-date {
        color: #A1A1A1;
        font-size: 11px;
    }
`

const CommentInput = styled.input`

    color: #9B9B9B;
    border-radius: 5px;
    display: block;
    width: 60%;
    font-size: 1.3rem;
    padding: 8px;
    margin: 0 auto;
`

const FormContainer = styled.div`
    display: block;
    padding: 10px;
    background-color: #fff;
    @media only screen and (max-width: 400px) {
        position: sticky;
        bottom: 0;
    }
`