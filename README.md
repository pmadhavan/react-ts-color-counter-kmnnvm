# react-ts-color-counter-kmnnvm

### Summary

This is small react challenge that creates a grid of colored blocks and rearrages the grid based on individual count.

### Requirments

- Create a responsive grid of colors
- On click of a color box, increase the count. To begin each color box will display count as 0
- Rearrange the color box in an ascending order as the count increases.

### UI components

- Grid Container
  - Box

### Data; state/prop

- Color count as part of state of GridContainer
- onClick check color and increase count

### Learnings

- sort method is mutable, use shallow copy with spread operator [...array]
- compare methods should return -1(asc), 1(desc) or 0(no change)
- Could be sorted inside useMemo if sorted on state values.
- if needed to pass parameter to clickhandler as part of iterative rendering, swap the the way functions are passed to the handler between parent and child component
  Parent: onClick={handleClick} // onClick passed as props
  Child: onClick={()=>onClick(params)}

  Swaped, this way need not pass params as prop to child, can use params from parent.
  Parent: onClick={()=> handleClick(params)} // onClick passed as props
  Child: onClick={onClick}

  [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-kmnnvm)
