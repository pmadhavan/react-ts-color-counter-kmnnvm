import * as React from 'react';

const Box = ({ color, handleClick, count }) => {
  return (
    <div
      onClick={handleClick}
      className="box"
      style={{ backgroundColor: `${color}` }}
    >
      {count}
    </div>
  );
};
const getInitialState = () => {
  const colors = ['purple', 'gray', 'orange', 'green', 'red', 'yellow'];
  return colors.map((color) => ({ color, count: 0 }));
};
export const ColorCounter = () => {
  const [colorCount, setColorCount] = React.useState(getInitialState());
  const handleClick = (selectedColor: string) => {
    const updatedCount = colorCount.map(({ color, count }) => {
      if (color === selectedColor) {
        return {
          color,
          count: count + 1,
        };
      }
      return { color, count };
    });
    setColorCount(updatedCount);
  };

  const handleSort = () => {
    const sortedColors = [...colorCount].sort((a, b) => a.count - b.count);
    setColorCount(sortedColors);
  };
  return (
    <div>
      <h2>Color Counter</h2>
      <div className="color_container">
        {colorCount &&
          colorCount.map((colorObj, index) => {
            return (
              <Box
                key={index}
                color={colorObj.color}
                handleClick={() => handleClick(colorObj.color)}
                count={colorObj.count}
              />
            );
          })}
      </div>
      <button className="sort_btn" onClick={handleSort}>
        Sort by count
      </button>
    </div>
  );
};
