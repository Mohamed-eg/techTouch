"use client";
import React, { useState } from "react";
import { Checkbox } from "@headlessui/react";

const ColorFilter = () => {
  const [colors, setColors] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (colors.includes(value)) {
      setColors(colors.filter((color) => color !== value));
    } else {
      setColors([...colors, value]);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Checkbox
        id="all"
        name="color"
        value="all"
        onChange={handleChange}
        className={({ checked }) =>
          `flex items-center gap-2 ${
            checked ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
          }`
        }>
        <Checkbox.Input type="checkbox" className="h-4 w-4 rounded" />
        <Checkbox.Label className="text-sm font-medium">All</Checkbox.Label>
      </Checkbox>
      <Checkbox
        id="purple"
        name="color"
        value="purple"
        onChange={handleChange}
        className={({ checked }) =>
          `flex items-center gap-2 ${
            checked ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-900"
          }`
        }>
        <Checkbox.Input type="checkbox" className="h-4 w-4 rounded" />
        <Checkbox.Label className="text-sm font-medium">Purple</Checkbox.Label>
      </Checkbox>
      <Checkbox
        id="blue"
        name="color"
        value="blue"
        onChange={handleChange}
        className={({ checked }) =>
          `flex items-center gap-2 ${
            checked ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
          }`
        }>
        <Checkbox.Input type="checkbox" className="h-4 w-4 rounded" />
        <Checkbox.Label className="text-sm font-medium">Blue</Checkbox.Label>
      </Checkbox>
      <Checkbox
        id="red"
        name="color"
        value="red"
        onChange={handleChange}
        className={({ checked }) =>
          `flex items-center gap-2 ${
            checked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-900"
          }`
        }>
        <Checkbox.Input type="checkbox" className="h-4 w-4 rounded" />
        <Checkbox.Label className="text-sm font-medium">Red</Checkbox.Label>
      </Checkbox>
      <Checkbox
        id="green"
        name="color"
        value="green"
        onChange={handleChange}
        className={({ checked }) =>
          `flex items-center gap-2 ${
            checked ? "bg-green-500 text-white" : "bg-gray-200 text-gray-900"
          }`
        }>
        <Checkbox.Input type="checkbox" className="h-4 w-4 rounded" />
        <Checkbox.Label className="text-sm font-medium">Green</Checkbox.Label>
      </Checkbox>
      <Checkbox
        id="yellow"
        name="color"
        value="yellow"
        onChange={handleChange}
        className={({ checked }) =>
          `flex items-center gap-2 ${
            checked ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-900"
          }`
        }>
        <Checkbox.Input type="checkbox" className="h-4 w-4 rounded" />
        <Checkbox.Label className="text-sm font-medium">Yellow</Checkbox.Label>
      </Checkbox>
      <Checkbox
        id="grey"
        name="color"
        value="grey"
        onChange={handleChange}
        className={({ checked }) =>
          `flex items-center gap-2 ${
            checked ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-900"
          }`
        }>
        <Checkbox.Input type="checkbox" className="h-4 w-4 rounded" />
        <Checkbox.Label className="text-sm font-medium">Grey</Checkbox.Label>
      </Checkbox>
    </div>
  );
};

export default ColorFilter;
