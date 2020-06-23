import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import styles from './styles.css';

const AllFilterButton = ({ setFilter }) => {
  const TodoStatus = useSelector((state) => state.TodoStatus);
  const TodoFilters = useSelector((state) => state.TodoFilters);
  const selectedFilter = useSelector((state) => state.selectedFilter);

  const filter = TodoFilters.ALL;
  const statusList = [TodoStatus.TODO, TodoStatus.DONE];

  const classes = classNames(
    styles['filter-button'],
    styles['filter-button-all'],
    selectedFilter === filter ? styles['filter-button-selected'] : ''
  );

  return (
    <button className={classes} onClick={() => setFilter(statusList, filter)}>
      All
    </button>
  );
};

export default AllFilterButton;
