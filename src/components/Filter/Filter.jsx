import React from 'react';
import { FormFilter, LabelFilter } from './Filter.styled';
import { Input } from '../ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <FormFilter>
      <LabelFilter>
        <Input
          type="name"
          value={value}
          onChange={handleChange}
          placeholder="Contact name"
        />
      </LabelFilter>
    </FormFilter>
  );
};

export default Filter;
