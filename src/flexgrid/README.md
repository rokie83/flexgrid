# @bexio/flexgrid

[![npm version](https://badge.fury.io/js/%40bexio%2Fflexgrid.svg)](https://badge.fury.io/js/%40bexio%2Fflexgrid)

The Bexio Flexgrid is a 12 column based, standalone grid system, build with the flexbox CSS properties.
There is no unnecessary style included. The syntax aims to be simple and should make
coding much easier. The Bexio Flexgrid is responsive and easy to implement.

### Project status
Stable

### Getting started
To use Bexio Flexgrid you have to understand the following principles.

             
The wrapper class handles the content <code>max-width</code> for all common devices. 
All content outside this wrapper will be fluid from the left to the right of your browser.

```html
<div class="wrapper">
     <!-- your content -->
</div>
```

The grid itself is defined as a 12 column grid. The grid class contains all cell you will handle on one line.
If they don't have enough space at one line, they will brake to another line
You don't have to place the grid inside a wrapper. You are also able to nest grid's.

```html
<div class="grid">
     <!-- your content -->
</div>
```

The cell class represents, let say, your column. Cell
elements must be child's of grid elements. 
If you want to nest grid elements, the grid has to be nested in a cell. 

```html
<div class="cell">
     <!-- your content -->
</div>

// cell elements have to be child elements of grid

<div class="grid">
    <div class="cell">
         <!-- your content -->
    </div>
</div>

// cell elements have to be child elements of grid

<div class="grid">
    <div class="cell">
         <!-- your content -->
    </div>
</div>
```

<strong>Last but not least:</strong> A strength of the Bexio Flexgrid grid is the variety of modifier that can be used as you need them. 
This makes the grid very powerful and versatile.
The word modifier represents css classes like <code>left right</code> which exactly change the behaviour which they describe.

### wrapper

The wrapper reacts on the defined breakpoints and change its width to the viewport size accordingly.
You can change or define new breakpoints and the wrapper [width] as you need it for you project.

### grid
The grid is a column fluid responsive grid. That means it shrinks with the browser/device at smaller sizes.
By default the grid comes without gap (gutter: space between each cell). But you can use the predefined values when adding <code>grid-gap</code>

```html
// use predefined gap

<div class="grid grid-gap">
    <!-- your content -->
</div>
```

```html
// use predefined gap without the gap at the bottom

<div class="grid grid-gap no-bottom-gap">
    <!-- your content -->
</div>
```

### cell
The cell widths are by default automatically equal for each one.
If the screen is smaller then the cell-contents, the last cell will be break to the next line. 
When the 'braked' cell has no neighboring cell, it will be full in width, otherwise it share the width equally.

### queries
As the grid is 12 column based the media query classes can be set, with a breakpoint class-name (xs sm md lg) and a number from 1-12 representing the column it should adjust, like so <code>xs12 sm6 md4 lg3</code>.

The breakpoints are defined as follows:
- xs: 0,      // tiny devices         [phone portrait]
- sm: 544px,  // small devices        [phone landscape]
- md: 768px,  // medium devices       [tablets]
- lg: 992px,  // large devices        [desktop]
- xl: 1429px  // extra large devices  [...the future]


```html
// all nested cell's are sharing the same breakpoints

<div class="grid xs12 sm6 md4 lg3">
    <div class="cell">
         <!-- your content -->
    </div>
    <div class="cell">
         <!-- your content -->
    </div>
</div>
```

```html
// specific cell will adjust to provided breakpoints

<div class="grid">
    <div class="cell">
         <!-- your content -->
    </div>
    <div class="cell xs12 sm6 lg12">
         <!-- your content -->
    </div>
</div>
```

```html
// combining both: 
// cell's can share same breakpoints and adjust on those which want to be more specific

<div class="grid xs12 sm6 md4 lg3">
    <div class="cell">
         <!-- your content -->
    </div>
    <div class="cell">
         <!-- your content -->
    </div>
    <div class="cell lg6">
         <!-- your content -->
    </div>
    <div class="cell md12">
         <!-- your content -->
    </div>
</div>
```

### alignment
The Bexio Flexgrid offers multiple alignment modifiers. 
You are able to align the cells or the cell-content. 
The cell's and their content can be aligned in the following directions:
- vertical <strong>[top, middle, bottom]</strong>
- horrizontal <strong>[left, center, right]</strong>

```html
// this is one of multiple ways alignment can be used

<div class="grid grid-gap middle center">
    <div class="cell-shrink bottom">
         <!-- your content -->
    </div>
    <div class="cell top">
         <!-- your content -->
    </div>
    <div class="cell cell-shrink right">
         <!-- your content -->
    </div>
</div>
```

### Other used-case examples
The grid-flex modifier makes sure that <u>all cells at the same row</u> would be as high as the highest cell.

```html
<div class="grid grid-gap grid-flex">
    <div class="cell">Some cell</div>
    <div class="cell">Some cell</div>
</div>
```

The cell width are by default automatically equal for each one. 
But with the modifier <code>cell-shrink</code> you are able to shrink the cell to the size of the cell-content.

<strong>Note:</strong> If a cell has the modifier cell-shrink, all other cells will recalculate their width and share the new space with each other.

```html
<div class="grid grid-gap">
    <div class="cell">Some cell</div>
    <div class="cell cell-shrink">Some cell</div>
</div>
```

### Customize the Bexio Flexgrid
All grid specific (!default) values that can be overridden are set in <code>variables/_flexgrid.scss</code>. To override those simply redefine them before they get assigned.

## License

MIT [Bexio](http://www.bexio.com)
