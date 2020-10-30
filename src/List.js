import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ListItem from './ListItem';
import { shuffle } from './redux/actionCreators';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const LinksList = React.memo(function LinksList({ display }) {
  return display.map((el, index) => (
    <ListItem
      key={index}
      title={el.data.title}
      url={el.data.url}
      id={el.data.id}
      index={index}
    />
  ));
});

function List() {
  const display = useSelector((state) => state.display);
  const loader = useSelector((state) => state.loaded);
  const dispatch = useDispatch();

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const links = reorder(
      display,
      result.source.index,
      result.destination.index
    );

    dispatch(shuffle(links));
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {display.length > 0 && display ? (
                <LinksList display={display} />
              ) : null}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {loader ? null : <Loader />}
    </>
  );
}

export default List;
