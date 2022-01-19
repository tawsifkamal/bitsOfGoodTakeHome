import React from 'react'
import { useState } from 'react';
import './TodoList.css';
/**
 * Thank you for applying to Bits of Good. You are free to add/delete/modify any 
 * parts of this project. That includes changing the types.ts, creating css files, 
 * modifying import statements, using contexts, etc. We do recommend to keep it simple. 
 * You will not be judged based on complexity. We also recommend using 
 * multiple components instead of coding everything on this file :)
 * 
 * Have fun! Please reach out to hello@bitsofgood.org or wkim330@gatech.edu if you
 * have any questions!
 * 
 * Bits of Good Engineering Team
 * 
 */
// TODO: Start coding from here

// Here's a baseline todo item type. 
// Feel free to extend or create your own interface!
export type TodoItem = {
  title: string,
  dueDate: Date,
  tagList: string[]
}

export default function TodoList() {
  const [tags, setTags] = useState<any[]>([]);
  const [todoListItems, setTodoListItems] = useState<any[]>([]);
  const [inputTag, setInputTag] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  function createTag() {
    if (tags.includes(inputTag)) {
      return;
    } else {
      setTags([...tags, inputTag]);
      setInputTag("");
    }
  }

  function removeTag(index: number) {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)])
  }

  function removeTodoList(index: number) {
    setTodoListItems([...todoListItems.slice(0, index), ...todoListItems.slice(index + 1)]);
  }

  function clearTag() {
    setTags([]);
  }

  function createTodoListItem() {
    if (inputTitle === "" || inputDate === "") {
      alert("Please input corresponding values! (date and/or time)");
      return;
    }

    const currentTodoListItem = {
      title: inputTitle,
      dueDate: inputDate,
      tagList: tags
    }
    setTodoListItems([...todoListItems, currentTodoListItem]);
    setInputTitle("");
    setInputTag("");
    setInputDate("");
  }

  return (
    <div>
      <div className="card">
        <div className="first-row">
          <label className="item-name">Title</label>
          <input className="item-name" type="text" placeholder="item" value={inputTitle} onChange={e => setInputTitle(e.target.value)} />
        </div>
        <div className="row first-row">
          <label>Due Date</label>
          <input type="date" value={inputDate} onChange={e => setInputDate(e.target.value)} />
        </div>
        <div className="row tags-row">
          <label>Tags</label>
          <input type="text" placeholder="enter tag" value={inputTag} onChange={e => setInputTag(e.target.value)} />
        </div>
          <button onClick={createTag}>Create Tag</button>
        <div className="center-inside"><button onClick={createTodoListItem}>Create Todo List</button></div>
        <div className="tag-container">
          {tags.map((tag, index) => {
            return (
              <div onClick={() => removeTag(index)} className="tag-name" key={index}>
                <p>
                  <div>{tag}</div>
                  <div className="icon">✖</div>
                </p>
              </div>
            )
          })}
          <div className="clear-tags-row"><button onClick={clearTag}>clear all tags</button></div>
        </div>
      </div>


      {todoListItems.map((item, index) => {
        return (
          <div className="todoList-item card" key={index}>

            {/* put checkbox here */}
            <input className="checkbox" type="checkbox" />
            <div className="middle">
              <div className="title">{item.title}</div>
              <div className="tag-container">
                {item.tagList.map((tag: any) => {
                  return <div className="tag-name">
                    <p>{tag}</p>
                  </div>
                })}
              </div>
            </div>
            <div className="date">{item.dueDate}</div>

          </div>
        )
      })}




    </div>
  )
}
