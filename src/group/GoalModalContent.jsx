import React from 'react'
import styled from 'styled-components'
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

    function toggleCompleted() {
        onEditGoal(id, { completed: !completed })
    }


    function renderComment({ publishedBy, date, text }) {
        const publisher = members.find(member => member.name === publishedBy)
        return (
            <Comment key={publishedBy + date + text}>
                <ProfilePhoto photo={publisher.photo} name={publisher.name} small />
                <div className='comment-text'>
                    {text}
                </div>
                <div className='comment-date'>{moment(createdAt).startOf('day').fromNow()}</div>
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
            <CommentsList>
                {comments.map((comment, i) => renderComment(comment))}
            </CommentsList>

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

