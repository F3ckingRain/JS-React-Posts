import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";


//Компонент для работы со списком
const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
          <MyInput
            value = {filter.query}
            onChange = {e =>setFilter({...filter, query: e.target.value})}
            placeholder = 'Поиск...'
          />
          <MySelect
            value = {filter.sort} 
            defaultValue = 'Сортировка'
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            options = {[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'}
            ]}
          />
        </div>
    );
};

export default PostFilter;