import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { like, delLink } from './redux/actionCreators';
import { Draggable } from 'react-beautiful-dnd';

function ListItem({ title, url, id, index }) {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.display);
  const elData = display.find((el) => el.data.id === id);

  return (
    <Draggable draggableId={id + index} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <FontAwesomeIcon icon={faTrash} onClick={() => {
            dispatch(delLink(id))
          }} className="reg" />

          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => {
              dispatch(like(id));
            }}
            className={elData.data.clicked ? 'highlight' : 'reg'}
          />
          <a href={url} target='_blank' rel='noopener noreferrer'>{title}</a>
        </div>
      )}
    </Draggable>
  );
}

export default ListItem;
