"use client";

import { useState } from "react";
import Tag from "./Tag";

function TagInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState("");
  //console.log(tags);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (
      e.key === "Enter" &&
      inputValue.trim().length == 4 &&
      !isNaN(inputValue)
    ) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags?.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="inline-flex w-full appearance-none rounded-md border border-gray-500/30 pl-3 pr-10 py-2 text-base placeholder-gray-500/80 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-0 dark:bg-gray-500/20">
      <input
        type="text"
        className="w-24 mr-2 h-7 bg-blue-50 rounded"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
      />
      <div className="inline-flex flex-wrap">
        {tags?.map((tag, index) => (
          <Tag key={index} label={tag} onRemove={() => handleTagRemove(tag)} />
        ))}
      </div>
    </div>
  );
}

export default TagInput;
